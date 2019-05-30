"use strict";
// 1.模块的基础知识+案例
// 2.模块化封装案例
Object.defineProperty(exports, "__esModule", { value: true });
var MysqlDbDemo1 = /** @class */ (function () {
    function MysqlDbDemo1() {
    }
    MysqlDbDemo1.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDbDemo1.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDemo1.prototype.delate = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbDemo1.prototype.get = function (id) {
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
    return MysqlDbDemo1;
}());
exports.MysqlDbDemo1 = MysqlDbDemo1;
// // 操作用户表，定义一个user类和数据表做映射
// class UserDemo1 {
//     username: string | undefined;
//     password: string | undefined;
// }
// var u = new UserDemo1();
// u.username = '张三';
// u.password = '134';
// var mysqlDemo = new MysqlDbDemo1<UserDemo1>();
// mysqlDemo.add(u);
