// Initial data
let price = 1299;
let courseTag = ""; // to store the label

// Check price and assign label
if (price < 500) {
    courseTag = "Budget Course";
} else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
} else {
    courseTag = "Premium Course";
}

// Print the label
console.log(courseTag);
