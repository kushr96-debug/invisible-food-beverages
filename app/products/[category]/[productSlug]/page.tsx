import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalogData, findProduct, getCategoryProducts, makeSlug } from '@/lib/products';

const theme = {
  bg: 'bg-[#091612]',
  surface: 'bg-[#132620]',
  border: 'border-white/10',
  textMain: 'text-white',
  textMuted: 'text-gray-400',
  accentText: 'text-[#D4FF00]',
  btnBg: 'bg-[#D4FF00]',
  btnBgHover: 'hover:bg-[#bce000]',
  btnText: 'text-[#091612]',
};

export function generateStaticParams() {
  return catalogData.flatMap((category) =>
    getCategoryProducts(category).map((item) => ({
      category: category.id,
      productSlug: makeSlug(item),
    }))
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; productSlug: string }>;
}) {
  const { category, productSlug } = await params;
  const product = findProduct(category, productSlug);

  if (!product) return notFound();

  const faqs = [
    { q: 'Can this product be ordered in bulk?', a: `Yes. ${product.name} is available for bulk export inquiries with packaging customized to buyer requirements.` },
    { q: 'What documentation can be supported?', a: 'Our team can support standard commercial export paperwork and product-specific documentation requests during quotation.' },
    { q: 'Can packaging be customized?', a: 'Bulk sacks, cartons, and private-label retail pack discussions can be handled based on volume and destination.' },
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>
      <section className="mx-auto max-w-7xl border-b border-white/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm">
          <Link href="/products" className={`${theme.textMuted} hover:text-white transition`}>Products</Link>
          <span className={theme.textMuted}>/</span>
          <Link href={`/products/${product.category.id}`} className={`${theme.textMuted} hover:text-white transition`}>{product.category.name}</Link>
          <span className={theme.textMuted}>/</span>
          <span className={theme.accentText}>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className={`${theme.btnBg} ${theme.btnText} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                {product.category.name}
              </span>
              <span className={`text-sm font-semibold uppercase tracking-wider ${theme.textMuted}`}>Export Ready</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{product.name}</h1>
            <p className="mb-4 text-xl font-medium text-gray-200 sm:text-2xl">{product.tagline}</p>
            <p className={`text-lg leading-relaxed ${theme.textMuted} mb-10 max-w-xl`}>{product.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote-form" className={`${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-8 py-4 rounded-xl font-bold transition shadow-lg`}>Request Quote</a>
              <Link href="/products" className={`px-8 py-4 rounded-xl font-bold border ${theme.border} hover:bg-white/5 transition`}>Back to Catalog</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {/* Image Container */}
  <div className="col-span-1 sm:col-span-2 aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/10">
    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
  </div>
  
  {/* Cards Container - Added col-span-1 sm:col-span-2 to stretch full width */}
  <div className="col-span-1 sm:col-span-2 space-y-6">
    
    {/* Key details card */}
    <div className={`${theme.surface} rounded-2xl p-6 border ${theme.border}`}>
      <h2 className="text-xl font-bold mb-4">Key details</h2>
      <dl className="space-y-3">
        {product.specs.map((spec) => (
          <div key={spec.label} className={`flex justify-between gap-4 border-b border-border/20 pb-3 last:border-b-0`}>
            <dt className={theme.textMuted}>{spec.label}</dt>
            <dd className="font-semibold text-right">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>

    {/* Applications card */}
    <div className={`${theme.surface} rounded-2xl p-6 border ${theme.border}`}>
      <h2 className="text-xl font-bold mb-4">Applications</h2>
      <ul className={`space-y-3 list-disc list-inside px-1 ${theme.textMuted}`}>
        {product.applications.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
    
  </div>
</div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 ${theme.surface} border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Product Assurance</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliable supply for global buyers</h2>
            <p className={theme.textMuted}>Each listing includes practical details for importers evaluating quality, packaging, and use cases.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.highlights.map((highlight) => (
              <div key={highlight} className={`p-6 rounded-2xl bg-[#091612] border ${theme.border}`}>
                <p className="font-semibold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center mb-12">
          <span className={`uppercase tracking-wider text-sm font-bold ${theme.accentText} block mb-2`}>FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold">Export answers, simplified</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className={`border ${theme.border} rounded-xl overflow-hidden ${theme.surface} group`}>
              <summary className="px-6 py-5 cursor-pointer font-semibold text-lg hover:bg-white/5 transition">{faq.q}</summary>
              <p className={`px-6 pb-6 ${theme.textMuted}`}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="quote-form" className={`py-16 sm:py-20 lg:py-24 ${theme.surface} border-t ${theme.border}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ask about {product.name}</h2>
          <p className={`text-lg ${theme.textMuted} mb-8`}>Share destination, quantity, packaging preference, and target shipment timeline for a tailored export quote.</p>
          <Link href="/contact" className={`${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} inline-flex px-8 py-4 rounded-xl font-bold transition shadow-lg`}>Contact export team</Link>
        </div>
      </section>
    </div>
  );
}
