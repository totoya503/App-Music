// src/auth/Login.jsx
import { auth, provider } from "../firebase/appConfig.jsx";
import {signInWithPopup } from "firebase/auth";

export default function Login({ setUser }) {
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Inicia sesión con Google</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
