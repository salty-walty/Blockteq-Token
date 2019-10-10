const BlockteqToken = artifacts.require("./BlockteqToken.sol");

module.exports = function(deployer) {
  const _name = 'Blockteq Token';
  const _symbol = 'TEQ';
  const _decimals = 18;
  
  deployer.deploy(BlockteqToken, _name, _symbol, _decimals);
};
