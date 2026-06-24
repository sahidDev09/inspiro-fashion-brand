export interface Product {
  id: number;
  name: string;
  color: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  categories: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'ESSENTIAL T-SHIRT',
    color: 'WHITE',
    price: '৳1,490',
    originalPrice: '৳1,990',
    discount: '25%',
    image: '/assets/tshirt1.jpg',
    categories: ['man', 'tshirt', 'premium-solid', 'summer'],
  },
  {
    id: 2,
    name: 'OVERSIZED TEE',
    color: 'WASHED BLACK',
    price: '৳1,890',
    originalPrice: '৳2,290',
    discount: '18%',
    image: '/assets/tshirt2.jpg',
    categories: ['unisex', 'tshirt', 'dropshoulder-tshirt', 'summer'],
  },
  {
    id: 3,
    name: 'GRAPHIC PRINT',
    color: 'VINTAGE GREY',
    price: '৳2,190',
    originalPrice: '৳2,690',
    discount: '18%',
    image: '/assets/tshirt3.jpg',
    categories: ['man', 'tshirt', 'inspiro-edition', 'summer'],
  },
  {
    id: 4,
    name: 'CLASSIC CREWNECK',
    color: 'NAVY BLUE',
    price: '৳1,490',
    originalPrice: '৳1,990',
    discount: '25%',
    image: '/assets/tshirt4.jpg',
    categories: ['man', 'tshirt', 'premium-solid', 'winter'],
  },
  {
    id: 5,
    name: 'HEAVYWEIGHT TEE',
    color: 'FOREST GREEN',
    price: '৳2,490',
    originalPrice: '৳2,990',
    discount: '16%',
    image: '/assets/tshirt5.jpg',
    categories: ['man', 'tshirt', 'sports-tshirt', 'summer', 'eid-collection'],
  },
  {
    id: 6,
    name: 'KNITTED POLO CLASSIC',
    color: 'OLIVE GREEN',
    price: '৳2,290',
    originalPrice: '৳2,790',
    discount: '18%',
    image: '/assets/tshirt1.jpg',
    categories: ['man', 'polo-shirt', 'knitted-polo', 'summer'],
  },
  {
    id: 7,
    name: 'OLD MONEY POLO',
    color: 'CREAM WHITE',
    price: '৳2,690',
    originalPrice: '৳3,190',
    discount: '16%',
    image: '/assets/tshirt3.jpg',
    categories: ['man', 'polo-shirt', 'old-money-polo', 'summer', 'eid-collection'],
  },
  {
    id: 8,
    name: 'WINTER LAYER TEE',
    color: 'CHARCOAL',
    price: '৳1,990',
    originalPrice: '৳2,490',
    discount: '20%',
    image: '/assets/tshirt4.jpg',
    categories: ['unisex', 'tshirt', 'premium-solid', 'winter'],
  },
];

export interface CategoryInfo {
  slug: string;
  title: string;
  description: string;
  banner: string;
}

export const categories: Record<string, CategoryInfo> = {
  man: {
    slug: 'man',
    title: 'Man',
    description: 'Premium menswear crafted for the modern gentleman. Explore our curated collection of essential pieces.',
    banner: '/assets/heroModels.png',
  },
  unisex: {
    slug: 'unisex',
    title: 'Unisex',
    description: 'Gender-fluid fashion designed to fit everyone. Comfortable, stylish, and effortlessly cool.',
    banner: '/assets/heroModels.png',
  },
  'polo-shirt': {
    slug: 'polo-shirt',
    title: 'Polo Shirt',
    description: 'Timeless polo shirts with a modern twist. From knitted to old money styles — find your perfect polo.',
    banner: '/assets/heroModels.png',
  },
  'knitted-polo': {
    slug: 'knitted-polo',
    title: 'Knitted Polo',
    description: 'Luxurious knitted polo shirts that elevate your everyday look with premium texture and comfort.',
    banner: '/assets/heroModels.png',
  },
  'old-money-polo': {
    slug: 'old-money-polo',
    title: 'Old Money Polo',
    description: 'Classic, understated elegance. Our Old Money polo collection exudes quiet luxury and timeless sophistication.',
    banner: '/assets/heroModels.png',
  },
  tshirt: {
    slug: 'tshirt',
    title: 'T-Shirt',
    description: 'From dropshoulder to sports tees — discover our complete range of premium t-shirts.',
    banner: '/assets/heroModels.png',
  },
  'dropshoulder-tshirt': {
    slug: 'dropshoulder-tshirt',
    title: 'Dropshoulder T-Shirt',
    description: 'Relaxed dropshoulder silhouettes for the ultimate streetwear vibe.',
    banner: '/assets/heroModels.png',
  },
  'inspiro-edition': {
    slug: 'inspiro-edition',
    title: 'Inspiro Edition',
    description: 'Limited edition pieces designed exclusively by Inspiro. Bold, unique, and unapologetically original.',
    banner: '/assets/heroModels.png',
  },
  'sports-tshirt': {
    slug: 'sports-tshirt',
    title: 'Sports T-Shirt',
    description: 'Performance meets style. Breathable, lightweight sports tees for active lifestyles.',
    banner: '/assets/heroModels.png',
  },
  'premium-solid': {
    slug: 'premium-solid',
    title: 'Premium Solid',
    description: 'Clean, minimal, premium. Our solid tees are the foundation of any great wardrobe.',
    banner: '/assets/heroModels.png',
  },
  summer: {
    slug: 'summer',
    title: 'Summer',
    description: 'Beat the heat in style. Lightweight fabrics and fresh designs for the sunny season.',
    banner: '/assets/heroModels.png',
  },
  winter: {
    slug: 'winter',
    title: 'Winter',
    description: 'Stay warm without compromising on style. Cozy layers and heavyweight essentials.',
    banner: '/assets/heroModels.png',
  },
  'eid-collection': {
    slug: 'eid-collection',
    title: 'Eid Collection',
    description: 'Celebrate in style with our exclusive Eid collection. Premium pieces for special occasions.',
    banner: '/assets/heroModels.png',
  },
};

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categories.includes(slug));
}

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return categories[slug];
}
