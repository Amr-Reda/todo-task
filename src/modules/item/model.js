const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema(
	{
        userId : {
			type : String,
			required : true
		},
		task : {
			type : String,
			required : true
		},
		description: {
			type: String,
			required: false
		},
		completed: {
			type: Boolean,
			default: false
		},
		date : {
			type : Date,
			default : Date.now
		}
	},
	{
		collection: 'Items',
		timestamps: true,
		versionKey: false,
	}
);

const Item = mongoose.model('Items', ItemSchema);

module.exports = Item;
