
const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN;

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