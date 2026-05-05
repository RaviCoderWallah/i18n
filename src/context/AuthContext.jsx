import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = (data) => {
        localStorage.setItem("account", JSON.stringify(data));
        setUser(data);
    }

    const login = (credentials) => {
        const storedAccount = JSON.parse(localStorage.getItem("account"));
        if (!storedAccount) {
            return { success: false, reason: "no-account" };
        }

        if (
            storedAccount.email === credentials.email &&
            storedAccount.password === credentials.password
        ) {
            setUser(storedAccount);
            return { success: true };
        }

        return { success: false, reason: "invalid-credentials" };
    }

    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, signup, login, logout }}>
        {children}
    </AuthContext.Provider>
}
