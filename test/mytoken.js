var MyToken = artifacts.require('./MyToken.sol')

contract('MyToken', function (accounts) {
  it('should put 10000 * (10 ** 18) MyToken in the first account', function () {
    return MyToken.deployed().then(function (instance) {
      return instance.balanceOf.call(accounts[0])
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000 * (10 ** 18), "10000 * (10 ** 18) wasn't in the first account")
    })
  })

  it('should send coin correctly', function () {
    var token

    //    Get initial balances of first and second account.
    var accountOne = accounts[0]
    var accountTwo = accounts[1]

    var accountOneStartingBalance
    var accountTwoStartingBalance
    var accountOneEndingBalance
    var accountTwoEndingBalance

    var amount = 10

    return MyToken.deployed().then(function (instance) {
      token = instance
      return token.balanceOf.call(accountOne)
    }).then(function (balance) {
      accountOneStartingBalance = balance.toNumber()
      return token.balanceOf.call(accountTwo)
    }).then(function (balance) {
      accountTwoStartingBalance = balance.toNumber()
      return token.transfer(accountTwo, amount, { from: accountOne })
    }).then(function () {
      return token.balanceOf.call(accountOne)
    }).then(function (balance) {
      accountOneEndingBalance = balance.toNumber()
      return token.balanceOf.call(accountTwo)
    }).then(function (balance) {
      accountTwoEndingBalance = balance.toNumber()

      assert.equal(
        accountOneEndingBalance,
        accountOneStartingBalance - amount,
        "Amount wasn't correctly taken from the sender"
      )
      assert.equal(
        accountTwoEndingBalance,
        accountTwoStartingBalance + amount,
        "Amount wasn't correctly sent to the receiver"
      )
    })
  })
})
