import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";
import { products } from "@/data";
import { removeParagraphTagsAndLimit, getProductJsonLd } from "@/utils";


export async function generateStaticParams() {
  return products
    .filter((p) => p.brand === "Orox")
    .map((p) => {
      return { productId: p.id };
    });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products.find(
    (p) => p.id === productId && p.brand === "Orox"
  );
  if (!product) return {};

  const title = `${product.name} / ${product.brand} / ${product.model}`;
  const description = removeParagraphTagsAndLimit(product.description[0], 80);
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [`/images/original-jpg/${product.images}`],
    },
    alternates: {
      canonical: `https://persiadenasun.ir/products/orox/${productId}/`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products.find(
    (p) => p.id === productId && p.brand === "Orox"
  );
  if (!product) notFound();
  // const relatedProducts = getRelatedProducts(product, products);


  const jsonLd = getProductJsonLd(productId)

  return (
    <>
      <ProductCard {...product} />


      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
