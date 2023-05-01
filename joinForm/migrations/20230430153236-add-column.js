"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "boards", // name of Target model
            "img", // name of the key we're adding
            {
                type: Sequelize.STRING,
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            "boards", // name of the Target model
            "img" // key we want to remove
        );
    },
};
