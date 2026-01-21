document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura de datos
    const datos = {
        nombre: document.getElementById('regNombre').value,
        apellido: document.getElementById('regApellido').value,
        email: document.getElementById('regEmail').value,
        fecha: new Date().toISOString()
    };

    // Lógica de "Base de Datos" JSON local
    let bdLocal = localStorage.getItem('suscripcionesJSON');
    let lista = bdLocal ? JSON.parse(bdLocal) : [];
    
    lista.push(datos);
    localStorage.setItem('suscripcionesJSON', JSON.stringify(lista));

    // Mostrar mensaje de éxito
    const msg = document.getElementById('msgExito');
    msg.classList.remove('hidden');
    
    // Resetear formulario
    this.reset();

    console.log("Registro guardado en JSON:", datos);
});