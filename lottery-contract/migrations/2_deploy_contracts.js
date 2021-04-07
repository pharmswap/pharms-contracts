const Lottery = artifacts.require("Lottery");
const MockBEP20 = artifacts.require("MockBEP20");
const LotteryNFT = artifacts.require("LotteryNFT");
const LotteryUpgradeProxy = artifacts.require("LotteryUpgradeProxy");

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));

module.exports = async function(deployer) {
    await deployer.deploy(LotteryNFT);
    //const pharm = await MockBEP20.at('0x78855b0C2E34A622e7c20E68f2c658778d9888c7');
    await deployer.deploy(Lottery);

    proxyAdmin= '0x41A002BFa52Ad22A6a1740Bd6869Fd0f80b2a828';
    lotteryOwner= '0xf80Af18882314243B533cd852B2adcEB701DD1bf'
    lotteryAdmin= '0xf80Af18882314243B533cd852B2adcEB701DD1bf';

    const abiEncodeData = web3.eth.abi.encodeFunctionCall({
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "_pharm",
            "type": "address"
          },
          {
            "internalType": "contract LotteryNFT",
            "name": "_lottery",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_minPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "_maxNumber",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_adminAddress",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, ['0x50dF85A6E3635B8A69b16978f31a888541f95D23', LotteryNFT.address, '10000000000000000000', 14, lotteryOwner, lotteryAdmin]);

    await deployer.deploy(LotteryUpgradeProxy, Lottery.address, proxyAdmin, abiEncodeData);

    const lotteryNft = await LotteryNFT.deployed();
    await lotteryNft.transferOwnership(LotteryUpgradeProxy.address);
};



