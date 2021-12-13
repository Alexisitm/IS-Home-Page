const fetchLigas = async () => {
    return await (await fetch('http://morning-tundra-87209.herokuapp.com/api/ligas')).json()
}

const renderLigas = (data) => {

    const ruta = 'http://morning-tundra-87209.herokuapp.com/assets/images/logos-ligas/';
    const bg = ['bg-primario','bg-secundario','bg-terciario','bg-cuarto']
    let index = 0
    const ligas = [];

    data.forEach(liga => {
        index = index < bg.length ? index : 0;
        const logo = liga.logo_liga.replaceAll(' ',"%20")
        const tmp = {
            id: liga.id,
                nombre: liga.nombre_liga,
                info: {
                    direccion: `${liga.localidad} ${liga.numero ? '#'+liga.numero : ''}`,
                    localidad: liga.ciudad,
                    edadMinima: liga.edad_minima,
                    edadMaxima: liga.edad_maxima,
                    nombreResponsable: `${liga.nombre_responsable} ${liga.apaterno_responsable ? `${liga.apaterno_responsable}` : ''} ${liga.amaterno_responsable ? `${liga.amaterno_responsable}` : ''} `,
                    telefonoResponsable: liga.telefono_responsable
                },
                logojpg: `background-image: url(${ruta}${logo}) ;`,
                bg: bg[index++],
                equiposLink: `/Equipos.html?liga=${liga.id}`,
        }
        ligas.push(tmp);
    })

    new Vue({
        el: '#Lista-ligas',
        data: {
            todo: ligas
        }
    })
}

fetchLigas().then(renderLigas);