export default function auth(state=false, action){

    switch(action.type){
        case 'LOGIN': return true;
                break;
        case 'LOG_OUT': return false;
                break;
        default: return false;
    }


}