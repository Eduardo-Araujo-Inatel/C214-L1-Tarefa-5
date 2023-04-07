const mongoose = require('mongoose');

const uri = `mongodb+srv://eduardo:senha123@cluster0.osxwmtv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    produtora: String,
    atores: Array,
    ano: Number,
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel: MovieModel,
};