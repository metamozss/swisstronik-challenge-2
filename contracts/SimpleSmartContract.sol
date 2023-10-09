// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleSmartContract {
    // Private state variable to store a number
    uint256 private myNumber;

    // Constructor to initialize the state variable with a default value
    constructor(uint256 initialValue) {
        myNumber = initialValue;
    }

    // Function to set the state variable with a new value
    function setNumber(uint256 newValue) public {
        myNumber = newValue;
    }

    // Public function to return the current value of the state variable
    function getNumber() public view returns (uint256) {
        return myNumber;
    }
}
