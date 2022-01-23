const mongoose = require("mongoose");
const baseModel = require("./baseModel");

const Schema = mongoose.Schema;

var articleSchema = new mongoose.Schema({
	...baseModel,
	title: { type: String, required: true },
	description: { type: String, required: true },
	body: { type: String, required: true },
	tagList: {
		type: [String],
		default: [],
	},
	favorited: {
		type: Boolean,
		default: false,
	},
	favoritesCount: {
		type: Number,
		default: 0,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

module.exports = articleSchema;
