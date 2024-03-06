const express = require('express');
const router = express.Router();

router.route('/getAllContacts').get((req, res) => {
  res.json({ message: 'Get all contacts' });
});
router.route('/getSingleContact/:id').get((req, res) => {
  res.json({ message: 'Get single contacts' });
});
router.route('/createContact').post((req, res) => {
  res.json({ message: 'Create contact' });
});
router.route('/updateContact').put((req, res) => {
  res.json({ message: 'Update contact' });
});
router.route('/deleteContact').delete((req, res) => {
  res.json({ message: 'Delete a contact' });
});
module.exports = router;
