const parar = document.getElementById('parar');
	const playBoton = document.getElementById('play');
	const segundos = document.getElementById('segundos');
	
	let pararInterval;
	let corriendo = 0;
	
	const empieza = () => {
	    const enPausa = !playBoton.classList.contains('running');
	    if (enPausa) {
	        playBoton.classList.add('running');
	        start();
	    } else {
	        playBoton.classList.remove('running');
	        pause();
	    }
	}
	
	const pause = () => {
	    segundos.style.animationPlayState = 'paused';
	    clearInterval(pararInterval);
	}
	
	const para = () => {
	    segundos.style.transform = 'rotate(-90deg) translateX(60px)';
	    segundos.style.animation = 'none';
	    playBoton.classList.remove('running');
	    corriendo = 0;
	    clearInterval(pararInterval);
	    parar.textContent = '00:00';
	}
	
	const start = () => {
	    segundos.style.animation = 'rotacion 60s linear infinite';
	    let startTime = Date.now() - corriendo;
	    segundos.style.animationPlayState = 'running';
	    pararInterval = setInterval( () => {
	        corriendo = Date.now() - startTime;
	        parar.textContent = calculateTime(corriendo);
	    }, 1000)
	}
	
	const calculateTime = corriendo => {
	    const total_seconds = Math.floor(corriendo / 1000);
	    const total_minutes = Math.floor(total_seconds / 60);
	
	    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
	    const display_minutes = total_minutes.toString().padStart(2, "0");
	
	    return `${display_minutes}:${display_seconds}`
	}




