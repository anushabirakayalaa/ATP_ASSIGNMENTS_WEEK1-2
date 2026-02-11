import exp from "express";
import { connect } from "mongoose";
import { userRoute } from "./APIS/UserAPI.js";
import { productRoute } from "./APIS/ProductAPI.js";

const app = exp();
const port = 4000;

// body parser
app.use(exp.json());

// routes
app.use("/user-api", userRoute);
app.use("/product-api", productRoute);

// DB connection
async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/ecomdb");
    console.log("DB Connected successfully");

    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  } catch (err) {
    console.log("DB connection error:", err);
  }
}

connectDB();

// error handler (ALWAYS AT END)
app.use((err, req, res, next) => {
  res.status(400).json({
    message: "Error occurred",
    reason: err.message,
  });
});
