import Swal from "sweetalert2";
import { types } from "../types/types";


export const startLogin = (email, password) => {
    return ( dispatch ) => {

        if (!!localStorage.getItem("JsonUsers")) {
            let JsonUser = JSON.parse(localStorage.getItem("JsonUsers"));
            let userValidated = JsonUser.filter((user) => user.email === email && user.password === password);
            
            if (userValidated.length >= 1) {
                localStorage.setItem("UserLogin", JSON.stringify(userValidated[0]))

                dispatch(login({
                    uid: userValidated[0].uid,
                    name: userValidated[0].name
                }));
            }else{
                Swal.fire('Error', "Usuario no valido")
            }
        }else{
            dispatch(checkingFinish());
        }
    }
}

export const startRegister = (email, password, name) => {
  
    return ( dispatch ) => {
        
        if (!!localStorage.getItem("JsonUsers")) {
            let JsonUser = JSON.parse(localStorage.getItem("JsonUsers"));

            let userValidated = JsonUser.filter((user) => user.email === email);
            
            if (userValidated.length === 0) {
                let user = {
                    uid: createGuid(),
                    name,
                    email,
                    password
                }
                JsonUser.push(user);
                localStorage.setItem("JsonUsers", JSON.stringify(JsonUser))

                dispatch(login({
                    uid: user.uid,
                    name: user.name
                }));
            }else{
                Swal.fire('Error', "Usuario ya existe");
            }
            
        }
        if (!!localStorage.getItem("UserLogin")) {
            let user = JSON.parse(localStorage.getItem("UserLogin"))
                dispatch(login({
                uid: user.uid,
                name: user.name
            }));
        }else{
            dispatch(checkingFinish());
        }
    }
}

export const startChecking = () => {
    return ( dispatch ) => {
        if (!!localStorage.getItem("UserLogin")) {
            let user = JSON.parse(localStorage.getItem("UserLogin"))
                dispatch(login({
                uid: user.uid,
                name: user.name
            }));
        }else{
            dispatch(checkingFinish());
        }


    }
}
export const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem("UserLogin")
        dispatch(logout());
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
});


const logout = () => ({
    type: types.authLogout
});
const createGuid = () => {  
    function _p8(s) {  
        var p = (Math.random().toString(16)+"000000000").substr(2,8);  
        return s ? p.substr(0,4) + p.substr(4,4) : p ;  
     }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
}