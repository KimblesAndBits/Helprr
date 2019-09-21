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
			image_video: {
				type: DataTypes.STRING(1024),
				allowNull: true
			},
			author: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			likes : {
				type: DataTypes.INTEGER,
				allowNull: false,
				default: 0
			}
		});

		Post.associate = function (models) {
			Post.hasMany(models.Comment, {
				foreignKey: {
					name: "post_id",
					allowNull: false
				}
			});
		};

	return Post;
};