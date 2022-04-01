

const express = require('express');
const PersonBillService = require('../services/personBill.service');
const personBillModel = require('../models/personBillModel');
const personBillV2Router = express.Router();
const service = new PersonBillService();

//EndPoints
personBillV2Router.post('/person', async (req, res) => {
  const personBillV2 = personBillModel(req.body);
  await service
    .createpersonBill(personBillV2)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personBillV2Router.get('/', async (req, res) => {
  await service
    .listpersonBill()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personBillV2Router.get('/:personId', async (req, res) => {
  const { personId } = req.params;
  await service
    .showpersonBill(personId)
    .then((data) => res.status(302).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personBillV2Router.put('/:personId', async (req, res) => {
  const { personId } = req.params;
  const { name, lastname, dni, address = { city, code_zip, geo } } = req.body;
  await service
    .editpersonBill({ _id: personId, name, lastname, dni, address })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});

personBillV2Router.delete('/:personId', async (req, res) => {
  const { personId } = req.params;
  await service
    .removepersonBill(personId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = personBillV2Router;
