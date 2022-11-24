module.exports = (sequelize, DataTyps) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTyps.STRING(30),
        allowNull: false, // 필수
        unique: true, // 고유
      },
      nickname: {
        type: DataTyps.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTyps.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };

  return User;
};
