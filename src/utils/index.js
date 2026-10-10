import { products } from "@/data";
import { products as productsEn } from "@/data/indexEn";
import { products as productsAr } from "@/data/indexAr";

export function removeHtmlTagsAndAttributes(input) {
  return input.replace(/<[^>]*>/g, '');
}

export function getRelatedProducts(currentProduct, allProducts) {
  // Normalize the current name
  const currentName = currentProduct.name.toLowerCase();

  // Filter products based on name similarity but exclude the current product itself
  const related = allProducts.filter((product) => {
    const name = product.name.toLowerCase();
    return (
      product.id !== currentProduct.id &&
      name.includes(
        currentName
          .split(" ")
          .filter((word) => word != "دستگاه")
          .filter((word) => word != "ماشین")
          .filter((word) => word != "سیستم")
          .filter((word) => word != "چرخ")
          .filter((word) => word != "خیاطی")[0]
      )
    );
  });
  return related;
}

export function getStoredArray(key) {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export function updateStoredArray(key, id) {
  if (typeof window === "undefined") return false;
  let current = getStoredArray(key);
  if (current.includes(id)) {
    current = current.filter((item) => item !== id);
  } else {
    current.push(id);
  }
  localStorage.setItem(key, JSON.stringify(current));
  return current.includes(id);
}

export function isInStoredArray(key, id) {
  if (typeof window === "undefined") return false;
  return getStoredArray(key).includes(id);
}

function removeParagraphTags(text) {
  // Remove <p> and </p> tags
  const cleanedText = text.replace(/<\/?p>/g, " ");
  return cleanedText
}

export function removeParagraphTagsAndLimit(text, limit) {
  // Remove <p> and </p> tags
  const cleanedText = text.replace(/<\/?p>/g, " ");

  const trimmedText = cleanedText.replace(/\s+/g, " ").trim();

  // Limit to 80 characters if needed
  const limitedText =
    trimmedText.length > limit ? trimmedText.slice(0, limit) : trimmedText;

  return limitedText;
}

export function changeImageExtension(imageFilename, newExtension) {

  let returnValue;

  if (typeof imageFilename == "string") {
    // Remove any leading dot from the new extension
    const cleanExt = newExtension.replace(/^\./, "");

    // Replace extension using regex
    returnValue = imageFilename.replace(/\.[^.]+$/, `.${cleanExt}`);

  } else {

    returnValue = [];
    for (let i = 0; i < imageFilename.length; i++) {
      returnValue.push(imageFilename[i].replace(/^\./, ""))
    }
  }
  return returnValue

}

export function createCategoryJsonLD(brand) {
  // create json-ld object

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Brand",
    "productList": products.filter(p => p.brand === brand).map(p => {
      return {
        "@type": "Product",
        "id": p.id,
        "name": p.name,
        "title": p.title,
        "description": removeParagraphTags(p.description[0]),
        "brand": {
          "@type": "Brand",
          "name": p.brand,
          "nameInLocalLanguage": p.brandFarsi
        },
        "model": p.model,
        "image": p.images,
        "additionalType": "https://schema.org/Equipment",
        "productDetails": p.detail.map(d => {
          return {
            "name": d.name,
            "value": d.value
          };
        }),
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IRR",
          "price": "0",
          "seller": {
            "@type": "Organization",
            "name": "پرشیا دنا سان"
          },
        },
      };
    })
  }
  return jsonLd
}

export function createCategoryJsonLDEn(brand) {
  // create json-ld object

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Brand",
    "productList": productsEn.filter(p => p.brand === brand).map(p => {
      return {
        "@type": "Product",
        "id": p.id,
        "name": p.name,
        "title": p.title,
        "description": removeParagraphTags(p.description[0]),
        "brand": {
          "@type": "Brand",
          "name": p.brand,
          "nameInLocalLanguage": p.brand
        },
        "model": p.model,
        "image": p.images,
        "additionalType": "https://schema.org/Equipment",
        "productDetails": p.detail.map(d => {
          return {
            "name": d.name,
            "value": d.value
          };
        }),
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IRR",
          "price": "0",
          "seller": {
            "@type": "Organization",
            "name": "Persia Dena Sun Plc."
          },
        },
      };
    })
  }
  return jsonLd
}


export function createCategoryJsonLDAr(brand) {
  // create json-ld object

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Brand",
    "productList": productsAr.filter(p => p.brand === brand).map(p => {
      return {
        "@type": "Product",
        "id": p.id,
        "name": p.name,
        "title": p.title,
        "description": removeParagraphTags(p.description[0]),
        "brand": {
          "@type": "Brand",
          "name": p.brand,
          "nameInLocalLanguage": p.brand
        },
        "model": p.model,
        "image": p.images,
        "additionalType": "https://schema.org/Equipment",
        "productDetails": p.detail.map(d => {
          return {
            "name": d.name,
            "value": d.value
          };
        }),
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IRR",
          "price": "0",
          "seller": {
            "@type": "Organization",
            "name": "Persia Dena Sun Plc."
          },
        },
      };
    })
  }
  return jsonLd
}


export function getProductJsonLd(ProductId) {
  const product = products.find((item) => item.id === ProductId);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ` ${product.name} ${product.title} ${product.brandFarsi}`,
    description: removeHtmlTagsAndAttributes(product.description[0]).slice(0, 150),
    image: `https://persiadenasun.com/images/500px/tn_500px_${product.images}`,
    brand: {
      "@type": "Brand",
      name: `${product.brandFarsi}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: "0",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      url: `https://iransiruba.com/products/${product?.brand.toLowerCase()}/${product.id}/`,
      seller: {
        "@type": "Organization",
        "name": "پرشیا دنا سان"
      },
    },
    "sku": product.title,
    "additionalProperty": product.detail.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.name,
      value: removeHtmlTagsAndAttributes(spec.value),
    })),
  };
}


export function getProductJsonLdEn(ProductId) {
  const product = productsEn.find((item) => item.id === ProductId);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ` ${product.name} ${product.title} ${product.brand}`,
    description: removeHtmlTagsAndAttributes(product.description[0]).slice(0, 150),
    image: `https://persiadenasun.com/images/500px/tn_500px_${product.images}`,
    brand: {
      "@type": "Brand",
      name: `${product.brandFarsi}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: "0",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      url: `https://iransiruba.com/en/products/${product?.brand.toLowerCase()}/${product.id}/`,
      seller: {
        "@type": "Organization",
        "name": "پرشیا دنا سان"
      },
    },
    "sku": product.title,
    "additionalProperty": product.detail.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.name,
      value: removeHtmlTagsAndAttributes(spec.value),
    })),
  };
}

export function getProductJsonLdAr(ProductId) {
  const product = productsAr.find((item) => item.id === ProductId);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ` ${product.name} ${product.title} ${product.brand}`,
    description: removeHtmlTagsAndAttributes(product.description[0]).slice(0, 150),
    image: `https://persiadenasun.com/images/500px/tn_500px_${product.images}`,
    brand: {
      "@type": "Brand",
      name: `${product.brandFarsi}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: "0",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      url: `https://iransiruba.com/en/products/${product?.brand.toLowerCase()}/${product.id}/`,
      seller: {
        "@type": "Organization",
        "name": "پرشیا دنا سان"
      },
    },
    "sku": product.title,
    "additionalProperty": product.detail.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.name,
      value: removeHtmlTagsAndAttributes(spec.value),
    })),
  };
}