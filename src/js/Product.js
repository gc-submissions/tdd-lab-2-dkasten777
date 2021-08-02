class Product{
    constructor(name, price, taxable){
        this.name = name;
        this.price = price;
        this.taxable = taxable;  //boolean
        

        }
    getPriceWithTax(){
            if(this.taxable === true  ){            //technically, you can also just write if(this.taxable){}, as taxable will only be true or false in our code
                return this.price * 1.10;
            }else{
                return this.price;                 // ALT WAY (ternary) return this.taxable ? this.price * 1.10 : this.price
            }
        }
    }



    module.exports = Product;