
class Bank{

    // a class that perform all bank related operations

    constructor(bankCode){
        this.bankCode = bankCode;
    }

    generateAccountNumber(){
        const nuban = 10;
        let accountNumber = '';
        for (let i = 0; i < nuban; i++){
            const digit = Math.floor(Math.random(1, 9) * nuban);
            accountNumber += digit.toString()
        }
        return accountNumber
    }
}

module.exports = Bank