```javascript
//tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'], // Added .html to content
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```javascript
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script> 
</head>
<body>
    <div class="bg-red-500"></div>
</body>
</html>
```