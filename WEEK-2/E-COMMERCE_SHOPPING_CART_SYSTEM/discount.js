//iii. discount.js - Coupon and discount logic
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            const c=coupons[couponCode];
                            if(!c){
                                return {valid:false, message:'Invalid coupon code'};
                            }
                            // 2. Check minimum amount requirement
                            if (c.minAmount && cartTotal < c.minAmount) {
                                return {valid:false, message:'Minimum amount requirement not met'};
                            }
                            // 3. Check category requirement (if any)
                            if (c.category) {
                                const hasCategory = cartItems.some(item => {
                                    const prod = getProductById(item.productId);
                                    return prod && prod.category === c.category;
                                });
                                if (!hasCategory) {
                                    return {valid:false, message:'Category requirement not met'};
                                }
                            }
                            // Return { valid: true/false, message: '...' }
            return {valid:true, message:'Coupon applied successfully'};
          }
                          
          export function calculateDiscount(couponCode, cartTotal) {
            // Calculate discount amount based on coupon type
            const c=coupons[couponCode];
            if(!c){
                return 0;
            }
            if (c.type === 'percentage') {
                return (cartTotal * c.value) / 100;
            } else if (c.type === 'flat') {
                return c.value;
            }
            // Return discount amount
            return 0;
          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            const validation = validateCoupon(couponCode, cartTotal, cartItems);
                            if (!validation.valid) {
                                return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: validation.message };
                            }   
                            // 2. If valid, calculate discount
                            const discount = calculateDiscount(couponCode, cartTotal);
                            const finalTotal = cartTotal - discount;
                            // 3. Return final amount and discount details                  
                            return { 
                              originalTotal: cartTotal, 
                              discount: discount, 
                              finalTotal: finalTotal,
                              message: validation.message
                            };
                          }
