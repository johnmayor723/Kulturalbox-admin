const express = require('express');
const bodyParser = require('body-parser');
const methodOveride = require("method-override")

const indexRoute = require('./routes/IndexRoute')
//const productsRoutes = require('./routes/products')
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// Use method-override to look for a query parameter '_method'
app.use(methodOveride('_method'));

app.use('/', indexRoute);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
