const express = require('express');
const isAuthorized = require('../../middlewares/isAuthorized');

const router = express.Router();

const { 
    createItem,
    getItemByID,
    updateItem,
    deleteItem,
} = require('./controller');

router.post(
    '/', 
    isAuthorized(),
    createItem
);

router.get(
    '/:id', 
    isAuthorized(),
    getItemByID
);

router.put(
    '/:id', 
    isAuthorized(),
    updateItem
);

router.delete(
    '/:id', 
    isAuthorized(),
    deleteItem
);

module.exports = router;