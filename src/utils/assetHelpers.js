export const getAssetPath = (path) => {
  // For GitHub Pages deployment
  const basePath = process.env.PUBLIC_URL || '';
  return `${basePath}${path}`;
};
