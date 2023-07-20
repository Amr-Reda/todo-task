const express = require('express');
const isAuthorized = require('../../middlewares/isAuthorized');

const router = express.Router();

const { 
    createItem,
    getAllItems,
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
    '/', 
    isAuthorized(),
    getAllItems
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