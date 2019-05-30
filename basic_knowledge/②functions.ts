
// 1.函数定义方法
    // 1.1 es5中函数定义方法
    // 1.2 ts中函数定义方法
// 2.ts中定义方法传参
// 3.ts可选参数 “？”
// 4.ts默认参数 “=”
// 5.ts剩余参数: “...”
// 6.ts函数重载


// -----------------------------------------------------------------------
// 1.函数定义方法
    /** 
        // 1.1 es5中
        // ①函数声明法
            function run() {
                return 'run'
            };
        // ②匿名函数
            var run2 = function() {
                return 'run2'
            };

        // 1.2 ts中定义函数的方法
        // ①函数声明法
            function run1():string {
                return 'run1'
            };
        // ②匿名函数
            var run2 = function():string {
                return 'run2'
            };  
    */

    
// 2.ts中定义方法传参
    /*
        function getInfo(name:string,age:number):string {
            return `姓名：${name}---年纪：${age}`
        };
        console.log(getInfo('张三', 12));
        

        var getInfo2 = function(name:string, sex: string):string {
            return `${name}--${sex}`
        };
        console.log(getInfo2('李四', '女'));
    */

// 3.ts可选参数 “？”
    /*
        // es5里实参和形参可以不一样，但是ts中必须一样，除非是配置可选参数
        function arg(name:string, age?:number):string {
            if(age) {
                return `姓名：${name}---年纪：${age}`
            }else {
                return `姓名：${name}---年纪：未知`
            }
        };
        console.log(arg('张三', 18));
        console.log(arg('李四'));
        // ****注意****
        // 可选参数必须放到参数的最后面
    */
// 4.ts默认参数 “=”
    /*
        // 在es5中没法设置默认参数，在es6和ts中可以
        function deful(name:string, age:number=20):string {
            if(age) {
                return `姓名：${name}---年纪：${age}`
            }else {
                return `姓名：${name}---年纪：未知`
            }
        };

        console.log(deful('王五', 18));
        console.log(deful('cc'));
    */

// 5.ts剩余参数: “...”
    /*
        function sum(a:number, b:number, c:number, d:number):number {
            return a + b + c + d
        };
        console.log(sum(1,2,3,4));

        function rest(...result:number[]):number {
            return result.reduce(function(prev, next) {
                return prev + next
            })
        };
        console.log(rest(1,2));


        function rest2(a:number, ...result:number[]):number {
            var sum = a;
            for(var i = 0; i < result.length; i++) {
                sum += result[i];
            }
            return sum;
        }
        console.log('rest2结果：' + rest2(1,2,3,4,5,6,7,8,9,10));
    */

// 6.ts函数重载
    /*
        // java中方法的重载：重载指的是两个或者两个以上的同名函数，但他们的参数不一样，这时会出现函数重载的情况
        // ts中，通过为一个函数提供多个函数类型定义来实现多种功能的目的

        // ts为了兼容es5 和es6，和java有区别

        // es5中 出现同名方法。后面的会覆盖前面的

        // ts中
        function cs(name:string):string;
        function cs(age:number):number;

        function cs(str:any):number|string {
            if(typeof str == 'string') {
                return '姓名:'+ str;
            }else {
                return str;
            }
        };
        console.log(cs('a'));
        console.log(cs(11));


        function cs1(name:string):string;
        function cs1(name:string, age:number):string;

        function cs1(name:any, age?:any):any {
            if(age) {
                return `姓名：${name}---年纪：${age}`
            }else {
                return '姓名:'+ name;
            }
        };

        console.log(cs1('aaaa'));
    */

