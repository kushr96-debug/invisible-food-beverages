import { catalogData } from '@/lib/products';
import ProductsCatalog from '../products-catalog';

export function generateStaticParams() {
  return catalogData.map((category) => ({ category: category.id }));
}

export default async function CategoryProductsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <ProductsCatalog initialCategory={category} />;
}
