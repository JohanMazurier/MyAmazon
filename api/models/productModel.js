import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        image: {type: String, requierd: true},
        from: {type: String, requierd: true},
        category: {type: String, requierd: true},
        description: {type: String, requierd: true},
        price: {type: Number, required: true},
        countInStock: {type: Number, required: true},
        rating: {type: Number, required: true},
        numReviews: {type: Number, required: true},
    },
    {
            timestamp: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;