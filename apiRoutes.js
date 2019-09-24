const db = require("./models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
    app.post("/api/login", (req, res) => {
        let email = req.body.email;
        db.User.findOne({
            where: { email: email }
        }).then((user, err) => {
            if (err) throw err;
            res.send(user);
        });
    });

    app.post("/api/register", (req, res) => {
        let userInfo = req.body
        db.User.findOrCreate({
            where: { [Op.or]: [{ email: userInfo.email }, { user_name: userInfo.user_name }] }, defaults: { ...userInfo }
        }).spread((user, created) => {
            if (created) {
                res.send(user);
            } else {
                res.send("That email or username is already in use.");
            }
        })
    });

    app.post("/api/post/create", (req, res) => {
        let postInfo = req.body;
        db.Post.create({ ...postInfo }).then((post, err) => {
            if (err) throw err;
            res.send(post);
        })
    });

    app.get("/api/post/find10", (req, res) => {
        // let startFilter = parseInt(req.params.startPoint);
        db.Post.findAll({
            limit: 10,
            order: ["updatedAt"],
            include: [{
                model: db.Comment
            }]
        }).then((posts, err) => {
            if (err) throw err;
            let postList = [];
            posts.forEach(element => {
                postList.push(element.dataValues)
            });
            res.send(postList);
        });
    });

    app.get("/api/comments/find/:postId", (req, res) => {
        let post = parseInt(req.params.postId, 10);
        console.log(post);
        db.Post.findOne({
            where: { id: post },
            include: [{
                model: db.Comment
            }]
        }).then((post, err) => {
            if (err) throw err;
            let commentList = [];
            post.dataValues.Comments.forEach(element => {
                commentList.push(element.dataValues)
            });
            res.send(post.dataValues.Comments);
        });
    });

    app.post("/api/comment/create", (req, res) => {
        let commentInfo = req.body;
        db.Comment.create({ ...commentInfo }).then((comment, err) => {
            if (err) throw err;
            res.send(comment);
        })
    });

    app.delete("/api/comment/delete/:id", (req, res) => {
        let deleteId = parseInt(req.params.id, 10)
        db.Comment.destroy({ where: { id: deleteId } })
        res.send(deleteId);
    });
};