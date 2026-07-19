export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  desc: string;
  description: string;
  image: string;
  items?: string[];
  subcategories?: { name: string; items: string[] }[];
};

export const makeSlug = (name: string) =>
  name.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^\w-]+/g, '');

const productImages: Record<string, string> = {
  turmeric: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=900&auto=format&fit=crop',
  chilli: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=900&auto=format&fit=crop',
  ginger: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=900&auto=format&fit=crop',
  cardamom: 'https://images.unsplash.com/photo-1638370818928-93fa49d1321b?q=80&w=900&auto=format&fit=crop',
  cinnamon: 'https://images.unsplash.com/photo-1601379760883-1bb497c55858?q=80&w=900&auto=format&fit=crop',
  'black-pepper': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop',
  'cumin-seeds': 'https://images.unsplash.com/photo-1599909533730-f7b3162d445e?q=80&w=900&auto=format&fit=crop',
  'coriander-seeds': 'https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=900&auto=format&fit=crop',
  'sesame-seeds': 'https://images.unsplash.com/photo-1587049352847-4d4b126a31c5?q=80&w=900&auto=format&fit=crop',
  groundnut: 'https://images.unsplash.com/photo-1567892737950-30c4db37cd89?q=80&w=900&auto=format&fit=crop',
  soybean: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=900&auto=format&fit=crop',
  'moringa-powder': 'https://images.unsplash.com/photo-1608035411784-fa6d7e29bb63?q=80&w=900&auto=format&fit=crop',
  'aloe-vera-powder': 'https://images.unsplash.com/photo-1596547609652-9cf5d8c15f36?q=80&w=900&auto=format&fit=crop',
  'onion-powder': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=900&auto=format&fit=crop',
  'garlic-powder': 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=900&auto=format&fit=crop',
  'kabuli-chickpeas': 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=900&auto=format&fit=crop',
  'moong-dal': 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=900&auto=format&fit=crop',
  'premium-basmati-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=900&auto=format&fit=crop',
  'white-rice': 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=900&auto=format&fit=crop',
  'brown-rice': 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=900&auto=format&fit=crop',
};

export const catalogData: ProductCategory[] = [
  { id: 'whole-spices', slug: 'whole-spices', name: 'Whole Spices', summary: 'Premium sourced whole spices.', desc: 'Premium sourced whole spices, expertly processed and export ready.', description: 'Whole spices processed for aroma, color, purity, and international buyer specifications.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop', items: ['Turmeric', 'Chilli', 'Ginger', 'Nutmeg', 'Cardamom', 'Cinnamon', 'Black Pepper', 'White Pepper', 'Cumin Seeds', 'Fennel Seeds', 'Ajwain Seeds', 'Coriander Seeds'] },
  { id: 'oil-seeds', slug: 'oil-seeds', name: 'Oil Seeds', summary: 'High-yield seeds for global use.', desc: 'High-yield, carefully sorted oil seeds for global food and industrial applications.', description: 'Carefully sorted oil seeds for food processors, manufacturers, and bulk distribution.', image: 'https://images.unsplash.com/photo-1587049352847-4d4b126a31c5?q=80&w=1200&auto=format&fit=crop', items: ['Yellow Mustard Seeds', 'Sesame Seeds', 'Groundnut', 'Soybean'] },
  { id: 'spray-dried', slug: 'spray-dried', name: 'Spray Dried Powders', summary: 'Soluble fruit and vegetable powders.', desc: 'Highly soluble, long shelf-life powders retaining natural flavor and color.', description: 'Spray dried powders designed for food-service, beverage, seasoning, and ingredient applications.', image: 'https://images.unsplash.com/photo-1615486171448-4fd1ee4ae288?q=80&w=1200&auto=format&fit=crop', items: ['Spray Dried Tomato Powder', 'Spray Dried Tamarind Powder', 'Spray Dried Lemon Powder', 'Spray Dried Beetroot Powder'] },
  { id: 'herbs', slug: 'herbs', name: 'Herbs', summary: 'Culinary and wellness herb powders.', desc: 'Pure, medicinal, and culinary herbal powders sourced from pristine environments.', description: 'Herbal ingredients selected for clean processing, natural character, and dependable quality.', image: 'https://images.unsplash.com/photo-1608035411784-fa6d7e29bb63?q=80&w=1200&auto=format&fit=crop', items: ['Aritha Powder', 'Moringa Powder', 'Amla Powder', 'Aloe Vera Powder', 'Ashwagandha Powder'] },
  { id: 'dehydrated', slug: 'dehydrated', name: 'Dehydrated Products', summary: 'Shelf-stable dehydrated ingredients.', desc: 'Quality dehydrated ingredients processed to preserve essential nutrients and aroma.', description: 'Dehydrated onion, garlic, and vegetable products packed for reliable global supply.', image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=1200&auto=format&fit=crop', subcategories: [{ name: 'Onion Variants', items: ['Onion Flakes/Kibbled', 'Onion Chopped', 'Onion Minced', 'Onion Granules', 'Onion Powder'] }, { name: 'Garlic Variants', items: ['Garlic Flakes/Kibbled', 'Garlic Chopped', 'Garlic Minced', 'Garlic Granules', 'Garlic Powder'] }, { name: 'Other Dehydrated Items', items: ['Ginger Flakes/Powder', 'Potato Flakes/Powder', 'Green Chilli Powder', 'Amchur Powder'] }] },
  { id: 'grains-pulses', slug: 'grains-pulses', name: 'Grains & Pulses', summary: 'Clean pulses for bulk channels.', desc: 'Nutrient-rich, thoroughly cleaned pulses and grains for bulk international supply.', description: 'Pulses and grains cleaned, sorted, graded, and prepared for dependable shipment cycles.', image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop', items: ['Kabuli Chickpeas', 'Desi Chana', 'Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal'] },
  { id: 'ground-spices', slug: 'ground-spices', name: 'Ground Spices', summary: 'Finely milled spice powders.', desc: 'Finely milled pure spices with authentic, potent flavor profiles.', description: 'Ground spices and custom blends milled for authentic taste, consistency, and export needs.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop', items: ['Cumin Powder', 'Fennel Powder', 'Coriander Powder', 'Curry Powder', 'Turmeric Powder', 'Chilli Powder'] },
  { id: 'premium-rice', slug: 'premium-rice', name: 'Premium Rice', summary: 'Premium rice for export markets.', desc: 'High-quality, carefully milled rice varieties suitable for diverse culinary applications.', description: 'Premium rice varieties sourced, milled, inspected, and packed for global buyers.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop', items: ['Premium Basmati Rice', 'Non-Basmati Rice', 'White Rice', 'Brown Rice', 'Black Rice'] }
];

export const productCategories = catalogData;

export function getCategory(slug: string) {
  return catalogData.find((category) => category.slug === slug || category.id === slug);
}

export const getCategoryProducts = (category: ProductCategory) =>
  category.items ?? category.subcategories?.flatMap((sub) => sub.items) ?? [];

export const getProductImage = (name: string, category: ProductCategory) =>
  productImages[makeSlug(name)] ?? category.image;

export const findProduct = (categoryId: string, productSlug: string): (Product & { category: ProductCategory }) | undefined => {
  const category = catalogData.find((item) => item.id === categoryId || item.slug === categoryId);
  if (!category) return undefined;

  const productName = getCategoryProducts(category).find((item) => makeSlug(item) === productSlug);
  if (!productName) return undefined;

  const isPowder = productName.toLowerCase().includes('powder');
  const isRice = category.id === 'premium-rice';

  return {
    category,
    name: productName,
    slug: productSlug,
    tagline: `${category.name} product prepared for reliable bulk sourcing.`,
    description: `${productName} is sourced, cleaned, processed, and packed for importers, distributors, and food businesses that need dependable Indian agricultural supply with consistent quality and documentation support.`,
    image: getProductImage(productName, category),
    highlights: ['Export-ready sorting and grading', 'Bulk packaging options available', 'Documentation support for international shipments', 'Quality-focused sourcing from trusted suppliers'],
    specs: [
      { label: 'Origin', value: 'India' },
      { label: 'Form', value: isPowder ? 'Fine powder' : isRice ? 'Milled grain' : 'Whole / processed' },
      { label: 'Moisture', value: isRice ? '12% max' : '10% max' },
      { label: 'Packaging', value: 'Custom bulk packs' },
    ],
    applications: isRice ? ['Retail packs', 'Food service', 'Wholesale distribution'] : ['Food manufacturing', 'Spice blending', 'Retail and wholesale packs'],
  };
};
