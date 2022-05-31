import { users } from './data.json';

module.export = registerUser = async  (user) => {
    const user = await users.push(user);
    return users;

}