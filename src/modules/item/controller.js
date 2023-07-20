const Item = require('./model');
const { PAGE_LIMIT } = require("../../../config");

const createItem = async (req, res) => {
	try {

	} catch (error) {
		return res
			.status(500)
			.json({
				message: error.message,
			});
	}
};

const getItemByID = async (req, res) => {
	const { id } = req.params;
	try {
		
	} catch (error) {
		return res
			.status(500)
			.json({ message: error.message });
	}
};

const updateItem = async (req, res) => {
	try {
		
	} catch (error) {
		return res
			.status(500)
			.json({
				message: error.message,
			});
	}
};

const deleteItem = async (req, res) => {
	try {
		
	} catch (error) {
		return res
			.status(500)
			.json({
				message: error.message,
			});
	}
};

module.exports = {
	createItem,
	getItemByID,
	updateItem,
	deleteItem,
}