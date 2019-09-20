module.exports = function (sequelize, DataTypes) {
	const Comment = sequelize.define("Comment",
		{
			message: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		});

	return Comment;
};