//i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            // Find and return product by ID
                            return products.find(p=>p.id===id);//find-Used to get the first single element that matches a condition
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                            return products;
                          }
                          
                          export function getProductsByCategory(category) {
                            // Filter products by category
                            //filter-all elements that match a condition
                            return products.filter(p=>p.category===category);
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)query = what the user searches (example: "lap", "phone")
                            return products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()));
                            //includes check if a word or value exists inside another
                            //here it checks product names
                            //its case-insensitive (Laptop = laptop)
                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            const prod = getProductById(productId);
                            if (prod) {
                                return prod.stock >= quantity;
                            }
                            return false;
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                            const prod = getProductById(productId);
                            if (prod && prod.stock >= quantity) {
                                prod.stock -= quantity;
                                return true;
                            }
                          }
