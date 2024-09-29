
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':

            return {
                isAuth: true,
                user: action.payload, // retornamos el nombre
            };
        case 'logout':
            return {
                isAuth: false,
            };
        default:
            return state;
    }
}