
const db = require("../models");

const Post = db.post;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getAll = (req, res) => {
    Post.findAll({
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        offset: req.query.offset ? parseInt(req.query.offset) : 0
    }).then((posts) => {
        console.log("TEST", posts);
        res.send({ message: "Data fetched successfully!", data: posts });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.getById = (req, res) => {
    Post.findOne({
        where: {
            id: req.params.postId
        }
    }).then((post) => {
        if (post) res.send({ message: "Data fetched successfully!", data: post });
        else res.status(404).send({ message: "Data not found!" })
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.createPost = (req, res) => {
    Post.create({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
    }).then(newPost => {
        res.send({ message: "Post created successfully!", data: newPost });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.editPost = (req, res) => {
    Post.findOne({
        where: {
            id: req.params.postId
        }
    }).then((post) => {
        post.update({
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
        })
        res.send({ message: "Data updated successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.deletePost = (req, res) => {
    Post.findOne({
        where: {
            id: req.params.postId
        }
    }).then((post) => {
        post.destroy();
        res.send({ message: "Data deleted successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}