document.addEventListener('DOMContentLoaded', () => {
    
    // === FUNCIONALIDAD MENÚ HAMBURGUESA ===
    const toggleBtn = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if(toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar
            navMenu.classList.toggle('active');
        });
    }

    // (Opcional) Cerrar el menú al hacer clic en un enlace (Mejora UX Móvil)
    const navLinks = document.querySelectorAll('.inner-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth < 768) { // Solo en móvil
                navMenu.classList.remove('active');
            }
        });
    });

    // ... Tu código del formulario ...
});

// === LÓGICA FORMULARIO (Si existe en la página actual) ===
const form = document.getElementById('registroForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById('regNombre').value,
            apellido: document.getElementById('regApellido').value || '',
            email: document.getElementById('regEmail').value,
            fecha: new Date().toISOString()
        };

        // Guardar en LocalStorage
        let bdLocal = localStorage.getItem('suscripcionesJSON');
        let lista = bdLocal ? JSON.parse(bdLocal) : [];
        lista.push(datos);
        localStorage.setItem('suscripcionesJSON', JSON.stringify(lista));

        // Feedback usuario
        const msg = document.getElementById('msgExito');
        msg.style.display = 'block'; // Mostrar mensaje
        
        setTimeout(() => {
            this.reset();
            msg.style.display = 'none';
        }, 3000);

        console.log("Registro guardado:", datos);
    });
}