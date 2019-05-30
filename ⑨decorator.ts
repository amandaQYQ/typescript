

// 1.装饰器的定义
// 2.类装饰器
    // 2.1普通装饰器
    // 2.2装饰器工厂
    // 2.3类装饰器重载构造函数
// 3.属性装饰器
// 4.方法装饰器
// 5.方法参数装饰器
// 6.类装饰器，属性装饰器，方法装饰器，参数装饰器的执行顺序


// -----------------------------------------------------------------------

// 1.装饰器的定义

/*
    装饰器：装饰器是一种特殊类似的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为

    通俗的讲：装饰器是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能

    常见的装饰器： 类装饰器，属性装饰器，方法装饰器，参数装饰器

    装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可以传参）

    装饰器是过去几年中js最大的成就之一，已是es7的标准特性之一
*/

// ----------------------------------------------------------------
// 2.类装饰器
    // 2.1装饰器(普通装饰器：无法传参)
    /*
        // 装饰器
        function logClass(param:any) {
            console.log('装饰器：'+param);
            // param就是当前类

            param.prototype.apiUrl = 'xxxx'; // 动态扩展的属性
            param.prototype.run = function() {
                console.log('run');
            }
        }

        // 调用装饰器:在不修改的类的情况下，扩展类的功能
        @logClass
        class HttpClient{
            constructor() {

            }
            getData() {

            }
        }

        // var http = new HttpClient();
        var http:any = new HttpClient();
        console.log(http.apiUrl);
        http.run();

    */


    // 2.2装饰器工厂
    /*
        function logClass(param:string) {

            return function(target:any) {
                console.log(param);  // 传参

                console.log(target);  // 当前类

                target.prototype.api = param;
            }
        }

        @logClass('http://www.baidu.com')
        class HttpClients{
            constructor() {

            }
            getData() {

            }
        }

        var http:any = new HttpClients();
        console.log(http.api)
    */

    // 2.3类装饰器重载构造函数
        // 类装饰器不仅能扩展和修改 以前类的属性、方法；它还可以修改当前类的构造函数

        /*
            function logClass(target:any) {
                console.log(target);

                // 在装饰器里修改类的构造函数
                return class extends target {
                    apiUrl:any = '我是修改后的数据';

                    getData() {
                        console.log(this.apiUrl, '新的getData')
                    }
                }
            }   
            @logClass
            class HttpClients{
                apiUrl:string  | undefined;
                constructor() {
                    this.apiUrl = '我是构造函数里的apiUrl'
                }
                getData() {
                    console.log(this.apiUrl);
                }
            }

            var http = new HttpClients();
            http.getData();

        */
// -------------------------------------------------------------
// 3.属性装饰器
    // 属性装饰器表达式 会在运行时，被当做函数使用，传入两个参数：
        // 1.对于静态成员来说，是类的构造函数，对于实例成员来说是类的原型对象
        // 2.成员的名字

    /*
        // 类装饰器
        function logClass(param:string) {

            return function(target:any) {
                // console.log(param);  // 传参

                // console.log(target);  // 当前类

            }
        }

        // 属性装饰器
        function logProperty(param:any) {
            return function(target:any, attr:any) {
                console.log(target, attr);  //对于静态成员来说，target是类的构造函数，对于实例成员来说target是类的原型对象

                // target.attr = param; // 就可以修改该属性的值
                target[attr] = param;
            }
        }

        @logClass('xxxx')
        class HttpClients{
            @logProperty('http://www.baidu.com') // 这个装饰器，装饰当前的url这个属性
            public url:any | undefined;
            constructor() {

            }
            getData() {
                console.log(this.url);
            }
        }

        var http = new HttpClients();
        http.getData();
    */

// ------------------------------------------------------------------
// 4.方法装饰器
        // 它会被应用到方法的，属性描述符上，可以用来监视，修改或者替换方法定义。

        // 方法装饰会在运行时传入下列3个参数：
            // 1.对于静态成员来说：是类的构造函数，对于实例成员来说：是类的原型对象。
            // 2.成员的名字。
            // 3.成员的属性描述符。

            /*
                // 装饰器
                function logMethod(param:any) {
                    
                    return function(target:any, attr:any, desc:any) {
                        console.log(target); // 对于静态成员来说：是类的构造函数，对于实例成员来说：是类的原型对象。
                        console.log(attr); // 成员的名字:getData
                        console.log(desc); // 对于getData的描述（数据属性：configurable，enumerable，writable， value）

                        console.log(desc.value); // 指向getData函数本身

                        // 给类添加方法属性
                        target.url = '给类添加属性';
                        target.run = function() {
                            console.log('给类添加方法');
                        }

                        // 修改装饰器的方法：getData
                        var oMethod = desc.value;
                        desc.value = function(...args:any[]) {
                            args = args.map( value => {
                                return String(value)
                            })
                            console.log(args);
                            oMethod.apply(this, args); // 如果不加这句话，就不能打印“原本的getData方法这句话”
                                // 不加这句话，表示把原本的getData替换了
                                // 加了这句话,表示只是在getData基础上修改一下
                        }
                    }
                }
                
                class HttpClients{
                    constructor() {
        
                    }
                    @logMethod('?')
                    getData(...args:any[]) {
                        console.log(args); // 发现参数的类型都变成了string
                        console.log('原本的getData方法')
                    }
                }
                // 装饰器 给类添加方法属性的调用
                var http:any = new HttpClients();
                console.log(http.url);
                http.run();

                // 方法装饰器修改原来的方法
                http.getData(121, 'ad', true);

            */

// ------------------------------------------------------------------
// 5.方法参数装饰器
    // 方法参数装饰器表达式 会在运行时，被当做函数使用，可以使用参数装饰器为类的原型添加一些元素数据，传入3个参数：
        // 1.对于静态成员来说：是类的构造函数，对于实例成员来说：是类的原型对象。
        // 2.方法的名字。
        // 3.参数在函数列表中的索引。

        /*
            // 装饰器
            function logParams(params:any) {
                return function(target:any, name:any, index:any) {
                    console.log(params);

                    console.log(target);

                    console.log(name);

                    console.log(index);

                    target.api = '给类添加的api属性'
                }
            }
            class HttpClients{
                constructor() {

                }
                
                getData(@logParams('uuid') a:any) {
                    console.log(a, '这是a')
                    console.log('原本的getData方法')
                }
            }

            var http:any = new HttpClients();

            http.getData(123455);
            console.log(http.api);

        */

// ----------------------------------------------------------------------
// 6.类装饰器，属性装饰器，方法装饰器，参数装饰器的执行顺序
// /*
    function logClass1(params:any) {
        return function(target:any){
            console.log('类装饰器1')
        } 
    }   

    function logClass2(params:any) {
        return function(target:any){
            console.log('类装饰器2')
        } 
    }

    function logAttr(params?:any) {
        return function(target:any, attrName:any){
            console.log('属性装饰器')
        } 
    }

    function logMethod(params?:any) {
        return function(target:any, attrName:any, desc:any){
            console.log('方法装饰器')
        } 
    }
    
    function logParams1(params?:any) {
        return function(target:any, attrName:any, desc:any){
            console.log('方法参数装饰器1')
        } 
    }

    function logParams2(params?:any) {
        return function(target:any, attrName:any, desc:any){
            console.log('方法参数装饰器2')
        } 
    }

    @logClass1('http://www.baidu.com')
    @logClass2('xxxx')
    class HttpClients{
        @logAttr()
        apiUrl:string  | undefined;
        constructor() {

        }

        @logMethod()
        getData() {
            return true;
        }

        setData(@logParams1() attr1:any, @logParams2() attr2:any) {
            
        }
    }

    var http = new HttpClients();
    http.getData();                

// */