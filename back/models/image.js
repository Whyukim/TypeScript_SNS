module.exports = (sequelize, DataTyps) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {
        type: DataTyps.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
