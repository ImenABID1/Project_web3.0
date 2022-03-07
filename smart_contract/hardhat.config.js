
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-HGQGosYeWNXto9E2KUfMIIESBx_RVuE',
      accounts: ['3a2d8a1eb0184a75666fa5dd6a4dd8e45631cf509f1caef0b4190d22f28d2b50'],
    },
  },
};
