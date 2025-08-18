// Perfume purchase links configuration
// This file makes it easy to update purchase links for each perfume

export interface PerfumeLink {
  perfumeId: string;
  buyUrl: string;
}

// Default placeholder link for perfumes without specific URLs
export const DEFAULT_BUY_URL = "https://example.com/shop";

// Perfume-specific purchase links
export const perfumeLinks: PerfumeLink[] = [
  // Unisex/Designer Inspired Perfumes
  {
    perfumeId: "baccarat-rouge-540",
    buyUrl: "https://example.com/shop/baccarat-rouge-540",
  },
  {
    perfumeId: "black-afgano",
    buyUrl: "https://example.com/shop/black-afgano",
  },
  {
    perfumeId: "ombre-nomade",
    buyUrl: "https://example.com/shop/ombre-nomade",
  },
  { perfumeId: "interlude", buyUrl: "https://example.com/shop/interlude" },
  { perfumeId: "oud-ispahan", buyUrl: "https://example.com/shop/oud-ispahan" },
  { perfumeId: "oud-wood", buyUrl: "https://example.com/shop/oud-wood" },
  {
    perfumeId: "rose-vanille",
    buyUrl: "https://example.com/shop/rose-vanille",
  },
  { perfumeId: "red-tobacco", buyUrl: "https://example.com/shop/red-tobacco" },
  {
    perfumeId: "imagination-lv",
    buyUrl: "https://example.com/shop/imagination-lv",
  },
  { perfumeId: "accento", buyUrl: "https://example.com/shop/accento" },
  {
    perfumeId: "imperial-valley",
    buyUrl: "https://example.com/shop/imperial-valley",
  },
  {
    perfumeId: "alf-lele-w-lele",
    buyUrl: "https://example.com/shop/alf-lele-w-lele",
  },
  { perfumeId: "al-fares", buyUrl: "https://example.com/shop/al-fares" },
  { perfumeId: "i-am-white", buyUrl: "https://example.com/shop/i-am-white" },
  { perfumeId: "ana-walshok", buyUrl: "https://example.com/shop/ana-walshok" },
  { perfumeId: "sweet-oud", buyUrl: "https://example.com/shop/sweet-oud" },
  {
    perfumeId: "shams-al-emarat",
    buyUrl: "https://example.com/shop/shams-al-emarat",
  },
  { perfumeId: "shay-oud", buyUrl: "https://example.com/shop/shay-oud" },
  {
    perfumeId: "amber-rasasi",
    buyUrl: "https://example.com/shop/amber-rasasi",
  },
  {
    perfumeId: "white-oud-sea",
    buyUrl: "https://example.com/shop/white-oud-sea",
  },
  {
    perfumeId: "dahen-al-oud",
    buyUrl: "https://example.com/shop/dahen-al-oud",
  },
  { perfumeId: "gucci-oud", buyUrl: "https://example.com/shop/gucci-oud" },
  {
    perfumeId: "royal-oud-chopard",
    buyUrl: "https://example.com/shop/royal-oud-chopard",
  },
  { perfumeId: "kalemat", buyUrl: "https://example.com/shop/kalemat" },
  { perfumeId: "zanbak", buyUrl: "https://example.com/shop/zanbak" },
  {
    perfumeId: "sultan-al-outor",
    buyUrl: "https://example.com/shop/sultan-al-outor",
  },
  {
    perfumeId: "white-musk-arabian",
    buyUrl: "https://example.com/shop/white-musk-arabian",
  },
  { perfumeId: "black-musk", buyUrl: "https://example.com/shop/black-musk" },
  {
    perfumeId: "musk-al-harameen",
    buyUrl: "https://example.com/shop/musk-al-harameen",
  },
  {
    perfumeId: "musk-pomegranate",
    buyUrl: "https://example.com/shop/musk-pomegranate",
  },
  {
    perfumeId: "musk-al-tahara",
    buyUrl: "https://example.com/shop/musk-al-tahara",
  },
  {
    perfumeId: "strawberry-musk",
    buyUrl: "https://example.com/shop/strawberry-musk",
  },
  { perfumeId: "madawe-gold", buyUrl: "https://example.com/shop/madawe-gold" },
  {
    perfumeId: "molecule-020",
    buyUrl: "https://example.com/shop/molecule-020",
  },
  {
    perfumeId: "meydan-dubai",
    buyUrl: "https://example.com/shop/meydan-dubai",
  },
  { perfumeId: "la-luna", buyUrl: "https://example.com/shop/la-luna" },
  {
    perfumeId: "magic-al-jazeera",
    buyUrl: "https://example.com/shop/magic-al-jazeera",
  },
  { perfumeId: "wared-jore", buyUrl: "https://example.com/shop/wared-jore" },
  { perfumeId: "wisal", buyUrl: "https://example.com/shop/wisal" },
  { perfumeId: "yasmin", buyUrl: "https://example.com/shop/yasmin" },
  { perfumeId: "khamrah", buyUrl: "https://example.com/shop/khamrah" },
  { perfumeId: "oud-bouquet", buyUrl: "https://example.com/shop/oud-bouquet" },
  {
    perfumeId: "silver-ghubar",
    buyUrl: "https://example.com/shop/silver-ghubar",
  },
  {
    perfumeId: "wared-al-fel",
    buyUrl: "https://example.com/shop/wared-al-fel",
  },

  // Men's Perfumes
  { perfumeId: "eternity-ck", buyUrl: "https://example.com/shop/eternity-ck" },
  {
    perfumeId: "chrome-extreme",
    buyUrl: "https://example.com/shop/chrome-extreme",
  },
  {
    perfumeId: "aventus-absolu",
    buyUrl: "https://example.com/shop/aventus-absolu",
  },
  {
    perfumeId: "acqua-di-gio",
    buyUrl: "https://example.com/shop/acqua-di-gio",
  },
  { perfumeId: "ultra-male", buyUrl: "https://example.com/shop/ultra-male" },
  { perfumeId: "invictus", buyUrl: "https://example.com/shop/invictus" },
  {
    perfumeId: "invictus-victory-elixir",
    buyUrl: "https://example.com/shop/invictus-victory-elixir",
  },
  {
    perfumeId: "eros-versace",
    buyUrl: "https://example.com/shop/eros-versace",
  },
  { perfumeId: "black-xs", buyUrl: "https://example.com/shop/black-xs" },
  {
    perfumeId: "black-xs-lexces",
    buyUrl: "https://example.com/shop/black-xs-lexces",
  },
  {
    perfumeId: "bleu-de-chanel",
    buyUrl: "https://example.com/shop/bleu-de-chanel",
  },
  { perfumeId: "pi-givenchy", buyUrl: "https://example.com/shop/pi-givenchy" },
  { perfumeId: "pegasus", buyUrl: "https://example.com/shop/pegasus" },
  {
    perfumeId: "dunhill-desire",
    buyUrl: "https://example.com/shop/dunhill-desire",
  },
  { perfumeId: "desire-blue", buyUrl: "https://example.com/shop/desire-blue" },
  {
    perfumeId: "dior-homme-intense",
    buyUrl: "https://example.com/shop/dior-homme-intense",
  },
  {
    perfumeId: "the-scent-elixir",
    buyUrl: "https://example.com/shop/the-scent-elixir",
  },
  {
    perfumeId: "the-most-wanted",
    buyUrl: "https://example.com/shop/the-most-wanted",
  },
  { perfumeId: "the-one-dg", buyUrl: "https://example.com/shop/the-one-dg" },
  {
    perfumeId: "this-is-him-undressed",
    buyUrl: "https://example.com/shop/this-is-him-undressed",
  },
  {
    perfumeId: "stronger-with-you",
    buyUrl: "https://example.com/shop/stronger-with-you",
  },
  {
    perfumeId: "stronger-with-you-tobacco",
    buyUrl: "https://example.com/shop/stronger-with-you-tobacco",
  },
  { perfumeId: "sculpture", buyUrl: "https://example.com/shop/sculpture" },
  {
    perfumeId: "silver-scent",
    buyUrl: "https://example.com/shop/silver-scent",
  },
  { perfumeId: "sauvage", buyUrl: "https://example.com/shop/sauvage" },
  {
    perfumeId: "sauvage-elixir",
    buyUrl: "https://example.com/shop/sauvage-elixir",
  },
  {
    perfumeId: "creed-silver-mountain",
    buyUrl: "https://example.com/shop/creed-silver-mountain",
  },
  {
    perfumeId: "gucci-guilty-absolute",
    buyUrl: "https://example.com/shop/gucci-guilty-absolute",
  },
  { perfumeId: "fahrenheit", buyUrl: "https://example.com/shop/fahrenheit" },
  { perfumeId: "aventus", buyUrl: "https://example.com/shop/aventus" },
  { perfumeId: "cool-water", buyUrl: "https://example.com/shop/cool-water" },
  {
    perfumeId: "lacoste-white",
    buyUrl: "https://example.com/shop/lacoste-white",
  },
  { perfumeId: "le-male", buyUrl: "https://example.com/shop/le-male" },
  { perfumeId: "mr-thompson", buyUrl: "https://example.com/shop/mr-thompson" },
  {
    perfumeId: "legend-montblanc",
    buyUrl: "https://example.com/shop/legend-montblanc",
  },
  { perfumeId: "horizon", buyUrl: "https://example.com/shop/horizon" },
  { perfumeId: "hugo-boss", buyUrl: "https://example.com/shop/hugo-boss" },
  { perfumeId: "one-million", buyUrl: "https://example.com/shop/one-million" },
  {
    perfumeId: "one-million-extra",
    buyUrl: "https://example.com/shop/one-million-extra",
  },
  {
    perfumeId: "one-million-gold-oud",
    buyUrl: "https://example.com/shop/one-million-gold-oud",
  },
  {
    perfumeId: "one-million-lucky",
    buyUrl: "https://example.com/shop/one-million-lucky",
  },
  {
    perfumeId: "voyage-nautica",
    buyUrl: "https://example.com/shop/voyage-nautica",
  },

  // Women's Perfumes
  {
    perfumeId: "armani-code-women",
    buyUrl: "https://example.com/shop/armani-code-women",
  },
  { perfumeId: "taj-sunset", buyUrl: "https://example.com/shop/taj-sunset" },
  {
    perfumeId: "sexy-graffiti",
    buyUrl: "https://example.com/shop/sexy-graffiti",
  },
  {
    perfumeId: "moon-sparkle",
    buyUrl: "https://example.com/shop/moon-sparkle",
  },
  { perfumeId: "oriana", buyUrl: "https://example.com/shop/oriana" },
  { perfumeId: "euphoria-ck", buyUrl: "https://example.com/shop/euphoria-ck" },
  { perfumeId: "elie-saab", buyUrl: "https://example.com/shop/elie-saab" },
  {
    perfumeId: "alien-oud-majestueux",
    buyUrl: "https://example.com/shop/alien-oud-majestueux",
  },
  {
    perfumeId: "paris-hilton",
    buyUrl: "https://example.com/shop/paris-hilton",
  },
  {
    perfumeId: "bright-crystal",
    buyUrl: "https://example.com/shop/bright-crystal",
  },
  {
    perfumeId: "burberry-women",
    buyUrl: "https://example.com/shop/burberry-women",
  },
  { perfumeId: "black-opium", buyUrl: "https://example.com/shop/black-opium" },
  {
    perfumeId: "black-orchid",
    buyUrl: "https://example.com/shop/black-orchid",
  },
  {
    perfumeId: "black-opium-over-red",
    buyUrl: "https://example.com/shop/black-opium-over-red",
  },
  { perfumeId: "bombshell", buyUrl: "https://example.com/shop/bombshell" },
  {
    perfumeId: "baby-johnson",
    buyUrl: "https://example.com/shop/baby-johnson",
  },
  { perfumeId: "jadore", buyUrl: "https://example.com/shop/jadore" },
  { perfumeId: "delina", buyUrl: "https://example.com/shop/delina" },
  {
    perfumeId: "ralph-lauren-women",
    buyUrl: "https://example.com/shop/ralph-lauren-women",
  },
  {
    perfumeId: "rose-des-vents",
    buyUrl: "https://example.com/shop/rose-des-vents",
  },
  {
    perfumeId: "romance-intense",
    buyUrl: "https://example.com/shop/romance-intense",
  },
  { perfumeId: "212-sexy", buyUrl: "https://example.com/shop/212-sexy" },
  { perfumeId: "si-armani", buyUrl: "https://example.com/shop/si-armani" },
  { perfumeId: "chanel-no5", buyUrl: "https://example.com/shop/chanel-no5" },
  {
    perfumeId: "chanel-chance",
    buyUrl: "https://example.com/shop/chanel-chance",
  },
  { perfumeId: "gucci-bloom", buyUrl: "https://example.com/shop/gucci-bloom" },
  { perfumeId: "gucci-rush", buyUrl: "https://example.com/shop/gucci-rush" },
  {
    perfumeId: "victorias-secret",
    buyUrl: "https://example.com/shop/victorias-secret",
  },
  {
    perfumeId: "flora-gorgeous-jasmine",
    buyUrl: "https://example.com/shop/flora-gorgeous-jasmine",
  },
  { perfumeId: "flora-gucci", buyUrl: "https://example.com/shop/flora-gucci" },
  { perfumeId: "fantasy", buyUrl: "https://example.com/shop/fantasy" },
  {
    perfumeId: "vip-carolina",
    buyUrl: "https://example.com/shop/vip-carolina",
  },
  {
    perfumeId: "coco-mademoiselle",
    buyUrl: "https://example.com/shop/coco-mademoiselle",
  },
  {
    perfumeId: "queen-of-silk",
    buyUrl: "https://example.com/shop/queen-of-silk",
  },
  {
    perfumeId: "la-vie-est-belle",
    buyUrl: "https://example.com/shop/la-vie-est-belle",
  },
  {
    perfumeId: "love-is-heavenly",
    buyUrl: "https://example.com/shop/love-is-heavenly",
  },
  { perfumeId: "libre", buyUrl: "https://example.com/shop/libre" },
  { perfumeId: "my-way", buyUrl: "https://example.com/shop/my-way" },
  {
    perfumeId: "midnight-fantasy",
    buyUrl: "https://example.com/shop/midnight-fantasy",
  },
  {
    perfumeId: "narciso-rodriguez-black",
    buyUrl: "https://example.com/shop/narciso-rodriguez-black",
  },
  {
    perfumeId: "narciso-rodriguez-pink",
    buyUrl: "https://example.com/shop/narciso-rodriguez-pink",
  },
  {
    perfumeId: "scandal-absolu",
    buyUrl: "https://example.com/shop/scandal-absolu",
  },
  { perfumeId: "212-herrera", buyUrl: "https://example.com/shop/212-herrera" },
];

/**
 * Get the purchase URL for a specific perfume
 * @param perfumeId - The ID of the perfume
 * @returns The purchase URL for the perfume, or default URL if not found
 */
export function getPerfumeBuyUrl(perfumeId: string): string {
  const link = perfumeLinks.find((link) => link.perfumeId === perfumeId);
  return link ? link.buyUrl : DEFAULT_BUY_URL;
}

/**
 * Set or update a perfume's purchase URL
 * @param perfumeId - The ID of the perfume
 * @param buyUrl - The purchase URL
 */
export function setPerfumeBuyUrl(perfumeId: string, buyUrl: string): void {
  const existingLinkIndex = perfumeLinks.findIndex(
    (link) => link.perfumeId === perfumeId,
  );

  if (existingLinkIndex >= 0) {
    perfumeLinks[existingLinkIndex].buyUrl = buyUrl;
  } else {
    perfumeLinks.push({ perfumeId, buyUrl });
  }
}
