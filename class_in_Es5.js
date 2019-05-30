// es5里的类
        /*ex.No1*/
        function Person() {
            this.name = 'a';
            this.age = 20;
            this.run = function() {  /*类里面的实例方法*/
                console.log(this.name + '运动中');
            };
        };
        // 原型链上的属性会被多个实例共享，但是构造函数不会
        Person.prototype.sex = '女';
        Person.prototype.work = function() {
            console.log(this.name + '在工作');
        };

        Person.getInfo = function() {  /*类里面的静态方法*/
            console.log('我是静态方法');
        };

        var p = new Person();
        p.run();
        p.work();

        Person.getInfo(); /*调用静态方法*/


        // es5里面的继承
// /*方法一：对象冒充*/    又名构造函数
// 可以继承构造函数里的对象和方法，但是不能继承原型链上的属性和方法
        function Sub() {
            this.name = '对象冒充...or构造函数..';
            this.age = 20;
            this.run = function() {  
                console.log(this.name + '运动中');
            };
        };
        
        Sub.prototype.sex = '女';
        Sub.prototype.work = function() {
            console.log(this.name + '在工作');
        };

        Sub.getInfo = function() {  
            console.log('我是静态方法');
        };

        // 继承Sub
        function Web() {
            Sub.call(this);  /*对象冒充实现继承*/
        }

        var w = new Web();
        w.run(); // 可以继承构造函数里的对象和方法
        // w.work(); // 但是不能继承原型链上的属性和方法

/*方法二：原型链*/
// 可以继承构造函数里面的属性和方法，也可以继承原型链上的属性和方法
        function Sub2() {
            this.name = '原型链...';
            this.age = 20;
            this.run = function() {  
                console.log(this.name + '运动中');
            };
        };
        
        Sub2.prototype.sex = '女';
        Sub2.prototype.work = function() {
            console.log(this.name + '在工作');
        };

        Sub2.getInfo = function() {  
            console.log('我是静态方法2');
        };
        // 继承
        function Web2() {
        };
        Web2.prototype = new Sub2();

        var w2 = new Web2();
        w2.run();
        w2.work();
        // 原型链可以继承构造函数里面的属性和方法，也可以继承原型链上的属性和方法
        // 但是实例化子类的时候，没法给父类传参
        function Sub3(name, age) {
            this.name = name;
            this.age = age;
            this.run = function() {  
                console.log(this.name + '运动中【】');
            };
        };
        
        Sub3.prototype.sex = '女';
        Sub3.prototype.work = function() {
            console.log(this.name + '在工作【】');
        };

        Sub3.getInfo = function() {  
            console.log('我是静态方法【】');
        };

        function Web3(name, age) {

        }
        Web3.prototype = new Sub3();
        var w3 = new Web3('原型链继承问题',22);
        w3.run(); // undefined在运动   ---------------------》实例化子类的时候，没法给父类传参
        
/*方法三：原型链+构造函数  组合模式*/

        function Sub4(name, age) {
            this.name = name;
            this.age = age;
            this.run = function() {  
                console.log(this.name + '运动中');
            };
        };
        
        Sub4.prototype.sex = '女';
        Sub4.prototype.work = function() {
            console.log(this.name + '在工作');
        };

        Sub4.getInfo = function() {  
            console.log('我是静态方法');
        };

        function Web4(name, age) {
            Sub4.call(this, name, age);
        };
        Web4.prototype = new Sub4();
        var w4 = new Web4('组合继承',22);
        w4.run();
        w4.work();