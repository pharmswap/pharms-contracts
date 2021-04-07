const Timelock = artifacts.require("Timelock.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Timelock, '0x41A002BFa52Ad22A6a1740Bd6869Fd0f80b2a828',86400);
  const timelock = await Timelock.deployed();
};
