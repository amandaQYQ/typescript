"use strict";
// 接口：在面向对象的编程中，接口是一种规范的定义。它定义了行为和动作的规范，在程序设计里，接口起到了一种限制和规范的作用。
// 接口定义了某一批类所需要遵守的规范
// 接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节。
// 1.属性类接口
// 2.函数类接口
// 3.可索引接口
// 4.类类型接口
// 5.接口扩展
// 1.属性类接口：（也就是对json的约束）
/*
    // ex.No1
    function printLabel(labelInfo:{"label":string}):void {
    // function printLabel(labelInfo:{label:string}):void {
        // label加不加引号都可以。表示传入的参数，必须具有label这个属性
        console.log('printLabel');
    }
    printLabel({label: 'str'});


    // ex.No2:(对批量方法进行约束)
    interface rule {
        firstName:string,
        secondName:string
    }
    function prints(label:rule):string {
        var str = label.firstName + label.secondName;
        console.log(str);
        return str;
    }
    // ①
    prints({
        firstName: 'James',
        secondName: 'Jonh'
    })

    // ②

    // prints({
    //     age: 13,
    //     firstName: 'James',
    //     secondName: 'Jonh'
    // })
    //--------------------报错,这样写，要求对象里面只有firstName和secondName 但是！

    // ③
    var obj = {
        age: 13,
        firstName: 'James',
        secondName: 'Jonh'
    };

    prints(obj);


    // ④批量
    function prinInfo(a:rule) {
        console.log('批量定义')
    }
    prinInfo(obj);
*/
// 1.1可选属性
/*
    // ex.No1
    interface FullName{
        name:string,
        age?:number
    }

    function information(param: FullName) {
        console.log(param);
    }
    var param = {
        name: '张三',
        age: 34
    }
    var param2 = {
        name: '李四'
    }
    information(param);
    information(param2);

    // ex.No2

    interface Config {
        type: string,
        url:string,
        data?:string,
        dataType:string
    }

    function ajax(config:Config) {
        var xhr=new XMLHttpRequest();
        xhr.open(config.type, config.url, true);
        xhr.send(config.data);

        xhr.onreadystatechange=function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log('成功');
                if(config.dataType == 'json') {
                    JSON.parse(xhr.responseText);
                };
                console.log(xhr.responseText);
            }
        }

    }

    ajax({
        type: 'get',
        url: 'http://localhost:3000/123',
        dataType: 'json',
        data: 'sdfdf'
})
*/
// 2.函数类接口:对方法传入的参数，以及返回值进行约束,并且可以批量约束
/**
    // 加密的函数类型接口
    interface encrypt {
        (key:string,value:string):string;
    }

    var md5:encrypt = function(key:string, value:string):string {
        // 模拟操作
        return key+':'+value;
    }
    console.log(md5('name', 'zhangsan'));
 */
//  3.可索引接口：数组，对象的约束（不常用）
/*
    var arr:number[] = [1,2,3,4,5];
    var arr1:Array<string>=['111','222','333'];

    // 3.1对数组的约束
    interface UserArr{
        [index:number]:string
    };
    var arr2:UserArr=['aaa', 'bbb'];
    console.log(arr2[0]);

    // 3.2对对象的约束

    interface UserObj{
        [index:string]:string
    }
    var obj:UserObj ={name:'20',age:'21'};
    
*/
// 4.类类型接口:对类的约束，和抽象类相似，用implements继承接口
/*
    interface Animals{
        name:string;
        eat(str:string):void;
    }

    class Dog1 implements Animals {
        name:string;
        constructor(name:string){
            this.name= name;
        }
        eat() {
            console.log(this.name)
        }
    }
    var dd = new Dog1('小黑');
    dd.eat();


    class Catt implements Animals{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(food:string) {
            console.log(this.name + food);
        }
    }
    var cc = new Catt('小花');
    cc.eat('小猫');
*/
// 5.接口扩展: 也就是接口可以继承接口
/*
    // ex.No1
    interface Foods{
        eat():void;
    }

    interface Per extends Foods {
        work():void;
    }

    class We implements Per {
        public name : string;
        constructor(name:string) {
            this.name = name;
        }
        eat() {
            console.log('吃');
        }
        work() {
            console.log('工作')
        }
    }
    var we1 = new We('a');
    we1.eat();
    we1.work();


    // ex.No2
    class Programmer {
        public name:string;
        constructor(name:string) {
            this.name = name;
        }
        coding() {
            console.log(this.name+'写代码');
        }
    }

    class Webber extends Programmer implements Per {
        constructor(name:string){
            super(name);
        }
        eat() {
            console.log(this.name+'吃');
        }
        work() {
            console.log(this.name+'工作')
        }
           
    }
    var webber1 = new Webber('小李');
    webber1.eat();
    webber1.work();
    webber1.coding();

*/ 
