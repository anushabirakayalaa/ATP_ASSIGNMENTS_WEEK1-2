//ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            const prod = getProductById(productId);
                            if (!prod) {
                                return 'Product not found';
                            }
                            // 2. Check stock availability
                            if (!checkStock(productId, quantity)) {
                                return 'Insufficient stock';
                            }
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            const existing = cartItems.find(item => item.productId === productId);
                            if (existing) {
                                existing.quantity += quantity;
                            } else {
                                cartItems.push({ productId, quantity });
                            } 
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            
                            // Remove product from cart
                            cartItems = cartItems.filter(item => item.productId !== productId);
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            const item = cartItems.find(i => i.productId === productId);
                            if (item) {
                                // Check stock before updating
                                if (checkStock(productId, newQuantity)) {
                                    item.quantity = newQuantity;
                                } else {
                                    return 'Insufficient stock';
                                }
                            }
                            // Check stock before updating
                          }

                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems.map(item => {
                                const prod = getProductById(item.productId);    
                                return { ...item, product: prod };
                            });
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            let t = 0;
                            for (const item of cartItems) {
                                const prod = getProductById(item.productId);
                                if (prod) {
                                    t += prod.price * item.quantity;
                                }
                            }
                            // Return total
                            return t;
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems = [];

                          }
                          
