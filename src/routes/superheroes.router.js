/*const express = require('express');
const superhero_routes = express.Router();
const superheroSchema = require('../models/superheroModel');

/* POST: http://localhost:5000/api/v1/superheroes/superhero
superhero_routes.post('/superhero', (req, res) => {
  const superhero = superheroSchema(req.body);
  superhero
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET:  http://localhost:5000/api/v1/superheroes
superhero_routes.get('/', (req, res) => {
  superheroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET{:id}:  http://localhost:5000/api/v1/superheroes/superheroId
superhero_routes.get('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  superheroSchema
    .findById(superheroId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* PUT{:id}: http://localhost:5000/api/v1/superheroes/superheroId
superhero_routes.put('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  const {
    superhero,
    real_name,
    feature = { universe, super_powers },
    superhero_sidekick = { sidekick, side_powers },
  } = req.body;
  superheroSchema
    .updateOne(
      { _id: superheroId },
      { superhero, real_name, feature, superhero_sidekick }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* DELETE{:id}: http://localhost:5000/api/v1/superheroes/superheroId
superhero_routes.delete('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  superheroSchema
    .remove({ _id: superheroId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = superhero_routes;*/

const express = require('express');
const superheroService = require('../services/superhero.service');
const superheroModel = require('../models/superheroModel');
const superheroRouter = express.Router();
const service = new superheroService();

//EndPoints
superheroRouter.post('/superhero', async (req, res) => {
  const superhero = superheroModel(req.body);
  await service
    .createsuperhero(superhero)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superheroRouter.get('/', async (req, res) => {
  await service
    .listsuperhero()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superheroRouter.get('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .showsuperhero(superheroId)
    .then((data) => res.status(302).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superheroRouter.put('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  const {superhero, real_name, feature = { universe, super_powers }, superhero_sidekick = { sidekick, side_powers },} = req.body;
  await service
    .editsuperhero({ _id: superheroId, real_name, superhero, feature, address, superhero_sidekick })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});

superheroRouter.delete('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .removesuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = superheroRouter;

