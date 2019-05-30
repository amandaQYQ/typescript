// 1.ts中类的定义
// 2.ts中实现继承 extends+super
// 3.ts类里面的修饰符；public、private、proteced
// 4.静态方法
// 5.多态
// 6.抽象方法和抽象类

// -----------------------------------------------------

// 1.ts中类的定义
/*
    // ex.No1
    class Person {
        name:string; // 定义属性 省略了public关键词
        constructor(n:string) { // 构造函数 实例化类的时候触发的方法；
            this.name = n;
        };
        run():void {
            console.log(this.name);
        };
    };

    var p = new Person('张三');
    p.run();

    // ex.No2
    class Person {
        name:string; // 定义属性 省略了public关键词
        constructor(n:string) { // 构造函数 实例化类的时候触发的方法；
            this.name = n;
        };
        getName():string {
            return this.name;
        };
        setName(name:string):void {
            this.name = name;
        }
    };

    var p = new Person('张三');
    console.log(p.getName());
    p.setName('李四');
    console.log(p.getName());

*/


// 2.ts中实现继承 extends+super
/*
    // example.No1---------------
    class Person {
        name: String;
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            return `${this.name}在运动`
        }
    }

    var p = new Person('王五');
    console.log(p.run());

    class Web extends Person {
        constructor(name:string) {
            super(name);
        }
    }
    var w = new Web('钱六');
    console.log(w.run());

    // example.No2---------------
    // ts的继承，父类的方法和子类的方法一致
    class Person {
        name: String;
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            return `${this.name}在运动`
        }
    }

    var p = new Person('王五');
    console.log(p.run());

    class Web extends Person {
        constructor(name:string) {
            super(name);
        }
        work() {
            console.log(this.name+'在工作')
        }
        run():string {
            return `${this.name}在运动---子类`
        }
    }
    var w = new Web('孙七');
    console.log(w.run());
    w.work();
*/


// 3.类里面的修饰符，ts里提供了三种修饰符
/*
    // public： 公有：类里面，子类，类外面都能访问
    // protected：保护类型： 在类里面，子类可以访问 
    // private：私有： 在类里面可以访问
    // 属性如果不加修饰符，默认公有

    // public 在类里面和子类里访问---------------

    class Person {
        public name: String; //公有属性 
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            return `${this.name}在运动`
        }
    }

    var p = new Person('王五');
    console.log(p.run());

    class Web extends Person {
        constructor(name:string) {
            super(name);
        }
        work() {
            console.log(this.name+'在工作')
        }
        run():string {
            return `${this.name}在运动---子类`
        }
    }
    var w = new Web('孙七');
    console.log(w.run());
    w.work();

    // public在类外面访问-----------------
    class Person {
        public name: String; // 公有属性 
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            console.log(`${this.name}在运动`)
            return `${this.name}在运动`
        }
    }
    var p = new Person('哈哈哈');
    console.log(p.name);

    // protected-------------------------
    class Person {
        protected name: String; //公有属性 
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            return `${this.name}在运动`
        }
    }

    class Web extends Person {
        constructor(name:string) {
            super(name);
        }
        work() {
            console.log(this.name+'在工作')
        }
    }
    var w = new Web('孙8');
    console.log(w.run());
    w.work();
    // console.log(w.name);  // ts提示错误
     
    // private----------------------------
    class Person {
        private name: String; //公有属性 
        constructor(name:string) {
            this.name = name;
        };
        run():string {
            return `${this.name}在运动`
        }
    }

    class Web extends Person {
        constructor(name:string) {
            super(name);
        }
        work() {
            // console.log(this.name+'在工作')  // ts警告
        }
    }
    var w = new Web('孙8');
    console.log(w.run());
    w.work();
    // console.log(w.name);  // ts提示错误
*/

// 4.ts静态属性 静态方法
/*
    // es5静态属性 静态方法

    function Person() {
        this.run1 = function() {
            console.log('实例方法')
        }
    }
    Person.run2 = function() {
        console.log('静态方法')
    }
    // 实例方法的调用
    var p = new Person();
    p.run1();
    // 静态方法的调用
    Person.run2();

    // ts静态属性 静态方法
    class Person {
        public name:string;
        public age:number=20;
        constructor(name:string) {
            this.name = name;
        }
        run() {
            console.log(this.name + '在跑步-----实例方法');
        }
        work() {
            console.log(this.name + '在工作-----实例方法');

        }

        static print() {
            console.log('静态方法+'+Person.sex);
            // console.log('静态方法'+this.age); // 静态方法里，没法直接调用类里面的属性

        }
        static sex="静态属性"
    }

    Person.print();
    console.log(Person.sex); // 类外部调用静态属性


*/

// 5.多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
/*
    // 多态也是继承的一种表现，多态属于继承

    class Animal {
        name: string;
        constructor(name:string) {
            this.name = name;
        }
        est() {
            console.log('吃的方法');
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }
        eat() {
            var str = this.name + '吃骨头';
            console.log(str);
            return str;
        }
    }

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        eat() {
            var str = this.name + '吃鱼';
            console.log(str);
            return str;
        }
    }
*/

// 6.抽象方法 和 抽象类
// /*
    // ts中的抽象类：他是提供其他类继承的基类，不能让直接被实例化。
    // 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法 不包含具体实现 并且 必须在派生类中实现。
    // abstract抽象方法只能放在抽象类里面

    // 抽象类和抽象方法用来定义标准
    // for example: Amimal这个类。要求他的子类必须包含eat方法

    abstract class Animal {
        public name: string
        constructor(name:string) {
            this.name = name;
        }
        abstract eat():any;
    }

    // var a = new Animal() // 不能直接实例化

    class Dog extends Animal {
        // 抽象类的子类，必须实现抽象类里面的方法
        constructor(name:any) {
            super(name)
        }
        eat() {
            console.log(this.name+'吃骨头')
        }
    }
    var d = new Dog('小狗');
    d.eat();
// */
