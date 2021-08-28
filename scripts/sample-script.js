
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();

  deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);
   const MoonSwapToken = await ethers.getContractFactory('MoonSwapToken');
   const moonSwapToken = await MoonSwapToken.deploy();
   await moonSwapToken.deployed();
   console.log(`moonswap token deployed to : ${moonSwapToken.address}`);

   }
deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
