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
    const [usuariosTotal, setUsuariosTotal] = useState(0);
    const [ganador, setGanador] = useState(null);

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
            setLoading(true);
            try {
                const response = await fetch("https://7promo-production.up.railway.app/user/GetUsers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                });

                const result = await response.json();

                setUsuariosTotal(result?.message?.length);
                // Solo usuarios con al menos una imagen
                const usuariosConImagen = result?.message
                    ?.map((usuario) => ({
                        ...usuario.dataValues,
                        images: usuario.images || [],
                    }))
                    .filter((usuario) => usuario.images.length > 0);

                setUsuarios(usuariosConImagen);
                console.log("Usuarios con imágenes:", usuariosConImagen);
                setLoading(false);

            } catch (error) {
                console.error("Error al obtener usuarios:", error);
                setLoading(false);
            }
        };

        if (isAdmin) {
            fetchUsuarios();
        }
    }, [isAdmin]);

    const realizarSorteo = () => {
        if (usuarios.length === 0) {
            alert("No hay usuarios con imágenes para realizar el sorteo");
            return;
        }

        // Cada imagen representa una chance
        const participantesConChances = usuarios.flatMap((usuario) =>
            Array(usuario.images.length).fill(usuario)
        );

        const indiceGanador = Math.floor(Math.random() * participantesConChances.length);
        const usuarioGanador = participantesConChances[indiceGanador];

        setGanador(usuarioGanador);
    };

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <button type="submit" style={{ marginTop: "10px" }} className={styles.btnStyle}>
                    Ingresar
                </button>
            </form>

            {isAdmin && (
                <div className={styles.userListContainer}>
                    <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Lista de Participantes</h2> 

                    <p style={{ textAlign: "center", marginBottom: "20px" }}>
                        <strong>Total de participantes : {usuariosTotal}</strong>
                    </p>

                    <p style={{ textAlign: "center", marginBottom: "20px" }}>
                        <strong>Total de participantes con imágenes: {usuarios.length}</strong>
                    </p>

                    <div className={styles.divCenter}>
                        <button onClick={realizarSorteo} style={{ marginBottom: "20px" }} className={styles.btnStyle}>
                            Realizar sorteo
                        </button>
                    </div>

                    {ganador && (
                        <div className={styles.userCard}>
                            <h2 style={{ textAlign: "center" }}> ¡Ganador! </h2>
                            <h3>{ganador.name} {ganador.lastName}</h3>
                            <p><strong>Email:</strong> {ganador.email}</p>
                            <p><strong>Teléfono:</strong> {ganador.tel}</p>
                            <p><strong>Imágenes subidas:</strong> {ganador.images.length}</p>

                            {ganador.images?.[0] && (
                                <div style={{ marginTop: "10px", textAlign: "center" }}>
                                    <h4>Imagen del sorteo</h4>
                                    <img
                                        src={ganador.images[0].img}
                                        alt="Primera imagen del ganador"
                                        className={styles.imagePreview}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {loading ? (
                        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>CARGANDO...</h2>
                    ) : (
                        usuarios?.map((user, index) => (
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
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Infouser;
