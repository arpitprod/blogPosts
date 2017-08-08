var express = require('express');
var app = express();
var postRouter = express.Router();

var Post = require('../models/post');

postRouter.route('/add/post').post(function (req, res) {
    var post = new Post();
    post.title = req.param('title');
    post.author = req.param('author');
    post.description = req.param('description');
    post.date = new Date();
    post.save()
    .then(post => {
        res.json({message: 'Post added successfully'});
    })
    .catch(err => {
        res.status(400).send('unable to save to database');
    });
});

postRouter.route('/').get(function (req, res) {
    Post.find(function (err, posts) {
        if (err)
            console.log(err);
        res.json(posts);
    });
});

postRouter.route('/edit/:id').get(function (req, res) {
    var postId = req.params.id;
    Post.findById(postId, function (err, post) {
        res.json(post);
    });
});

postRouter.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (!post)
            return next(new Error('Could not load Document'));
        else {
          if (req.param('title'))
            post.title = req.param('title');
          if (req.param('description'))
            post.description = req.param('description');
            post.save().then(post => {
                res.json('Post Updated');
            })
            .catch(err => {
                res.status(400).send('unable to update the database');
            });
        }
    });
});

postRouter.route('/delete/:id').get(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id},
        function (err, post) {
            if (err) res.json(err);
            else res.json('Successfully removed');
    });
});


module.exports = postRouter;