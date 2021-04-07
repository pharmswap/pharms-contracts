const LotteryNFT = artifacts.require("LotteryNFT.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(LotteryNFT);
  const lotteryNFT = await LotteryNFT.deployed();
};
