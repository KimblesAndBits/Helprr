module.exports = function (sequelize, DataTypes) {
	const DirectConversation = sequelize.define("DirectConversation",
		{
			partner: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		});

		DirectConversation.associate = function (models) {
            DirectConversation.belongsTo(models.User, {
                foreignKey: {
                    name: "uid",
                    allowNull: false
                }
            });
		};
		
	return DirectConversation;
};