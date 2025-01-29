function calculateTax(income) {
    if(income >= 10000 && income <= 40000){
        return function calculate() {
            const ans = (income * 3)/100;
            console.log("Your tax is = " , ans);
        }
    }
    else if(income > 40000 && income <= 90000){
        return function calculate() {
            const ans = (income * 5)/100;
            console.log("Your tax is = " , ans);
        }
    }
    return function notax(income) {
        console.log("No tax is needed");
    }
}

const ans = calculateTax(65000)
ans();