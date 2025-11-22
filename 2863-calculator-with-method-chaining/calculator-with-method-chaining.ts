class Calculator {
    private _number : number;
    
    constructor(value: number) {
        this._number = value
        return this;
    }
    
    add(value: number) {
        this._number += value;
        return this;
    }
    
    subtract(value: number) {
        this._number -= value;
        return this;
    }
    
    multiply(value: number) {
        this._number *= value;
        return this;
    }
    
    divide(value: number) {
        this._number /= value;
        return this;
    }
    
    power(value: number) {
        this._number = Math.pow(this._number, value)
        return this;
    }
    
    getResult(): number | string {
        if(this._number === Infinity) return "Division by zero is not allowed";
        return this._number;
    }
}

const test = new Calculator(20).divide(0).getResult();
console.log(test)