var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	postId: String,
	title: String,
	author: String,
	description: String,
	image: String,
	date: Date
},{
	collection: 'posts'
});

module.exports = mongoose.model('Post', postSchema);
