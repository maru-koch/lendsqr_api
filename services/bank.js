/**
 * LENDERSQR ASSESSMENT PROJECT
 * AUTHOR: NWOKOCHA MARUCHE
 */

var AppError = require("../config/error");
const banks = require("./bankList")

class Bank{

    // a class that performs all bank related operations

    constructor(){
        this.seed = "373373373373";
        this.nubanLength = 10;
        this.serialNumLength = 9;
    }

    generateSerialNumber(){
    /**
     * generates 9 digits serial number that will be used to create the nuban number. 
     *  */ 
      
        let serialNumber = '';
        for (let i = 0; i < this.serialNumLength; i++){
            const digit = Math.floor(Math.random(1, 9) * this.serialNumLength);
            serialNumber += digit.toString()
        }

        return serialNumber
    }

generateCheckDigit(serialNumber, bankCode){

  if (serialNumber.length > this.serialNumLength) {
    throw new AppError(
      `Serial number should be at most ${this.serialNumLength}-digits long.`
    );
  }

  serialNumber = serialNumber.padStart(this.serialNumLength, "0");

  let cipher = bankCode + serialNumber;

  let sum = 0;

  // Step 1. Calculate A*3+B*7+C*3+D*3+E*7+F*3+G*3+H*7+I*3+J*3+K*7+L*3
  let cipherArray = cipher.split("")

  cipherArray.forEach((item, index) => {
    sum += item * this.seed[index];
  });

  // Step 2: Calculate Modulo 10 of your result i.e. the remainder after dividing by 10
  sum %= 10;

  // Step 3. Subtract your result from 10 to get the Check Digit
  let checkDigit = 10 - sum;


  // Step 4. If your result is 10, then use 0 as your check digit
  return checkDigit == 10 ? 0 : checkDigit;
};

  createAccountNumber(bankCode){

    /**
     * uses the generated serial number and bank code to create a nuban number
     */

    let bank = banks.find(bank => bank.code == bankCode);
    if (!bank) {
      return next(
        new AppError(
          "Invalid bank code"
        )
      );
    }

    try {
      let serialNumber = this.generateSerialNumber().padEnd(this.serialNumLength, 0);
    
      let checkDigit = this.generateCheckDigit(serialNumber, bankCode)

      let nuban = `${serialNumber}${checkDigit}`;
  
      let account = {
        serialNumber,
        nuban,
        bankCode,
        bank
      };
   
      return account;

    } catch (err) {
      console.log;
    }
  }

  

/**
 * Algorithm source: https://www.cbn.gov.ng/OUT/2011/CIRCULARS/BSPD/NUBAN%20PROPOSALS%20V%200%204-%2003%2009%202010.PDF
 * The approved NUBAN format ABC-DEFGHIJKL-M where
 * ABC is the 3-digit bank code assigned by the CBN
 * DEFGHIJKL is the NUBAN Account serial number
 * M is the NUBAN Check Digit, required for account number validation
 * @param {*} accountNumber
 * @param {*} bankCode
 */

isBankAccountValid(accountNumber, bankCode){
  if (!accountNumber || !accountNumber.length == this.nubanLength) {
    error = `NUBAN must be ${this.nubanLength} digits long`
    return false;
  }

  let serialNumber = accountNumber.substring(0, 9);
  let checkDigit = generateCheckDigit(serialNumber, bankCode);
  return checkDigit == accountNumber[9];
 };

 getAccountBank(accountNumber){
    /**
     * checks if the account Number of the fund receiver is valid
     * if true, it returns the account bank and bankCode else null
     * @param {*} accountNumber
     */
    console.log(banks)
     
    banks.forEach((item, index) => {
      console.log(item)
      let isValid = isBankAccountValid(accountNumber, item.code);
      if (isValid) {
        return item;
      }
    });
    return null;
  };

  

};
    
module.exports = Bank