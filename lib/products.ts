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
  'turmeric': '/products/turmeric.png',
  'chilli': '/products/chilli.png',
  'ginger': '/products/ginger.png',
  'nutmeg': '/products/nutmeg.png',
  'cardamom': '/products/cardamom.png',
  'cinnamon': '/products/cinnamon.png',
  'black-pepper': '/products/black-pepper.png',
  'white-pepper': '/products/white-pepper.png',
  'cumin-seeds': '/products/cumin-seeds.png',
  'fennel-seeds': '/products/fennel-seeds.png',
  'ajwain-seeds': '/products/ajwain-seeds.png',
  'coriander-seeds': '/products/coriander-seeds.png',
  'yellow-mustard-seeds': '/products/yellow-mustard-seeds.png',
  'sesame-seeds': '/products/sesame-seeds.png',
  'groundnut': '/products/groundnut.png',
  'soybean': '/products/soybean.png',
  'spray-dried-tomato-powder': '/products/spray-dried-tomato-powder.png',
  'spray-dried-tamarind-powder': '/products/spray-dried-tamarind-powder.png',
  'spray-dried-lemon-powder': '/products/spray-dried-lemon-powder.png',
  'spray-dried-beetroot-powder': '/products/spray-dried-beetroot-powder.png',
  'aritha-powder': '/products/aritha-powder.png',
  'moringa-powder': '/products/moringa-powder.png',
  'amla-powder': '/products/amla-powder.png',
  'aloe-vera-powder': '/products/aloe-vera-powder.png',
  'ashwagandha-powder': '/products/ashwagandha-powder.png',
  'onion-flakes-kibbled': '/products/onion-flakes-kibbled.png',
  'onion-chopped': '/products/onion-chopped.png',
  'onion-minced': '/products/onion-minced.png',
  'onion-granules': '/products/onion-granules.png',
  'onion-powder': '/products/onion-powder.png',
  'garlic-flakes-kibbled': '/products/garlic-flakes-kibbled.png',
  'garlic-chopped': '/products/garlic-chopped.png',
  'garlic-minced': '/products/garlic-minced.png',
  'garlic-granules': '/products/garlic-granules.png',
  'garlic-powder': '/products/garlic-powder.png',
  'ginger-flakes-powder': '/products/ginger-flakes-powder.png',
  'potato-flakes-powder': '/products/potato-flakes-powder.png',
  'green-chilli-powder': '/products/green-chilli-powder.png',
  'amchur-powder': '/products/amchur-powder.png',
  'kabuli-chickpeas': '/products/kabuli-chickpeas.png',
  'desi-chana': '/products/desi-chana.png',
  'toor-dal': '/products/toor-dal.png',
  'chana-dal': '/products/chana-dal.png',
  'urad-dal': '/products/urad-dal.png',
  'moong-dal': '/products/moong-dal.png',
  'cumin-powder': '/products/cumin-powder.png',
  'fennel-powder': '/products/fennel-powder.png',
  'coriander-powder': '/products/coriander-powder.png',
  'curry-powder': '/products/curry-powder.png',
  'turmeric-powder': '/products/turmeric-powder.png',
  'chilli-powder': '/products/chilli-powder.png',
  'premium-basmati-rice': '/products/premium-basmati-rice.png',
  'non-basmati-rice': '/products/non-basmati-rice.png',
  'white-rice': '/products/white-rice.png',
  'brown-rice': '/products/brown-rice.png',
  'black-rice': '/products/black-rice.png',
};

export const catalogData: ProductCategory[] = [
  { id: 'whole-spices', slug: 'whole-spices', name: 'Whole Spices', summary: 'Premium sourced whole spices.', desc: 'Premium sourced whole spices, expertly processed and export ready.', description: 'Whole spices processed for aroma, color, purity, and international buyer specifications.', image: '/whole-spices.png', items: ['Turmeric', 'Chilli', 'Ginger', 'Nutmeg', 'Cardamom', 'Cinnamon', 'Black Pepper', 'White Pepper', 'Cumin Seeds', 'Fennel Seeds', 'Ajwain Seeds', 'Coriander Seeds'] },
  { id: 'oil-seeds', slug: 'oil-seeds', name: 'Oil Seeds', summary: 'High-yield seeds for global use.', desc: 'High-yield, carefully sorted oil seeds for global food and industrial applications.', description: 'Carefully sorted oil seeds for food processors, manufacturers, and bulk distribution.', image: '/oil-seeds.png', items: ['Yellow Mustard Seeds', 'Sesame Seeds', 'Groundnut', 'Soybean'] },
  { id: 'spray-dried', slug: 'spray-dried', name: 'Spray Dried Powders', summary: 'Soluble fruit and vegetable powders.', desc: 'Highly soluble, long shelf-life powders retaining natural flavor and color.', description: 'Spray dried powders designed for food-service, beverage, seasoning, and ingredient applications.', image: '/spray-dried.png', items: ['Spray Dried Tomato Powder', 'Spray Dried Tamarind Powder', 'Spray Dried Lemon Powder', 'Spray Dried Beetroot Powder'] },
  { id: 'herbs', slug: 'herbs', name: 'Herbs', summary: 'Culinary and wellness herb powders.', desc: 'Pure, medicinal, and culinary herbal powders sourced from pristine environments.', description: 'Herbal ingredients selected for clean processing, natural character, and dependable quality.', image: '/herbs.png', items: ['Aritha Powder', 'Moringa Powder', 'Amla Powder', 'Aloe Vera Powder', 'Ashwagandha Powder'] },
  { id: 'dehydrated', slug: 'dehydrated', name: 'Dehydrated Products', summary: 'Shelf-stable dehydrated ingredients.', desc: 'Quality dehydrated ingredients processed to preserve essential nutrients and aroma.', description: 'Dehydrated onion, garlic, and vegetable products packed for reliable global supply.', image: '/dehydrated.png', subcategories: [{ name: 'Onion Variants', items: ['Onion Flakes/Kibbled', 'Onion Chopped', 'Onion Minced', 'Onion Granules', 'Onion Powder'] }, { name: 'Garlic Variants', items: ['Garlic Flakes/Kibbled', 'Garlic Chopped', 'Garlic Minced', 'Garlic Granules', 'Garlic Powder'] }, { name: 'Other Dehydrated Items', items: ['Ginger Flakes/Powder', 'Potato Flakes/Powder', 'Green Chilli Powder', 'Amchur Powder'] }] },
  { id: 'grains-pulses', slug: 'grains-pulses', name: 'Grains & Pulses', summary: 'Clean pulses for bulk channels.', desc: 'Nutrient-rich, thoroughly cleaned pulses and grains for bulk international supply.', description: 'Pulses and grains cleaned, sorted, graded, and prepared for dependable shipment cycles.', image: '/grains-pulses.png', items: ['Kabuli Chickpeas', 'Desi Chana', 'Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal'] },
  { id: 'ground-spices', slug: 'ground-spices', name: 'Ground Spices', summary: 'Finely milled spice powders.', desc: 'Finely milled pure spices with authentic, potent flavor profiles.', description: 'Ground spices and custom blends milled for authentic taste, consistency, and export needs.', image: '/ground-spices.png', items: ['Cumin Powder', 'Fennel Powder', 'Coriander Powder', 'Curry Powder', 'Turmeric Powder', 'Chilli Powder'] },
  { id: 'premium-rice', slug: 'premium-rice', name: 'Premium Rice', summary: 'Premium rice for export markets.', desc: 'High-quality, carefully milled rice varieties suitable for diverse culinary applications.', description: 'Premium rice varieties sourced, milled, inspected, and packed for global buyers.', image: '/premium-rice.png', items: ['Premium Basmati Rice', 'Non-Basmati Rice', 'White Rice', 'Brown Rice', 'Black Rice'] }
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
