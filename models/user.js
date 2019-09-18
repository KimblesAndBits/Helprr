module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User",
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            // token: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            // chatID: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // }
        });

    User.associate = function (models) {
        User.hasMany(models.Post, {
            foreignKey: {
                name: "user_name",
                allowNull: false
            }
        });
    };

    User.associate = function (models) {
        User.hasMany(models.Like, {
            foreignKey: {
                name: "uid",
                allowNull: false
            }
        });
    };

    return User;
};