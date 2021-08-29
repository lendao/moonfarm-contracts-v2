
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();

  deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);
   
  /* const MoonSwapToken = await ethers.getContractFactory('MoonSwapToken');
   const moonSwapToken = await MoonSwapToken.deploy();
   await moonSwapToken.deployed();
   console.log(`moonswap token deployed to : ${moonSwapToken.address}`);
   

   const MoonFarmToken = await ethers.getContractFactory('MoonFarmToken');
   const moonFarmToken = await MoonFarmToken.deploy();
   await moonFarmToken.deployed();
   console.log(`moonfarm token deployed to : ${moonFarmToken.address}`); */
/*
   const MockErc = await ethers.getContractFactory('MockErc');
   const mockErc = await MockErc.deploy("Rib Token", "RIB");
   await mockErc.deployed();
   await mockErc.mint(deployerAddress,ethers.utils.parseEther("1000"));
   console.log(`mockErc token deployed to : ${mockErc.address}`);
*/
   
   const startBlock = "420404"
  const moonfarmtoken = {
    address:"0xB497c3E9D27Ba6b1fea9F1b941d8C79E66cfC9d6"
  }
   const MoonMaster = await ethers.getContractFactory('MoonMaster');
   const moonMaster = await MoonMaster.deploy(moonfarmtoken.address,deployerAddress,deployerAddress,ethers.utils.parseEther("1"),startBlock);
   await moonMaster.deployed();
   console.log(`moonMaster token deployed to : ${moonMaster.address}`);


  const movrMswapLp = "0x66fFF9B5072CbdFb4bCe50563eC13B237d6A4972"; //mainnet
  const movrMoonLp = "0xf18433BbE972d8F1B2E908e3Eb6C0234C9b24E7b"; //mainnet 
  const wrappedMovr="0x98878B06940aE243284CA214f92Bb71a2b032B8A"; // mainnet
  const ribToken= "0xbD90A6125a84E5C512129D622a75CDDE176aDE5E"; // mainnet
  await moonMaster.add(500,movrMoonLp,0,false);
  await moonMaster.add(300,movrMswapLp,0,false);
  await moonMaster.add(200,wrappedMovr,400,false);
  await moonMaster.add(100,ribToken,400,false);


  
  }
deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
