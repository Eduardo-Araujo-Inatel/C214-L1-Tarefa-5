const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const MovieRepository = require('../port/movie_repository');
const Constraints = require('../utils/movie_validation');
const Validation = require('../utils/validation');

const Movie = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await MovieRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByName(data) {
        try {
            const validation = validate.validate(data, Constraints.getName);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.getByName(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByProducer(data) {
        try {
            const validation = validate.validate(data, Constraints.getProducer);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.getByProducer(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await MovieRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Movie;