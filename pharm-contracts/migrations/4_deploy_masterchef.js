const MasterChefV2 = artifacts.require("MasterChefV2.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(MasterChefV2, '0x50dF85A6E3635B8A69b16978f31a888541f95D23', '0xf80Af18882314243B533cd852B2adcEB701DD1bf', '0x0F7f99E05091F837d449c190eC373f0a2978AE61', '1000000000000000000', 4737518);
  const masterChefV2 = await MasterChefV2.deployed();
};
