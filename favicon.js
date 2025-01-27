// Create canvas
const canvas = document.createElement('canvas');
canvas.width = 32;
canvas.height = 32;
const ctx = canvas.getContext('2d');

// Create circle
ctx.beginPath();
ctx.arc(16, 16, 16, 0, 2 * Math.PI); // Center x, center y, radius, start angle, end angle
ctx.closePath();

// Fill background
ctx.fillStyle = '#1A1A1A'; // Black background
ctx.fill();

// Draw text
ctx.fillStyle = '#FFFFFF'; // White text
ctx.font = 'bold 16px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('MTD', 16, 18); // Moved text down 2 pixels (from 16 to 18)

// Convert to favicon
const link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = canvas.toDataURL();
document.head.appendChild(link);