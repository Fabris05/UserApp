import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { UserRoutes } from "./routes/UserRoutes";
import { Navigate, Route, Routes } from "react-router-dom";

export const UsersApp = () => {

    const {login, handerLogin, handlerLogout} = useAuth();

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                       <Route path = '/*' element = {<UserRoutes 
                            login={login} 
                            handlerLogout={handlerLogout}/>}/>
                    )
                    :
                    <>
                        <Route path = "/login" element={<LoginPage handerLogin={handerLogin}/>} />
                        <Route path = "/*" element = { <Navigate to="/login"/> } />
                    </>
                     
            }
        </Routes>
    );
};
