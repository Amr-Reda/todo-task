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
        const {
            params: { id },
            body: updatePayload
        } = req;

        const validationResult = validate(req.body, updateItemShema);
        if (!validationResult.valid) {
            return res.status(400).json({ success: false, message: validationResult.errors[0].message });
        }

        const item = await Item.findOneAndUpdate(
            {
                userId: req.user._id,
                _id: id
            },
            updatePayload,
            {
                new: true,
                runValidators: true
            }
        );

        if (!item) return res.status(404).json({ success: false, message: "Item not found" });

        return res.status(200).json({
            message: "Item updated successfully",
            success: true,
            data: { item }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const isDeleted = await Item.findOneAndDelete({
            userId: req.user._id,
            _id: id
        });
        if (isDeleted) {
            return res.status(200).json({ success: true, message: "Item deleted successfully" });
        }
        return res.status(404).json({ success: false, message: "Item not found" });
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
