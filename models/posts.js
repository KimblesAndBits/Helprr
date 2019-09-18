module.exports = function (sequelize, DataTypes) {
	const Post = sequelize.define("Post",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			video: {
				type: DataTypes.STRING,
				allowNull: true
			}
		});

	return Post;
};