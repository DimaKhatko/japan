/**
 * Landing-wide config — single source of truth for scarcity messaging.
 * Set SPOTS_LEFT to 0 to switch both the hero badge and the pricing line
 * to their closed ("набір закрито") state.
 */
export const SPOTS_LEFT: number = 4;

/**
 * Ukrainian plural for "місце": 1 місце / 2–4 місця / 5+ місць.
 */
export function spotsNoun(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "місце";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "місця";
  return "місць";
}
