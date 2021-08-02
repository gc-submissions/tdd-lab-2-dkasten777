function formatCurrency(amount){
    if(amount >= 0){
        return "$" + amount.toFixed(2)
    }else{
        return "-$" + amount.toFixed(2).substring(1)
    }
};


function getCoins(cents){
    quarter = Math.floor(cents / 25);
    cents = cents % 25;
    dime = Math.floor(cents / 10);
    cents = cents % 10;
    nickel = Math.floor(cents / 5);
    cents = cents % 5;
    penny = Math.floor(cents / 1);
    
    
    return {
        quarters: quarter,
        dimes: dime,
        nickels: nickel,
        pennies: penny
    }
}

module.exports = {formatCurrency, getCoins} 