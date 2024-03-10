const { model } = require('mongoose');

const getSingleContact = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};
function updateContact(req, res) {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
}
const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete contact for ${req.params.id}` });
};
const getAllContacts = (req, res) => {
  res.status(201).json({ message: `Get all contacts` });
};
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name) {
    res.json({ error: 'Please enter name' });
  }
  if (!email) {
    res.json({ error: 'Please enter email' });
  }
  if (!phone) {
    res.json({ error: 'Please enter phone' });
  }
  
};
module.exports = {
  getSingleContact,
  updateContact,
  getAllContacts,
  deleteContact,
  createContact,
};
