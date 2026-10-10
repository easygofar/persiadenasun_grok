import FabricDetail from "@/components/FabricDetail";
import { notFound } from "next/navigation";
import { products } from "@/data";
import { removeParagraphTagsAndLimit, getProductJsonLd } from "@/utils";


export async function generateStaticParams() {
  return products
    .filter((p) => p.brand === "Arshid")
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
    (p) => p.id === productId && p.brand === "Arshid"
  );
  if (!product) return {};

  const title = `${product.name} / ${product.brand} / ${product.model} `;
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
      canonical: `https://persiadenasun.ir/products/arshid/${productId}/`,
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
    (p) => p.id === productId && p.brand === "Arshid"
  );
  if (!product) notFound();


  const jsonLd = getProductJsonLd(productId)


  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FabricDetail {...product} />
    </>
  );
}
