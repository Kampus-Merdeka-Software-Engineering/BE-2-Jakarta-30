const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/posts",
        [
            authJwt.verifyToken,
        ],
        controller.getAll
    );

    app.get(
        "/api/posts/:postId",
        [
            authJwt.verifyToken,
        ],
        controller.getById
    );

    app.post(
        "/api/posts",
        [
            authJwt.verifyToken,
        ],
        controller.createPost
    );

    app.patch(
        "/api/posts/:postId",
        [
            authJwt.verifyToken,
        ],
        controller.editPost
    );

    app.delete(
        "/api/posts/:postId",
        [
            authJwt.verifyToken,
        ],
        controller.deletePost
    );
};