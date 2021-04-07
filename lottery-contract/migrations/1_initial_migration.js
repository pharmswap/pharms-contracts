const MockBEP20 = artifacts.require("MockBEP20");

module.exports = function(deployer) {
  deployer.deploy(MockBEP20, 'pharm', 'PS', '100000000000000000000000');
};
