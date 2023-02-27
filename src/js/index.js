// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// mostrar y ocultar el menú general
const menuToggleElement = document.getElementById("toggle-menu");
const menuElement = document.getElementById("menu");


function toggleMenu(){
    menuElement.classList.toggle("hide");
}

menuToggleElement.addEventListener('click', toggleMenu);

// ajuste para que utils no pise otros estilos

const resizeWindow = () => {
	if (window.matchMedia("(min-width: 1024px)").matches) {
		menuElement.classList.remove('hide') 
	} else {
		menuElement.classList.add('hide')
	}
};

resizeWindow()

window.addEventListener("resize", resizeWindow);