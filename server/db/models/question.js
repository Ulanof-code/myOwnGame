const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Themes, {
        foreignKey: 'themeId',
      });
    }
  }
  Question.init(
    {
      themeId: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      correctAnswer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
