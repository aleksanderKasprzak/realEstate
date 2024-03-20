import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        }
    },
    {
        description:{
            type: String,
            required: true,
        }
    },
    {
        address:{
            type: String,
            required: true,
        }
    },
    {
        reguralPrice:{
            type: Number || String,
            required: true,
        }
    },
    {
        imageUrls:{
            type: Array,
            required: true,
        }
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;