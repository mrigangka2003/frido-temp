# 👟 frido — Comfort for Everyone

Welcome to **frido**! This is a modern, premium e-commerce experience built with React, Vite, and Shopify. It features a unique "Mode Toggle" that flips the entire store's personality between **Couple mode** (Valentine/Romantic) and **Single mode** (Self-care/Pamper). as part of the assignment

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Create a `.env` file with your Shopify Storefront credentials:
   ```env
   VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
   VITE_SHOPIFY_TOKEN=your-access-token
   ```

3. **Launch Dev Server:**
   ```bash
   npm run dev
   ```

---

## 👋 Where I can take this next? 


### 1. **Make the "Add to Cart" actually work**
Right now, the button just says "Added!" 🥳. To make it a real shop, you'll want to:
- Integrate a **Cart Drawer** or slide-out menu.
- Use Shopify's `checkoutCreate` or `cartCreate` mutations to handle real purchases.

### 2. **Contextual Personalization**
Since you have a mode toggle, double down on it! 
- **Different Copy:** Change the "About Us" or "Hero Text" more drastically to match the vibe of the mode.
- **Specific Coupons:** Throw a "LOVE20" popup in Couple mode and a "SELFCARE15" one in Single mode.

### 3. **Juicier Animations**
The current transitions are smooth, but you can make them feel *expensive*:
- Add **Framer Motion** for layout transitions when the mode flips.
- Implement "Staggered Reveals" for the product cards so they pop in one by one.

### 4. **Micro-Interactions**
- **Image Hover Effects:** Zoom into the product or show a "Secondary Image" (like a lifestyle shot) when someone hovers over a card.
- **Wobble/Float Icons:** Make the category emoji/icons subtlely float to give the site a "lived-in" feel.

### 5. **Real-World Social Proof**
Integrate a reviews app or just mock up a "What people are saying" section at the bottom. In Couple mode, show reviews from partners; in Single mode, show reviews about personal comfort.

### 6. **Dynamic Collections**
Instead of just fetching the first 4 products, you could fetch specific Shopify **Collections** (e.g., a "Valentine's Collection" and a "Self-Care Collection") to make the toggle even more powerful.

**The goal is to move from a "Project" to a "Product". Which one of these sounds most exciting to you?** 🚀
