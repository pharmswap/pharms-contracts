const PharmToken = artifacts.require("PharmToken.sol");
// const Token1 = artifacts.require("Token1.sol");
// const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(PharmToken, addresses[0]);
  const pharmtoken = await PharmToken.deployed();
  console.log("ho gya deploy: ", pharmtoken.address);
  // await deployer.deploy(Token1);
  // await deployer.deploy(Token2);

  // const token1 = await Token1.deployed();
  // const token2 = await Token2.deployed();
  
  // let token1address = token1.address;
  // let token2address = token2.address;

  // await pharmtoken.createPair(token1address, token2address);
};
