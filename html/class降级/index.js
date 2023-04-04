//将es6的class降级为es5
class Product {
    static count = 0;

    constructor(name, unitPrice, number) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.number = number;
        Product.count++;
    }
    get totalPrice() {
        return this.number * this.unitPrice;
    }

    increase() {
        this.number++;
    }
}


// 使用自执行函数保证 模仿在未定义之前无法直接调用,因为函数会变量提升
let Product1 = (function () {
    function Product1(name, unitPrice, number) {
        // if (this.__proto__ !== Product1.prototype) { // 不建议直接使用__proto__
        if (Object.getPrototypeOf(this) !== Product1.prototype) {
            throw new TypeError("Class constructor Product1 cannot be invoked without 'new'")
        }
        this.name = name;
        this.unitPrice = unitPrice;
        this.number = number;
        // static count = 0;
        Product1.count = 0;
        // 通过打印可知,在Product中原型上也有totalPrice,因此需要在这里添加
        Object.defineProperty(this, 'totalPrice', {
            get() {
                return this.unitPrice * this.number;
            },
            enumerable: false,
        })
        // 模仿上面 使用属性可以访问到totalPrice 并且totalPrice是个方法计算所得
        Object.defineProperty(Product1.prototype, 'totalPrice', {
            get() {
                return this.unitPrice * this.number;
            },
            enumerable: false,
        })
        Object.defineProperty(Product1.prototype, 'increase', {
            enumerable: false,
            value: function () {
                if (Object.getPrototypeOf(this) === Product1.prototype.increase.prototype){
                    throw new TypeError('increase is not a constructor')
                }
                this.number++;
            }
        })
    }
    return Product1;
})();



