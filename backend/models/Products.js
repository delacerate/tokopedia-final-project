class Product {
    constructor(db) {
        this.collection = db.collection('products');
    }

    async getAllProducts() {
        try {
            const productList = await this.collection.find().toArray();
            return productList;
        } catch (err) {
            console.error('Error getting products:', err); // Log the error
            throw err; // Rethrow the same error
        }
    }
}

module.exports = Product;
