const express = require('express');
const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controller/contactController');
const router = express.Router();

router.route('/getAllContacts').get(getAllContacts);
router.route('/getSingleContact/:id').get(getSingleContact);
router.route('/createContact').post(createContact);
router.route('/updateContact/:id').put(updateContact);
router.route('/deleteContact/:id').delete(deleteContact);
module.exports = router;
