"use strict";
// 1.模块的基础知识+案例
// 2.模块化封装案例
Object.defineProperty(exports, "__esModule", { value: true });
// -------------------------------------------------------------
// 1.模块的基础知识+案例
/*
    模块分为：内部模块 + 外部模块；

    “内部模块”现在成为“命名空间”，外部模块则简称为“模块”。
    
    模块在其自身的作用域里执行，而不是在全局作用域里。

    这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的。除非你明确的使用export形势导出
    
    相反，你要使用其他模块的变量，函数时，你必须导入它们，可以使用import。
*/
/*
    // 方法一
    // import { dbUrl, getData, save } from './⑦module/db';
    // 方法二
    // import { dbUrl, getData, save as save1 } from './⑦module/db';

    // save();
    // or  save1()
*/
/*
    // 方法三
    import getData from './⑦module/db'; // 暴露使用export default时

    getData();
    
*/
// -------------------------------------------------------------------
// 2.模块化封装案例
var article_1 = require("./\u2466module/article");
var u = new article_1.UserDemo1();
u.username = '张三';
u.password = '1234';
article_1.userModel.add(u);
