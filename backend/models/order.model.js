import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    items: [
      {
        product: {
          items: [
            {
              product: { type: String, required: true, ref: "product" },
              quantity: { type: Number, required: true },
            },
          ],
        },
        amount: { type: Number, required: true },
        address: { type: String, required: true, ref: "address" },
        status: { type: String, default: "Order placed" },
        paymentType: { type: String, default: "VISA" },
        isPayed: { type: String, default: false },
      },
    ],
  },
  { timestamp: true }
);

const Orders = mongoose.model("Order", orderSchema);

export default Orders;
