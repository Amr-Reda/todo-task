const express = require('express');
const router = express.Router();

const { 
    createItem,
    getItemByID,
    updateItem,
    deleteItem,
} = require('./controller');

router.post(
    '/', 
    createItem
);

router.get(
    '/:id', 
    getItemByID
);

router.put(
    '/:id', 
    updateItem
);

router.delete(
    '/:id', 
    deleteItem
);

module.exports = router;