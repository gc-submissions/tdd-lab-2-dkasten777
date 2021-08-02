class Cart{
    constructor(){
        this.items = [];
    }
    add(product){
        this.items.push(product);
    }
    getItemCount(){
        return this.items.length;
    }
    getTotalBeforeTax(){
        // return sum of price of all Products in items array
        let sum = 0;
        for (let i = 0; i < this.items.length; i++){
            sum += this.items[i].price
        }
        return sum;
    }
    getTotalWithTax(){
       // returns the sum of the getPriceWithTax() method of all Products in the items array 
        let sum = 0;
        for (let i = 0; i < this.items.length; i++){
            sum += this.items[i].getPriceWithTax()
        }
        return sum;
    }
    getTax(){
        // this.getTotalWithTax - this.getTotalBeforeTax
        
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    }
}

module.exports = Cart;