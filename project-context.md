# Project Context

This repository is a static product-catalog website for **BOMX - BOM Rangsit**, a motorcycle aftermarket parts brand.

The website should feel like a professionally designed Shopify storefront in terms of merchandising, hierarchy, and product presentation, while remaining a custom Next.js implementation.

Use **[https://rcb.com](https://rcb.com)** as the primary structural and merchandising reference. Do not copy its branding, theme, layout pixel-for-pixel, or proprietary content. The reference is intended to guide product-first information architecture, collection presentation, navigation simplicity, and brand storytelling.

Avoid the generic appearance commonly associated with AI-generated landing pages.

---

# V1 Scope

The initial version is intentionally static and small.

Do not introduce a database, CMS, authentication system, admin panel, commerce backend, inventory system, cart, checkout, payments, or external product API unless explicitly requested later.

The website must have no more than these three page types:

- `/` — Homepage
- `/products` — Product catalog
- `/products/[slug]` — Product detail

Sections such as About, Collections, and motorcycle discovery should live within the homepage or products experience.


# Typography

Typography is finalized.

Use:

- **Barlow Condensed** for display typography
- **Geist** for body text, UI, navigation, controls, descriptions, and supporting text

Load fonts through `next/font`.

Expose them through CSS variables and semantic utilities rather than hardcoding font-family declarations throughout components.

Suggested roles:

- Barlow Condensed: hero headings, section headings, collection names, product-series names, large promotional text
- Geist: body copy, navigation, buttons, product descriptions, filters, specifications, labels, and general UI

# Homepage Structure

The homepage follows the finalized **Product-First Flagship** direction inspired by RCB, with the motorcycle finder borrowed from the compatibility-first concept.

Expected high-level structure:

1. Header
2. Hero
3. Shop by Category
4. Featured Products
5. Featured Series
6. Find Parts for Your Motorcycle
7. New Releases
8. BOM X / Brand Story
9. Community / Social content
10. Footer

Exact ordering may be refined during implementation, but product discovery should remain the dominant purpose of the homepage.

Do not bury products beneath long brand storytelling.

---

# Navigation

Keep navigation intentionally small.

Current conceptual destinations are:

- Collections
- Find Your Parts
- Products

Not every navigation item requires a dedicated route.

For example:

- Collections → homepage section such as `/#collections`
- Find Your Parts → homepage section such as `/#find-your-parts`
- Products → `/products`

About content should remain within the homepage unless explicitly changed later.

---

# Motorcycle Finder

The motorcycle finder is a homepage feature, not a separate route hierarchy.

Initial concept:

- Select motorcycle make
- Select motorcycle model
- Submit
- Navigate to the products catalog with a query parameter or equivalent static filter state

Example:

`/products?motorcycle=honda-click-160`

The Products page may then filter the static product dataset based on compatibility.

Do not build `/motorcycles/*` routes for V1.

Keep the implementation simple and static.

---

# Products Page

The Products page should resemble a mature commerce catalog rather than a landing page.

Expected capabilities may include:

- Product grid
- Category filtering
- Motorcycle compatibility filtering
- Search
- Sorting
- Product count

The exact feature set may be introduced incrementally.

Do not create a complex state-management architecture for basic static filtering.

---

# Product Detail Page

Each `/products/[slug]` page should support the static product data available.

Expected sections may include:

- Product gallery
- Product name and information
- Specifications
- Compatible motorcycles
- Related products

The component must gracefully support products with different image counts.

Do not assume every product has an identical number of images.

---

# Initial Catalog Size

V1 should target approximately:

- **12–16 representative products**
- **30–40 curated website images**

The purpose of V1 is to prove the interface, product presentation, information architecture, brand direction, and catalog experience.

Do not attempt to populate the full BOM Rangsit catalog immediately.

---

# Static Product Data

For V1, product data should remain local and static.

Use:

`src/data/products.ts`

Do not create separate data files for every minor domain unless complexity actually requires it.

A product should be capable of representing information such as:

- id
- slug
- name
- category
- series
- description
- images
- compatible motorcycles
- featured state
- new-release state
- specifications where available

Keep the schema practical. Do not over-model fields that are not yet needed.

Prefer deriving categories or compatibility options from the product dataset where reasonable.

---

# Asset Strategy

Production-ready website assets should live inside:

`public/images/`

Recommended organization:

```text
public/images/
├── brand/
├── categories/
├── motorcycles/
└── products/
```

Use logical product or product-series folders where useful.

Example:

```text
public/images/products/saber/
public/images/products/lynx/
public/images/products/vela/
```

Render catalog imagery using `next/image`.

---

# Performance

The website should feel fast.

Prefer:

- Server Components
- Static rendering where possible
- Optimized local imagery
- `next/image`
- Minimal client JavaScript
- Restrained Motion usage
- No unnecessary dependencies

Do not introduce heavy animation or client-state infrastructure for decorative purposes.

