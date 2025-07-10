import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid Email ID!`,
        }
    }
    
});

const Subscribers = mongoose.model('Subscribers', subscriberSchema);

export default Subscribers;
