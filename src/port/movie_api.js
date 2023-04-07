const Movie = require('../application/movie_service');
const Utils = require('../utils/utils');

const route = '/movie';

module.exports = (app) => {
    app.get(`${route}/list`, async (req, res) => {
        const response = await Movie.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/listProducer`, async (req, res) => {
        const response = await Movie.listByProducer(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/listName`, async (req, res) => {
        const response = await Movie.listByName(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.post(`${route}/create`, async (req, res) => {
        const response = await Movie.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/updateByProducer`, async (req, res) => {
        const response = await Movie.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete/:name`, async (req, res) => {
        const data = req.body;
        const { name } = req.params;
        data.nome = name;
        const response = await Movie.delete(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};