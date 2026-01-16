/**
 * Font Loader Utility
 * Dynamically loads Google Fonts (Playfair Display & Lato) at runtime
 * 
 * @returns {void}
 */
export const loadFonts = (): void => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};
