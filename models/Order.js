'use strict';

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("Orders", {
    products: {
      type: DataTypes.TEXT,
      defaultValue: [],
      get: function () {
        return JSON.parse(this.getDataValue('products'));
      },
      set: function (val) {
        return this.setDataValue('products', JSON.stringify(val));
      }
    },
    createdDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('NOW')
    }
  });
  return Orders;
};