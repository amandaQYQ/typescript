// 1.模块的基础知识+案例
// 2.模块化封装案例


// -------------------------------------------------------------
/*
    // 方法一
    export var dbUrl = 'XXXXX';

    export function getData():any[] {
        console.log('获取数据库的数据');
        return [
            {title: 1},
            {title: 2},
        ]
    }

    export function save() {
        console.log('保存数据成功');
    }
*/

/*
    // 方法二
    var dbUrl = 'XXXXX';

    function getData():any[] {
        console.log('获取数据库的数据');
        return [
            {title: 1},
            {title: 2},
        ]
    }

    function save() {
        console.log('保存数据成功');
    }

    export { dbUrl, getData, save };
*/

/*
    // 方法三
    var dbUrl = 'XXXXX';

    function getData():any[] {
        console.log('获取数据库的数据');
        return [
            {title: 1},
            {title: 2},
        ]
    }

    function save() {
        console.log('保存数据成功');
    }

    export default getData; // export default在一个模块里只能用一次
*/

// -------------------------------------------------------------------
// 2.模块化封装案例

    interface DBII<T>{
        add(info:T):boolean;
        update(info:T, id:number):boolean;
        delate(id:number):boolean;
        get(id:number):any[];
    }

    export class MysqlDbDemo1<T> implements DBII<T> {
        add(info: T): boolean {
            console.log(info);
            return true;
        }
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delate(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            var list = [
                {
                    title: 'xxx',
                    desc: 'dfdgff'
                },
                {
                    title: 'xxx',
                    desc: 'dfdgff'
                }
            ]
            return list;
        }

        
    }

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