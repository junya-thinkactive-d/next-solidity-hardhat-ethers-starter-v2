import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";

const config: HardhatUserConfig = {
  solidity:{
    version: '0.8.17',
    // settings:{
    //   optimizer: {
    //     enabled: true,
    //     runs: 200,
    //   },
  },
  typechain: {
    outDir: "../client/src/libs/hardhat/types" && "./types", 
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: ["externalArtifacts/*.json"],
    dontOverrideCompile: false,
  },
  paths: {
    artifacts: '../client/src/libs/hardhat/artifacts',
  },
};

export default config;
