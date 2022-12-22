import React, {FC, useContext, useEffect} from 'react';
import Wrapper from "./components/main-blocks/Wrapper";
import {Context} from "./index";
import AppRouter from "./router/AppRouter";

const App: FC = () => {
    const {authStore} = useContext(Context)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            authStore.checkAuth()
        }
        // authStore.getUser()

    },[])

    return (
       <Wrapper>
           <AppRouter/>
       </Wrapper>
    );
}

export default App;
