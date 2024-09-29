
// Archivo helper o service donde va toda la logica del negocio

export const loginUser = (userLogin) => {
    return (userLogin.username === 'admin' && userLogin.password === '12345') ? true : false;
}