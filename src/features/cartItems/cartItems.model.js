var cartItems = [
    new CartItemModel(1, 2, 1, 1),
    new CartItemModel(1, 1, 2, 2), // Changed id to 2 to avoid duplication
];

export default class CartItemModel {
    constructor(productID, userID, quantity, id) {
        this.productID = productID;
        this.userID = userID;
        this.quantity = quantity;
        this.id = id;
    }

    static add(productID, userID, quantity) {
        try {
            const cartItem = new CartItemModel(productID, userID, quantity);
            cartItem.id = cartItems.length + 1;
            cartItems.push(cartItem);
            return cartItem;
        } catch (error) {
            console.error("Error adding cart item:", error);
            throw new Error("Could not add cart item");
        }
    }

    static get(userID) {
        try {
            return cartItems.filter((i) => i.userID == userID);
        } catch (error) {
            console.error("Error fetching cart items:", error);
            throw new Error("Could not fetch cart items");
        }
    }

    static delete(cartItemID, userID) {
        try {
            const cartItemIndex = cartItems.findIndex(
                (i) => i.id == cartItemID && i.userID == userID
            );
            if (cartItemIndex == -1) {
                return "Item not found";
            } else {
                cartItems.splice(cartItemIndex, 1);
            }
        } catch (error) {
            console.error("Error deleting cart item:", error);
            throw new Error("Could not delete cart item");
        }
    }
}
