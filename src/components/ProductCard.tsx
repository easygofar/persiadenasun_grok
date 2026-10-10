import ProductView from "@/components/ProductView";
import type { Product } from "@/utils/types";

export default function ProductCard(props: Product) {
  return <ProductView {...props} />;
}
