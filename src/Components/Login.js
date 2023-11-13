import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
    return (
        <LoginStyle>
            <Title>MyWallet</Title>
            <input type='email' placeholder="E-mail" />
            <input type='password' placeholder="Senha" />
            <button type="submit" >Entrar</button>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </LoginStyle>
    );
}

export const LoginStyle = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        margin-bottom: 13px;
    }

    button{
        width: 100%;
        height: 46px;
        font-size: 20px;
    }

    a{
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        margin-top: 36px;
        color: white;
        text-decoration: none;
    }
`;

export const Title = styled.p`
    width: 100%;
    height: 50px;
    font-family: 'Saira Stencil One';
    font-size: 32px;
    text-align: center;
    color: white;
    margin-bottom: 24px;
`;