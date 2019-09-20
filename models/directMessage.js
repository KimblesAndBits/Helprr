module.exports = function (sequelize, DataTypes) {
	const DirectMessage = sequelize.define("DirectMessage",
		{
			message: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			author: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
        });
        
        DirectMessage.associate = function (models) {
            DirectMessage.belongsTo(models.DirectConversation, {
                foreignKey: {
                    name: "convo_id",
                    allowNull: false
                }
            });
        };

	return DirectMessage;
};