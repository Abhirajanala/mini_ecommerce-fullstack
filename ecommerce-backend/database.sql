CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  rating DECIMAL(3,2),
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, category, description, image, rating) VALUES
('iPhone 14 Pro', 999.99, 'electronics', 'Latest Apple smartphone with advanced camera', 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500', 4.8),
('Samsung Galaxy S23', 849.99, 'electronics', 'Powerful Android phone with great display', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500', 4.6),
('MacBook Pro 14"', 1999.99, 'electronics', 'Professional laptop for creators', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500', 4.9),
('Nike Air Max', 129.99, 'fashion', 'Comfortable running shoes', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', 4.4),
('Adidas Ultraboost', 149.99, 'fashion', 'Premium running shoes', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500', 4.5),
('Levi''s Jeans', 59.99, 'fashion', 'Classic denim jeans', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500', 4.3),
('Sony WH-1000XM4', 349.99, 'electronics', 'Noise cancelling headphones', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500', 4.7),
('iPad Air', 599.99, 'electronics', 'Versatile tablet for work and play', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500', 4.6),
('KitchenAid Mixer', 429.99, 'home', 'Stand mixer for baking enthusiasts', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', 4.8),
('Dyson Vacuum', 399.99, 'home', 'Powerful cordless vacuum cleaner', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500', 4.5),
('IKEA Desk', 199.99, 'home', 'Modern standing desk', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 4.2),
('Python Programming Book', 39.99, 'books', 'Learn Python programming', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500', 4.4),
('JavaScript Guide', 45.99, 'books', 'Complete JS development guide', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500', 4.6),
('Coffee Maker', 89.99, 'home', 'Automatic drip coffee maker', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500', 4.3),
('Bluetooth Speaker', 79.99, 'electronics', 'Portable wireless speaker', 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500', 4.1),
('Gaming Mouse', 49.99, 'electronics', 'RGB gaming mouse', 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500', 4.4),
('Yoga Mat', 29.99, 'sports', 'Non-slip exercise mat', 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500', 4.0),
('Water Bottle', 24.99, 'sports', 'Insulated stainless steel bottle', 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500', 4.5),
('Sunglasses', 129.99, 'fashion', 'Polarized UV protection sunglasses', 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500', 4.3),
('Watch', 199.99, 'fashion', 'Luxury automatic watch', 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500', 4.7),
('Backpack', 79.99, 'fashion', 'Waterproof laptop backpack', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', 4.2),
('Camera', 899.99, 'electronics', 'DSLR camera with lens kit', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500', 4.8),
('Headphones', 199.99, 'electronics', 'Wireless over-ear headphones', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 4.4),
('Smart Watch', 299.99, 'electronics', 'Fitness tracking smartwatch', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', 4.5),
('Gaming Console', 499.99, 'electronics', 'Next-gen gaming console', 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500', 4.9),
('Laptop Stand', 49.99, 'electronics', 'Adjustable aluminum stand', 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500', 4.1),
('Wireless Charger', 39.99, 'electronics', 'Fast wireless charging pad', 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500', 4.0),
('Desk Lamp', 34.99, 'home', 'LED adjustable desk lamp', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', 4.2),
('Plant Pot', 19.99, 'home', 'Ceramic indoor plant pot', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500', 4.3),
('Throw Pillow', 24.99, 'home', 'Decorative cotton pillow', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 4.1);