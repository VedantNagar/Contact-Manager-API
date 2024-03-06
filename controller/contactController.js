const { model } = require('mongoose');

const getSingleContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};
const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete contact for ${req.params.id}` });
};
const getAllContacts = (req, res) => {
  res.status(201).json({ message: `Get all contacts` });
};
const createContact = (req, res) => {
  res.status(201).json({ message: `Create new contact` });
};
module.exports = {
  getSingleContact,
  updateContact,
  getAllContacts,
  deleteContact,
  createContact,
};
