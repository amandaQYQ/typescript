"use strict";
// ts类型，接口，类，泛型综合使用
/*
    //  自写
    interface dataType {
        value:number,
        id:string,
    }
    class Store<T> {
        private arr:dataType[];
        constructor(arr: dataType[]) {
            this.arr = arr;
        }
        add(d:T, each:dataType):void {
            // console.log(d, d.data, d.name) // 为什么这里不能访问
            this.arr.push(each);
            console.log(this.arr);

            
        }
        update(d:T, id:string, value: number):void {
            var len = this.arr.length;
            this.arr.forEach((dd) => {
                if(dd.id == id) {
                        dd.value = value;
                }else {
                    console.log('查找无此条数据')
                }
            })
            console.log(this.arr);

        }
        delate(id:string) {
            this.arr.map((dd, ii)=> {
                if(dd.id == id) {
                    this.arr.splice(ii,1)
                    return this.arr;
                }
            })
            console.log(this.arr);
        }
    }

    class Mysql {
        public name = 'mysql';
        private data:dataType[]=[];
    }

    var mysql1 = new Mysql();
    var stor1Arr = [
        {
            id: '1',
            value: 1
        },
        {
            id: '2',
            value: 2
        }
    ]
    var store1 = new Store<Mysql>(stor1Arr);
    store1.add(mysql1, {id:'3',value: 3});
    store1.add(mysql1, {id:'4',value: 4});

    store1.update(mysql1, '6', 6)
    store1.update(mysql1, '4', 5)
    store1.delate('2')
    store1.delate('3')

*/
// 泛型类
// 注意：要实现泛型接口的话，那么这个类也应该是一个泛型类
// 比如 平常的类接口是这样
// interface Ge {
//     a:string;
// }
// class Geclass implements Ge {}
var MysqlDbDemo = /** @class */ (function () {
    function MysqlDbDemo() {
    }
    MysqlDbDemo.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDbDemo.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDemo.prototype.delate = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDemo.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'dfdgff'
            },
            {
                title: 'xxx',
                desc: 'dfdgff'
            }
        ];
        return list;
    };
    return MysqlDbDemo;
}());
// 操作用户表，定义一个user类和数据表做映射
var UserDemo = /** @class */ (function () {
    function UserDemo() {
    }
    return UserDemo;
}());
var u = new UserDemo();
u.username = '张三';
u.password = '134';
var mysqlDemo = new MysqlDbDemo();
mysqlDemo.add(u);
// */
