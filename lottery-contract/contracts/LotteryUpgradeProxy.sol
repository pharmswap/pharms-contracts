// SPDX-License-Identifier: MIT

pragma solidity <=0.8.2;

import "@openzeppelin/contracts/proxy/TransparentUpgradeableProxy.sol";

contract LotteryUpgradeProxy is TransparentUpgradeableProxy {

    constructor(address logic, address admin, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) {

    }

}