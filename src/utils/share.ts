import { PERSONAL_INFO } from "../data/portfolioData";

/**
 * Native Web Share API with clipboard copy fallback.
 * Returns true if shared or copied successfully, false otherwise.
 */
export const sharePortfolio = async (): Promise<boolean> => {
  const shareUrl = typeof window !== "undefined" ? window.location.origin || window.location.href : "";
  const isMobile =
    typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile && navigator.share) {
    try {
      await navigator.share({
        title: `${PERSONAL_INFO.name} | Software Engineer`,
        text: "Check out this software engineer portfolio.",
        url: shareUrl,
      });
      return true;
    } catch {
      // User canceled share
      return false;
    }
  }

  // Fallback to clipboard
  try {
    if (navigator?.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(shareUrl);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    }
  } catch {
    return false;
  }
};
