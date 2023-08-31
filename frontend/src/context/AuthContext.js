import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "64ee1e6a3c4b0c61e684ea7e",
        username:"abrar",
        email:"abcdefgh@gmail.com",
        profilePicture:"me.jpg",
        coverPicture:"me.jpg",
        followers:[],
        followings:[],
        isAdmin:false,
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user:state.user, 
            isFetching:state.isFetching,
            error: state.error,
            dispatch
            }}>
            {children}
        </AuthContext.Provider>
    );
};