import CartItemModel from "./cartItems.model.js";

export class CartItemsController {
    async add(req, res) {
        try {
            const { productID, quantity } = req.query;
            const userID = req.userID;
            CartItemModel.add(productID, userID, quantity);
            res.status(201).send("Cart is updated");
        } catch (error) {
            console.error("Error adding cart item:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async get(req, res) {
        try {
            const userID = req.userID;
            const items = CartItemModel.get(userID);
            res.status(200).send(items);
        } catch (error) {
            console.error("Error fetching cart items:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async delete(req, res) {
        try {
            const userID = req.userID;
            const cartItemID = req.params.id;
            const error = CartItemModel.delete(cartItemID, userID);
            if (error) {
                return res.status(404).send(error);
            }
            res.status(200).send("Cart item is removed");
        } catch (error) {
            console.error("Error deleting cart item:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}
