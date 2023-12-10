module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        title: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT('long')
        },
    });

    return Post;
};