import React, {useEffect} from 'react';
import './styles/main-blocks.css'
import './styles/modal.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppRouter from "./router/AppRouter";
import Wrapper from "./components/main-blocks/Wrapper";

function App() {

    return (

                <Wrapper>
                    <AppRouter/>
                </Wrapper>

    );
}

export default App;
