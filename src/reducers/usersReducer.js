export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                    
                }
            ];
        case 'removeUser':
            return state.filter(user => user.id !== action.payload);
        
        case 'updateUser':
            return state.map( update => {
                if(update.id === action.payload.id){
                    return {
                        ...action.payload,  // devuelve el payload modificado
                        password: update.password
                    };
                }
                return update;
            })
        default:
            return state;
    }
}