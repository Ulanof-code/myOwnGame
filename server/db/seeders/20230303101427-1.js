/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Themes',
        },
        {
          title: 'Them1234es',
        },
        {
          title: 'Thesadcmes',
        },
        {
          title: 'Themrw2es',
        },
        {
          title: 'Themvewsdaces',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
