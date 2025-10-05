// Dynamically import all images from assets subfolders
// Returns an object: { category1: [{name, src}], category2: [{name, src}] }

function importAll(globResult) {
  return Object.entries(globResult)
    .map(([path, src]) => {
      const parts = path.split("/");
      const fileName = parts[parts.length - 1];
      return { name: fileName.replace(/\.[^.]+$/, ""), src };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function loadAssetImages() {
  const category1Imports = import.meta.glob(
    "../assets/category1/*.{png,jpg,jpeg,webp,gif}",
    { eager: true, import: "default" },
  );
  const category2Imports = import.meta.glob(
    "../assets/category2/*.{png,jpg,jpeg,webp,gif}",
    { eager: true, import: "default" },
  );

  return {
    category1: importAll(category1Imports),
    category2: importAll(category2Imports),
  };
}

export function mapImagesByKeyword(images, keywords) {
  // Simple helper to pick the first image whose name includes any of the keywords
  const lower = images.map((i) => ({ ...i, lname: i.name.toLowerCase() }));
  for (const k of keywords) {
    const kw = k.toLowerCase();
    const match = lower.find((i) => i.lname.includes(kw));
    if (match) return match.src;
  }
  return images[0]?.src;
}
