## Truffle Box - ERC20 Token

## Develop

- `npm install`
- `truffle test`

## Tools
- `dotenv` to keep privateKey on local
- `truffle-privatekey-provider` to use privateKey deploy
- `contracts/lib` is copy from `openzeppelin-solidity`
- `solidity_flattener` to consolidates a solidity main file and all imports into one file

## Kovan or Living networks
- `cp .env.example .env` and `vim .env`
- `truffle migrate --network kovan` deploy to kovan network


## Code verify on etherscan
> Test on MacOS

- `brew tap ethereum/ethereum && brew install solidity`
- `pip install solidity-flattener` [solidity-flattener](https://github.com/BlockCatIO/solidity-flattener)
- `cd contracts && solidity_flattener --output MyTokenFlat.sol MyToken.sol`
- Use `MyTokenFlat.sol` to verify code on etherscan
