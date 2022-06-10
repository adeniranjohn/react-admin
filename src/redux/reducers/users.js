export default function users(state=[], action){
    switch(action.type){
        case 'REGISTER_USER':
                return state.concat(action.payload);
        default: return state;
    }

}