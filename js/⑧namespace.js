"use strict";
// 命名空间namespace：
// 在代码量大的情况下，为了避免命名冲突，可以将相似功能的函数，类，接口等放到命名空间内。
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间和模块的区别：
// 命名空间：内部模块，主要用于组织代码，避免命名冲突。
// 模块：ts的外部模块，侧冲代码的复用，一个模块可能有多个命名空间
/*
    // 例一
    namespace A {
        export class Dog {
            eat() {
                console.log('dogA');
            }
        }
    }

    var dA = new A.Dog();
    dA.eat();


    namespace B {
        export class Dog {
            eat() {
                console.log('dogB');
            }
        }
    }
    var dB = new B.Dog();
    dB.eat();
*/
// /*
// 例二
var a_1 = require("./\u2467namespace/a");
var dC = new a_1.C.Dog();
dC.eat();
// */
