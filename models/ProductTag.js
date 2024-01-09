const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
	{
		productTagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "product",
				key: "prpductId",
			},
		},
		tagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "tag",
				key: "tagId",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "productTag",
	}
);

module.exports = ProductTag;
