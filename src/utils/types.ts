export interface ProductDetail {
  name: string;
  value: string;
}

export interface Thumbs {
  src: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  title: string;
  category?: string;
  description: string[];
  brand: string;
  brandFarsi: string;
  model: string;
  thumbnails?: Thumbs[];
  images: string[];
  detail: ProductDetail[];
}

export interface ProductEn {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string[];
  brand: string;
  brandFarsi: string;
  model: string;
  images: string[];
  detail: ProductDetail[];
}

export interface ProductAr {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string[];
  brand: string;
  brandFarsi: string;
  model: string;
  images: string[];
  detail: ProductDetail[];
}

export interface VideoItem {
  brandFarsi: string;
  brand: string;
  category: string;
  title: string;
  srcId: string;
  description: string;
}
