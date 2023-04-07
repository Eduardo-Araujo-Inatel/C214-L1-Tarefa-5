const { MovieModel } = require('../infrastructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { produtora: data.produtora };
            const result = await MovieModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await MovieModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByName(data) {
        try {
            const result = await MovieModel.find({ nome: data.nome }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async getByProducer(data) {
        try {
            const result = await MovieModel.find({ produtora: data.produtora }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MovieModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = MovieRepository;