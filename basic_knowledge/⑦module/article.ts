import { MysqlDbDemo1} from './db';

class UserDemo1 {
    username: string | undefined;
    password: string | undefined;
}

var userModel = new MysqlDbDemo1<UserDemo1>();
export {
    UserDemo1,
    userModel
}