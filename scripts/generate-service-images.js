const fs = require('fs');
const path = require('path');

// Service images to create
const services = [
  'water-heater',
  'tankless-heater', 
  'faucet-sink',
  'drain-cleaning',
  'sewer-line',
  'gas-line',
  'leak-detection',
  'toilet-repair'
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create simple placeholder images using HTML canvas
services.forEach(service => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${service}</title>
  <style>
    body { margin: 0; padding: 0; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="canvas" width="400" height="300"></canvas>
  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#1e40af');
    gradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    
    // Text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('${service.replace('-', ' ').toUpperCase()}', 200, 150);
    
    // Icon placeholder
    ctx.font = '48px Arial';
    ctx.fillText('🔧', 200, 200);
  </script>
</body>
</html>`;

  const htmlPath = path.join(imagesDir, `${service}.html`);
  fs.writeFileSync(htmlPath, html);
  
  console.log(`Created placeholder for ${service}`);
});

console.log('Service image placeholders created!');
console.log('Note: These are HTML files. For production, replace with actual images.'); 