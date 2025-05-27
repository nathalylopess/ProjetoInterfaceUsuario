import { useState, useEffect } from "react";

export default function Tema() {
    const [darkMode, setDarkMode] = useState(false);

    const alternarTema = () => setDarkMode(!darkMode);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="tema">
            <button onClick={alternarTema}>
                {darkMode ? "Mudar para o Tema Claro" : "Mudar para o Tema Escuro"}
            </button>
        </div>
    );
}
