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
        {
          title: 'Them42634es',
        },
        {
          title: 'Theme2346tsfds',
        },
        {
          title: 'Them123r12vxzces',
        },
        {
          title: 'Themnhes',
        },
        {
          title: 'The11111mes',
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
