const Lottery = artifacts.require("Lottery.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Lottery);
  const lottery = await Lottery.deployed();
};
