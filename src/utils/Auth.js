import { users } from './data.json';



module.export = Auth = (userLogin) => {
    console.log(users)
    const user = users.find(user => user.email == userLogin.email).find(user => user.password == userLogin.password );

    if(user){
        // redirect to dashboard
    }else{
        //password not correct
    }

}