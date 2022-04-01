

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

