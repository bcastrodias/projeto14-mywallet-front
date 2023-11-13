import { BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
    console.log("teste");
    return (
        <Background>
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </Background>
    )
}

export default App;


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    padding: 25px;
    padding-bottom: 15px;
`;