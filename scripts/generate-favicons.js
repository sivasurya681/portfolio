const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const svgPath = path.join(__dirname, '../assets/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

const sizes = [
  { name: '../assets/favicon-16x16.png', width: 16 },
  { name: '../assets/favicon-32x32.png', width: 32 },
  { name: '../assets/apple-touch-icon.png', width: 180 },
  { name: '../assets/favicon-512x512.png', width: 512 },
  { name: '../assets/favicon.ico', width: 32 },
  { name: '../favicon.ico', width: 32 }
];

sizes.forEach(({ name, width }) => {
  const resvg = new Resvg(svgBuffer, {
    fitTo: {
      mode: 'width',
      value: width,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  const targetPath = path.join(__dirname, name);
  fs.writeFileSync(targetPath, pngBuffer);
  console.log(`Created ${name} (${width}x${width}, ${pngBuffer.length} bytes)`);
});
