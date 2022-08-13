
class Bank{

    // a class that perform all bank related operations

    constructor(bankCode){
        this.bankCode = bankCode;
    }
    
    generateAccountNumber(){
        const nuban = 10;
        const accountNumber = '';
        for (let i = 0; i < nuban; i++){
            const digit = Math.random(1, 9);
            accountNumber += digit.toString()
        }
        return accountNumber
    }
}