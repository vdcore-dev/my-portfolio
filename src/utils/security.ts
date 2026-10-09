// ASCII character codes evaluated strictly at runtime
const CHAR_CODES = [99, 111, 110, 116, 97, 99, 116, 64, 118, 100, 99, 111, 114, 101, 46, 99, 111, 109];

/**
 * Reconstructs address strictly on client interaction.
 */
export const getSecureEmail = (): string => {
  return String.fromCharCode(...CHAR_CODES);
};

/**
 * Triggers native mail client safely without static DOM links.
 */
export const triggerSecureMail = () => {
  const email = getSecureEmail();
  if (!email) return;

  const tempLink = document.createElement("a");
  tempLink.href = `mailto:${email}`;
  tempLink.rel = "noreferrer noopener";
  tempLink.style.display = "none";
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
};

/**
 * Copies address directly to system clipboard.
 */
export const copySecureEmail = async (): Promise<boolean> => {
  const email = getSecureEmail();
  if (!email) return false;

  try {
    if (navigator?.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
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