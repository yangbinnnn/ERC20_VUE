pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MyToken.sol";

contract TestMyToken {

  function testInitialBalanceUsingDeployedContract() public {
    MyToken token = MyToken(DeployedAddresses.MyToken());

    uint expected = 10000000000000000000000;

    Assert.equal(token.balanceOf(tx.origin), expected, "Owner should have 10000000000000000000000 MyToken initially");
  }

  function testInitialBalanceWithNewMyToken() public {
    MyToken token = new MyToken();

    uint expected = 10000000000000000000000;

    Assert.equal(token.totalSupply(), expected, "Owner should have 10000000000000000000000 MyToken initially");
  }

}
