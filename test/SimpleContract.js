const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleSmartContract", function () {
  let simpleSmartContract;

  beforeEach(async function () {
    // Deploy the contract before each test
    const SimpleSmartContract = await ethers.getContractFactory("SimpleSmartContract");
    simpleSmartContract = await SimpleSmartContract.deploy(12);
  });

  it("Should return the initial value", async function () {
    const initialValue = await simpleSmartContract.getNumber();
    expect(initialValue).to.equal(12);
  });

  it("Should allow setting a new value", async function () {
    const newValue = 25;
    await simpleSmartContract.setNumber(newValue);
    const updatedValue = await simpleSmartContract.getNumber();
    expect(updatedValue).to.equal(newValue);
  });
});
