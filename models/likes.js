module.exports = function (sequelize, DataTypes) {
	const Like = sequelize.define("Like",
		{
			post_id: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		});

	return Like;
};