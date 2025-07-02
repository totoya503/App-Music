// src/auth/Login.jsx
import styled from "styled-components";
import { auth, provider } from "../firebase/appConfig.jsx";
import {signInWithPopup } from "firebase/auth";

export default function Login({ setUser }) {
    const handleLogin = async () => {
        try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        } catch (error) {
        console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <Container>
        <Title>Inicia sesión con Google</Title>
        <LoginButton onClick={handleLogin}>Iniciar sesión</LoginButton>
        </Container>
    );
}

// Estilos
const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    color: white;
    font-family: Arial, sans-serif;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
`;

const LoginButton = styled.button`
    background-color: #1db954;
    border: none;
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1ed760;
    }
`;
