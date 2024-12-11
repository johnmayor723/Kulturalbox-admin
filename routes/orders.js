const express = require('express');
const router = express.Router();
const axios = require('axios');

const BURL = "http://api.kulturalbox.com.ng/api";
// Get all orders
router.get('/', (req, res) => {
  axios.get(`${BURL}/orders`)
    .then(response => {
      res.render('orders', { orders: response.data });
    })
    .catch(error => {
      console.error('Error fetching orders:', error);
      res.status(500).send('Server Error');
    });
});

// Get single order by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${BURL}/orders/${id}`)
    .then(response => {
      res.render('order', { order: response.data });
    })
    .catch(error => {
      console.error('Error fetching order:', error);
      res.status(500).send('Server Error');
    });
});

// Create a new order
router.post('/create', (req, res) => {
  const { customerName, items, total, status } = req.body;
  axios.post(`${BURL}/orders`, { customerName, items, total, status })
    .then(response => {
      res.redirect('/orders');
    })
    .catch(error => {
      console.error('Error creating order:', error);
      res.status(500).send('Server Error');
    });
});

// Update order status
router.post('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  axios.put(`${BURL}/orders/${id}`, { status })
    .then(response => {
      res.redirect(`/orders/${id}`);
    })
    .catch(error => {
      console.error('Error updating order:', error);
      res.status(500).send('Server Error');
    });
});

// Delete an order
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  axios.delete(`${BURL}/orders/${id}`)
    .then(response => {
      res.redirect('/orders');
    })
    .catch(error => {
      console.error('Error deleting order:', error);
      res.status(500).send('Server Error');
    });
});


module.exports = router;
