 //iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const cartItems = getCartItems();
                            let cartTotal = getCartTotal();
                            // 2. Apply discount if coupon provided
                            if (couponCode) {
                                const discountResult = applyDiscount(cartTotal, couponCode, cartItems);
                                cartTotal = discountResult.finalTotal;
                            }
                            // 3. Validate payment method (card/upi/cod)
                            if (!validatePaymentMethod(paymentMethod)) {
                                return { status: 'failed', message: 'Invalid payment method' };
                            }
                            // 4. Process payment (simulate)
                            const paymentSuccess = true; // Simulate payment success
                            if (!paymentSuccess) {
                                return { status: 'failed', message: 'Payment processing failed' };
                            }
                            // 5. Reduce stock for all items
                            for (const item of cartItems) {
                                reduceStock(item.productId, item.quantity);
                            }

                            // 6. Clear cart
                            clearCart();
                            // 7. Generate order summary
                            const orderId = generateOrderId();
                            
                            // Return order summary:
                            return {
                              orderId: orderId,
                              items: cartItems,
                              subtotal: cartTotal + (cartTotal * 0.18), // Assuming 18% tax
                              discount: cartTotal - getCartTotal(),
                              total: cartTotal,
                              paymentMethod: paymentMethod,
                              status: 'success',
                              message: 'Payment successful'
                            };  
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            const validMethods = ['card', 'upi', 'cod'];
                            return validMethods.includes(method);

                          }
                          
                          function generateOrderId() {
                            // Generate random order Id
                    
                            return 'ORD' + Date.now();
                          }