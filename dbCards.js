import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    title: String,
    type: String,
    imgUrl: String
});

export default mongoose.model('cards', cardSchema);