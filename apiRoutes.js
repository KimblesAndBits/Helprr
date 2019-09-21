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
            order: ["updatedAt"]
        }).then((posts, err) => {
            if (err) throw err;
            let postList = [];
            posts.forEach(element => {
                postList.push(element.dataValues)
            });
            res.send(postList);
        });
    });
};