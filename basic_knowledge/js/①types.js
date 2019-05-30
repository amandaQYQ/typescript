"use strict";
// 1.在项目中配置typescript
// 2.ts数据类型
// 2.1：boolean
// 2.2：number
// 2.3：string
// 2.4：array
// 2.5：tuple（元祖类型）
// 2.6：enum（枚举类型）
// 2.7：any
// 2.8：null和undefined
// 2.9：void
// 2.10：never
// -------------------------------------------------------------------------------------
// 在项目中配置typescript
/**
 * 1.生成config文件 tsc --init ，并配置outDir相对路径
 * 2.选择任务，监视tsconfig:  Terminal - Run task - tsc:watch tsconfig.json
 */
// ts数据类型
/**
 * 1.boolean;
 *
    var flag: boolean = true;
    flag = false;
    console.log(flag);
 *
 */
/**
 * 2.number;
 *
    var num: number = 123;
    console.log(num);
 */
/**
 * 3.string;
 *
    var str: string = "123";
    console.log(str);
 */
/**
 * 4.array：数组中每一项都是相同的类型
 *
    var arr: number[] = [1, 3234, 4, 545];
    console.log(arr);

    // 或者
    var arr2: Array<number> = [1, 2, 3, 4, 5];
    console.log(arr2);

    // 或者
    var arr3: any[] = [1, "3234", 4, true];
    console.log(arr3);

 */
/**
* 5.元祖类型（tuple）: 给数组中每一项规定类型
*
    var tup:[number, string] = [2,"123"];
    console.log(tup);
*/
/**
* 6.枚举类型（enum）: 计算机中常用数值代表某一个状态，
*                       比如1：success ; 0:  error
*                       但是这样易读性差。所以产生了枚举类型
*
*
    enum Flag{success='a', error=0};
    let s:Flag = Flag.success;
    console.log(s);

    // 如果标识符没有赋值，那么他的值就是下标
    enum Color{blue, red, 'orange'};
    var c:Color=Color.blue;
    console.log(c); // 0

    // 如果标识符赋值了，那么他的值递增
    enum Color2{blue, red=3, 'orange'};
    var r:Color2=Color2.red;
    var o:Color2=Color2.orange;
    var b:Color2=Color2.blue;
    console.log(r, o, b);   // 3, 4, 0
*/
/**
* 7.任意类型（any）:
*
*
    var any:any =123;
    any="trssdsd"
    console.log(any);

    // 用法
    var box:any = document.getElementById('box');
    box.style.color = 'red';
*/
/**
* 8.null和undefined 和其他（never类型)数据类型的子类型；
*
*
    // var some:number;
    // console.log(some); // 变量没有赋值，应该为undefined，但是这样写，ts会报错；

    var some:undefined;
    console.log(some); // 变量没有赋值，应该为undefined，但是这样写，ts会报错；

    var somes:number | undefined;
    console.log(somes);
    somes = 134;
    console.log(somes);

    var nu:null;
    nu = null;
    console.log(nu, 'null');


    var oneof:number | null | undefined;
    oneof = 2323;
*/
/**
* 9.void类型：没有任何类型，用于定义方法没有任何返回；
*
*
    // es5的方法
    // function run() {
    //     console.log('run')
    // }
    // run();

    // 表示方法没返回任何类型
    function run():void{
        console.log('run')
    }
    run()

    // 如果方法有返回值
    function runs():number{
        console.log(123)
        return 123
    }
    runs()
*/
/**
* 10.never类型，包括null和undefined，表示从不会出现的值；
*
*
    var a:never;
    //    a=123; // 报错
    a = (()=> {
        throw new Error('错误')
    })();
*/
