/**
 * High-performance hardware-accelerated smooth scrolling utility.
 * Uses native browser compositor scrolling for 120Hz zero-jank fluidity.
 * Handles fixed header offset, edge cases, and accessibility preferences.
 */

export const scrollToElement = (id: string, offset: number = 64): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();

  // Accessibility check for users with motion sensitivities
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  if (id === "home" || id === "" || id === "#") {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    return Promise.resolve();
  }

  const cleanId = id.startsWith("#") ? id.slice(1) : id;
  const element = document.getElementById(cleanId);
  if (!element) return Promise.resolve();

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetY = Math.max(0, elementTop - offset);

  window.scrollTo({ top: targetY, behavior: scrollBehavior });
  return Promise.resolve();
};

export const smoothScrollTo = (targetY: number): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  window.scrollTo({ top: Math.max(0, targetY), behavior: scrollBehavior });
  return Promise.resolve();
};
