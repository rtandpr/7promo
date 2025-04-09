import React, { useState } from "react";
import styles from "./input.module.css";

const Input = ({ type, placeholder, iconoIzq, iconoDer, handleChange, borderErr, msjErr }) => {
    const [showPassword, setShowPassword] = useState(false);

    // Solo aplicar el toggle si el tipo original es password
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const handleTogglePassword = () => {
        console.log("se ejecuta" , inputType);
        
        if (isPassword) setShowPassword(prev => !prev);
    };

    return (
        <div className={styles.content}>
            <div className={styles.contentInput}>
                <input
                    type={inputType}
                    id={type}
                    name={type}
                    placeholder={placeholder}
                    className={styles.inputField}
                    onChange={handleChange}
                    style={{ border: borderErr ? "2px solid red" : "1px solid white" }}
                />

                <span className={styles.iconInput}>
                    <img src={iconoIzq} alt="icono izquierda" />
                </span>

                {iconoDer && (
                    <span className={styles.iconInputDer} >
                        <img src={iconoDer} alt="icono derecha" onClick={handleTogglePassword} style={{ cursor: "pointer" }}/>
                    </span>
                )}

                {borderErr && <p className={styles.Perr}>{msjErr}</p>}
            </div>
        </div>
    );
};

export default Input;
