const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());



const productData = {

data: [
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/um-training-001-1.jpg?v=1681193995',
      product_title: 'Limited',
      product_badge: 'NEW',
      product_variants: [{ v1: 'Blue/S' }, { v2: 'Blue/M' }, { v3: 'Blue/L' }]
    },
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/limited-edition-003-4_1024x.jpg?v=1667474573',
      product_title: 'Um Training',
      product_badge: 'HOT',
      product_variants: [{ v1: 'RED/S' }, { v2: 'RED/M' }, { v3: 'RED/L' }]
    },
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/beach-bum-01_1024x.jpg?v=1678254733',
      product_title: 'Beach Bum',
      product_badge: 'NEW',
      product_variants: [{ v1: 'Orange/S' }, { v2: 'Orange/M' }, { v3: 'Orange/L' }]
    },
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/limited-edition-003-4_1024x.jpg?v=1667474573',
      product_title: 'Um Training X',
      product_badge: 'HOT',
      product_variants: [{ v1: 'RED/XS' }, { v2: 'RED/M' }, { v3: 'RED/XL' }]
    },
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/um-training-001-1.jpg?v=1681193995',
      product_title: 'Limited X',
      product_badge: 'NEW',
      product_variants: [{ v1: 'Blue/XS' }, { v2: 'Blue/M' }, { v3: 'Blue/XL' }]
    },
    {
      product_image: 'https://www.urbanmonkey.com/cdn/shop/products/beach-bum-01_1024x.jpg?v=1678254733',
      product_title: 'Beach Bum X',
      product_badge: 'NEW',
      product_variants: [{ v1: 'Orange/XS' }, { v2: 'Orange/M' }, { v3: 'Orange/XL' }]
    }
    // ... (other product entries)
  ]
};

app.get('/api/products', (req, res) => {
  res.json(productData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
