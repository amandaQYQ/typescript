// 1.泛型的定义+泛型的函数
// 2.泛型类
// 3.泛型接口
// 4.泛型类

// 1.泛型的定义+泛型函数
/**
    // 泛型：项目的开发过程中，我们要考虑到组件代码的重用性，一个组件可以支持多种类型数据，泛型就是解决 类、接口、方法的复用性、以及对不特定类型的支持。

    // ex.No1
    // 只能返回string类型
    function getData(value:string):string {
        return value;
    }


    // 要求一个函数可以同时返回string和number类型(下列方面，代码冗余)
    function getData1(value:string):string {
        return value;
    }

    function getData2(value:number):number {
        return value;
    }
 

    // 使用any,但是使用any时放弃了类型检查
    function getData3(value:any):any {
        return value;
    }


    // 泛型：可以支持不特定的数据类型
    // T表示泛型，可以用任何字母代替。但是三个T得一致
    function getData4<T>(value:T):T{
        return value
    }

    getData4<number>(123);
    getData4<string>("123");
    getData4<boolean>(true);
 */


//  2.泛型类

/*
    class MinClass {
        public list:number[];
        constructor(arr:number[]) {
            this.list = arr;
        }
        add(num:number) {
            this.list.push(num);
        }
        min():number {
            var min = Math.min.apply(this, this.list);
            return min
        }
    }

    var m = new MinClass([100]);
    m.add(2);
    m.add(42);
    console.log(m.min());

    // or 
    // Minclass和Minclass2的区别在于：：属性“list”没有初始化器，也没有在构造函数中明确分配。
    class MinClass2 {
        arr:number[] = [];
        add(num:number) {
            this.arr.push(num);
        }
        min() {
            var min = Math.min.apply(this, this.arr);
            console.log(min);
            return min;
        }
    }

    var m2 = new MinClass2();
    m2.add(3);
    m2.add(66);
    m2.min();

    // 泛型类
    class MinCla<S> {
        public list:S[]=[];
        add(value:S) {
            this.list.push(value);
        }
        min() {
            var minArr = this.list.sort();
            console.log(minArr[0]);
        }
    }
    var min1 = new MinCla<string>();
    min1.add('z');
    min1.add('ewrz');
    min1.add('a');
    min1.min();

    var min2 = new MinCla<number>();
    min2.add(900);
    min2.add(45);
    min2.add(53);
    min2.min();

*/

// 3.泛型接口
/*

    // 函数类型接口
    interface Confn {
        (value1:string, value2:string):string;
    }

    var setData:Confn = function(value1:string, value2:string):string {
        return value1+value2;
    }
    console.log(setData('姓名：', '李四'));

    // 泛型接口
    // 方法一
    interface Confn1 {
        <T>(valueL:T):T;
    }
    var getData1:Confn1 = function<T>(value:T):T{
        return value;
    }
    console.log(getData1<number>(123));
    console.log(getData1<string>("123"));

    // 方法二
    interface Confn2<T> {
        (valueL:T):T;
    }
    function getData2<T>(value:T):T{
        return value;
    }

    var myGetData:Confn2<string>=getData2;
    console.log(myGetData('20'));
    // console.log(myGetData(20)); // 报错

    var myGetData2:Confn2<number>=getData2;
    console.log(myGetData2(20));
*/

// 4.泛型类
// 把类当做参数,来约束数据传入的类型
// /*
    // 定义一个类，把类作为参数 约束传入的类型
    // ex.No1-------------------------------------------------
    class User {
        username:string | undefined;
        password:string |undefined;
    }

    class MysqlDb {
        add(user:User):boolean {
            console.log(user,);
            return true;
        }
    }

    var u = new User();
    u.username = '张三';
    u.password = '12323';

    var db = new MysqlDb();
    db.add(u);

    // ex.No2 使用泛型----------------------------------------------------
    class User2 {
        username:string | undefined;
        password:string |undefined;
    }

    // 方法一： 这个写法不对||||||||||||||||||||||||||||||||||||||||||||||||
    // class MysqlDb2 {
    //     add<T>(user:T):boolean {
    //         console.log(user);
    //         return true;
    //     }
    // }

    // var u2 = new User2();
    // u2.username='aaa';
    // u2.password='123';
    // var mq2 = new MysqlDb2();
    // mq2.add<User2>(u2);
    // mq2.add(1); // 这样写也不报错

    // 方法二 ----这种写法才对，上面那种，add传入任意值都不会报错||||||||||||
    class MysqlDb2<T> {
        add(user:T):boolean {
            console.log(user);
            return true;
        }
    }
    var u2 = new User2();
    u2.username='aaa';
    u2.password='123';

    var mq2 = new MysqlDb2<User2>();
    mq2.add(u2);
    // mq2.add(1); // 报错

    // ex.No3-----------------------------------------------------------
    class Info2 {
        public title: string;
        public number: number;
        constructor(title:string, number:number) {
            this.title = title;
            this.number = number;
        }
    }

    var in3 = new Info2("标题A", 123);
    var mq3 = new MysqlDb2<Info2>();
    mq3.add(in3);

    // ex.No4-----------------------------------------------------------
    class Article {
        title:string | undefined;
        describ: string | undefined;
        status: number | undefined;
        constructor(params:{
            title:string | undefined;
            describ: string | undefined;
            status?: number | undefined}
            ) {
            this.title = params.title;
            this.describ = params.describ;
            this.status = params.status;
        }
    }

    var article1 = new Article({
        title: '分类',
        describ: '描述',
        status: 200
    })
    var dba = new MysqlDb2<Article>();
    dba.add(article1);
// */