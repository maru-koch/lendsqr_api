
class Bank{

    // a class that performs all bank related operations

    constructor(){
        this.bankCode = 104;
    }
    generateAccountNumber(){

        // generates new 10 digits account number. 
        // returns bank code and account number

        const nuban = 10;
        let accountNumber = '';
        for (let i = 0; i < nuban; i++){
            const digit = Math.floor(Math.random(1, 9) * nuban);
            accountNumber += digit.toString()
        }
        return {accountNumber, bankCode: this.bankCode}
    }
}

module.exports = Bank