"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Stella",
        lastName: "Nguyen",
        email: "admin@gmail.com",
        password: "123456",
        address: "VN",
        phoneNumber: "0123456789",
        gender: 0,
        positionId: "123456",
        roleId: "R1",
        avatar: "R1dfdđ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
