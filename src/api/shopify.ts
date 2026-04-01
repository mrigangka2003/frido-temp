const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN;
import type { Mode, Product } from "./products";

const PRODUCT_COLORS = ["#6C63FF", "#8B5CF6", "#7C3AED", "#5B21B6", "#4C1D95", "#3B0764", "#2E1065", "#172554"];

interface ShopifyProductEdge {
  node: {
    id: string;
    title: string;
    description: string;
    variants: {
      edges: Array<{
        node: {
          price: { amount: string };
          compareAtPrice: { amount: string } | null;
        };
      }>;
    };
    images: {
      edges: Array<{
        node: { url: string };
      }>;
    };
  };
}

export const fetchShopifyProducts = async (mode: Mode): Promise<Product[]> => {
  const query = `
    {
      products(first: 4) {
        edges {
          node {
            id
            title
            description
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                  }
                  compareAtPrice {
                    amount
                  }
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(`https://${DOMAIN}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    const body = await res.json();
    const edges: ShopifyProductEdge[] = body?.data?.products?.edges || [];

    // Couple/Valentine mode → first 2 products; Single mode → last 2 products
    const productsToUse = mode === "couple"
      ? edges.slice(0, 2)
      : edges.slice(2, 4);

    return productsToUse.map((edge: ShopifyProductEdge, i: number): Product => {
      const node = edge.node;
      const variant = node.variants.edges[0]?.node;
      const salePrice = variant?.price?.amount ? parseFloat(variant.price.amount) : 0;
      const mrp = variant?.compareAtPrice?.amount ? parseFloat(variant.compareAtPrice.amount) : salePrice;
      const discountPercent = mrp > salePrice ? Math.round(((mrp - salePrice) / mrp) * 100) : 0;
      const imageUrl = node.images.edges[0]?.node?.url;

      return {
        id: node.id,
        name: node.title,
        tagline: node.description ? (node.description.length > 40 ? node.description.substring(0, 40) + "..." : node.description) : "Relief From Pain",
        mrp: mrp || salePrice,
        salePrice: salePrice,
        discountPercent: discountPercent,
        badge: mode === "couple" ? "Valentine's" : "Pamper",
        rating: 4.7 + (i * 0.1),
        reviews: 786 + (i * 12),
        imageColor: PRODUCT_COLORS[i % PRODUCT_COLORS.length],
        imageUrl: imageUrl,
      };
    });
  } catch (error) {
    console.error("Error fetching Shopify products:", error);
    return [];
  }
};

export const testShopifyConnection = async () => {
  const res = await fetch(
    `https://${DOMAIN}/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
      body: JSON.stringify({
        query: `
        {
          products(first: 2) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
        `,
      }),
    }
  );

  const data = await res.json();
  console.log("Shopify Response:", data);

  return data;
};