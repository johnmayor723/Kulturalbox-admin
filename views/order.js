<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Details</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">FoodDeck Manager</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/orders">Orders</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Jumbotron Header -->
  <div class="jumbotron">
    <h1 class="display-4">Order Details</h1>
    <p class="lead">View and manage this order.</p>
  </div>

  <!-- Order Details -->
  <div class="container">
    <h3>Order ID: <%= order._id %></h3>
    <p><strong>Status:</strong> <%= order.status %></p>
    <p><strong>Customer Name:</strong> <%= order.customerName %></p>
    <p><strong>Total Price:</strong> $<%= order.totalPrice %></p>
    
    <h4>Items in this order:</h4>
    <ul class="list-group">
      <% order.items.forEach(item => { %>
        <li class="list-group-item">
          <strong>Product:</strong> <%= item.productName %> - <strong>Quantity:</strong> <%= item.quantity %>
        </li>
      <% }) %>
    </ul>

    <!-- Order Status Update Form -->
    <h4 class="mt-4">Update Order Status</h4>
    <form action="/orders/update-status/<%= order._id %>" method="POST">
      <div class="form-group">
        <label for="status">Change Status</label>
        <select name="status" id="status" class="form-control">
          <option value="pending" <%= order.status === 'pending' ? 'selected' : '' %>>Pending</option>
          <option value="shipped" <%= order.status === 'shipped' ? 'selected' : '' %>>Shipped</option>
          <option value="delivered" <%= order.status === 'delivered' ? 'selected' : '' %>>Delivered</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Update Status</button>
    </form>

    <!-- Delete Order -->
    <form action="/orders/delete/<%= order._id %>" method="POST" class="mt-3">
      <button type="submit" class="btn btn-danger">Delete Order</button>
    </form>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
