export { cn } from "cn";

const priceFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

export const formatPrice = (amount: number) => priceFormatter.format(amount);

export const createCategorySlug = (category: string) =>
  category
    .toLowerCase()
    .replaceAll("&", "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const toTelHref = (phoneNumber: string) =>
  `tel:+63${phoneNumber.replace(/\D/g, "").slice(1)}`;
