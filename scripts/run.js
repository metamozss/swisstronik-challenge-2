require("dotenv").config();
const ethers = require("ethers");

async function getContractValue(providerNetwork, address, slot, block) {
  let provider;

  if (providerNetwork === "mumbai") {
    provider = new ethers.JsonRpcProvider(process.env.MUMBAI_NODE_URL);
  } else if (providerNetwork === "swisstronik") {
    provider = new ethers.JsonRpcProvider(process.env.SWISSTRONIK_NODE_URL);
  } else {
    throw new Error("Invalid provider network");
  }

  const storage = await provider.send("eth_getStorageAt", [
    address,
    slot,
    block,
  ]);
  return storage;
}

async function getValues() {
  try {
    let mumbai = await getContractValue(
      "mumbai",
      "0xe49a4d5769ecdc482726cf6853c0fb99d7367e1d",
      "0",
      "latest"
    );
    console.log("Value deployed to Mumbai:", ethers.toUtf8String(mumbai));

    let swisstronik = getContractValue(
      "swisstronik",
      "0x09002189e669F6D1018CB8a5C1DbADFf31d123C9",
      "0",
      "latest"
    );
    console.log(
      "Value deployed to Swisstronik ",
      ethers.toUtf8String(swisstronik)
    );
  } catch (error) {
    console.log(error);
  }
}

getValues();
