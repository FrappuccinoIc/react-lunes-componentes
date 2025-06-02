function Saludo(props) { //Si quieres que acepte argumentos al ser llamado en html dinamicamente, debe aceptar el argumento "props"
    return (
        <div>
            <h1>Hola, {props.nombre} {props.apellido}!</h1> {/* el objeto props tendrá todos los argumentos que sean ingresados por el html */}
            <p>¡Bienvenido a nuestro sitio web!</p>
        </div>
    );
}

export default Saludo;