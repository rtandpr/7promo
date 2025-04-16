import React, { useState, useEffect } from "react";
import Input from "../../components/inputs/input";
import styles from "./Infouser.module.css";

//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";

const Infouser = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usuarios, setUsuarios] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Usuario admin
        if (email === "admin@admin.com" && pass === "admin123") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
            alert("Credenciales incorrectas");
        }
    };



    useEffect(() => {

        const fetchUsuarios = async () => {
            setLoading(true)
            try {
                const response = await fetch("https://7promo-production.up.railway.app/user/GetUsers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}), // envía lo que necesites
                });

                const result = await response.json();

                // Mapeamos cada usuario para combinar sus dataValues con images
                const usuariosLimpios = result?.message?.map((usuario) => {
                    return {
                        ...usuario.dataValues,
                        images: usuario.images || [],
                    };
                });

                setUsuarios(usuariosLimpios);
                console.log("result", result);
                setLoading(false)

            } catch (error) {
                console.error("Error al obtener usuarios:", error);
                setLoading(false)
            }
        };
        if (isAdmin) {
            fetchUsuarios();
        }
    }, [isAdmin]);

    return (
        <div className={styles.div}>


            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Correo electrónico"
                    type="email"
                    iconoIzq={iconoSes}
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <Input
                        placeholder="Contraseña"
                        type="password"
                        iconoIzq={inconoPass}
                        value={pass}
                        handleChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <button type="submit" style={{ marginTop: "10px" }}>
                    Ingresar
                </button>
            </form>

            {isAdmin && (
                <div className={styles.userListContainer}>
                    <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Lista de Usuarios</h2>

                    {
                        loading ? <h2 style={{ textAlign: "center", marginBottom: "30px" }}>CARGANDO...</h2> : null
                    }
                    {usuarios?.map((user, index) => (
                        <div key={index} className={styles.userCard}>
                            <h3>{user.name} {user.lastName}</h3>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Teléfono:</strong> {user.tel}</p>
                            <p><strong>Puntos:</strong> {user.totalPoints}</p>
                            <p><strong>Privacidad:</strong> {user.privacidad ? "Sí" : "No"}</p>
                            <p><strong>Términos y condiciones:</strong> {user.Términosycondiciones ? "Sí" : "No"}</p>
                            <p><strong>Recibir info:</strong> {user.recibirinformación ? "Sí" : "No"}</p>

                            {user?.images?.length > 0 && (
                                <div>
                                    <h4>Imágenes</h4>
                                    <div className={styles.imageGrid}>
                                        {user.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img.img}
                                                alt={`img-${i}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Infouser;
