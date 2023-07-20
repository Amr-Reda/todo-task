const { validate } = require("jsonschema");

const Item = require("./model");
const { createItemShema, updateItemShema } = require("./schema");
const { PAGE_LIMIT } = require("../../../config");

const createItem = async (req, res) => {
    try {
        const validationResult = validate(req.body, createItemShema);
        if (!validationResult.valid) {
            return res.status(400).json({ success: false, message: validationResult.errors[0].message });
        }

        const item = await Item.create({
            userId: req.user._id,
            ...req.body
        });
        return res.status(201).json({
            success: true,
            message: "Item created successfully",
            data: { item }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getItemByID = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        return res.status(200).json({ message: "Item loaded successfully", success: true, data: item });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateItem = async (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteItem = async (req, res) => {
    try {
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createItem,
    getItemByID,
    updateItem,
    deleteItem
};
