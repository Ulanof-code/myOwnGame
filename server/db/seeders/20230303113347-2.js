'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          themeId: 1,
          cost: 200,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 1,
          cost: 400,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 1,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 1,
          cost: 800,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 1,
          cost: 1000,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 2,
          cost: 200,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 2,
          cost: 400,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 2,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 2,
          cost: 800,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 3,
          cost: 200,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 3,
          cost: 400,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 3,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 3,
          cost: 800,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 3,
          cost: 1000,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 200,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 400,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 800,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 4,
          cost: 1000,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 5,
          cost: 200,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 5,
          cost: 400,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 5,
          cost: 600,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 5,
          cost: 800,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
        {
          themeId: 5,
          cost: 1000,
          description: 'qwdqw',
          correctAnswer: 'qwdads',
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
