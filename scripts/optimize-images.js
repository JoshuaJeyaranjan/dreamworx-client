
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const createPlaceholderImage = () => {
  const placeholderSvg = `
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#999" text-anchor="middle" dy=".3em">
    Image Loading...
  </text>
</svg>`;

  const placeholderPath = path.join(
    __dirname,
    "../public/assets/images/placeholder.svg"
  );
  fs.writeFileSync(placeholderPath, placeholderSvg);
  console.log("✅ Created placeholder image");
};


const analyzeImages = () => {
  const imagesDir = path.join(__dirname, "../public/assets/images");

  if (!fs.existsSync(imagesDir)) {
    console.log("❌ Images directory not found");
    return;
  }

  const files = fs.readdirSync(imagesDir, { withFileTypes: true });
  const imageFiles = files.filter(
    (file) => file.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
  );

  console.log(`📊 Found ${imageFiles.length} image files`);

  let totalSize = 0;
  const largeFiles = [];

  imageFiles.forEach((file) => {
    const filePath = path.join(imagesDir, file.name);
    const stats = fs.statSync(filePath);
    const sizeInMB = stats.size / (1024 * 1024);
    totalSize += sizeInMB;

    if (sizeInMB > 1) {
      largeFiles.push({ name: file.name, size: sizeInMB });
    }
  });

  console.log(`📦 Total images size: ${totalSize.toFixed(2)} MB`);

  if (largeFiles.length > 0) {
    console.log("\n⚠️  Large files (>1MB):");
    largeFiles.forEach((file) => {
      console.log(`   - ${file.name}: ${file.size.toFixed(2)} MB`);
    });
  }

  return { totalSize, largeFiles, imageFiles };
};


const generateRecommendations = (analysis) => {
  console.log("\n💡 Optimization Recommendations:");
  console.log("1. Convert images to WebP format for better compression");
  console.log("2. Resize images to appropriate dimensions (max 1920px width)");
  console.log("3. Compress images to reduce file size");
  console.log("4. Use responsive images with srcset");
  console.log("5. Implement lazy loading for images below the fold");
  console.log("6. Consider using a CDN for image delivery");

  if (analysis.largeFiles.length > 0) {
    console.log("\n🔧 Immediate actions needed:");
    analysis.largeFiles.forEach((file) => {
      console.log(`   - Optimize ${file.name} (${file.size.toFixed(2)} MB)`);
    });
  }
};


const createOptimizationConfig = () => {
  const config = {
    imageOptimization: {
      formats: ["webp", "avif"],
      qualities: {
        webp: 80,
        avif: 70,
        jpeg: 85,
        png: 90,
      },
      sizes: {
        thumbnail: 200,
        small: 400,
        medium: 800,
        large: 1200,
        xlarge: 1920,
      },
      lazyLoading: true,
      placeholder: "blur",
    },
    performance: {
      preloadCriticalImages: true,
      imageCompression: true,
      responsiveImages: true,
    },
  };

  const configPath = path.join(__dirname, "../image-optimization.config.json");
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log("✅ Created image optimization config");
};


const main = () => {
  console.log("🚀 Starting image optimization analysis...\n");

  createPlaceholderImage();
  const analysis = analyzeImages();
  generateRecommendations(analysis);
  createOptimizationConfig();

  console.log("\n✨ Image optimization analysis complete!");
  console.log(
    "📝 Check image-optimization.config.json for configuration details"
  );
};

main();
