const fetchLiga = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return await (await fetch(`http://127.0.0.1:8000/api/ligas/${params.liga}`)).json()
}
const renderLiga = (data) => {
    new Vue({
        el: '#Liga',
        data: {
            todo: [
                {
                    nombre: data[0].nombre_liga,
                    logoLiga: `background-image: url(${data[0].logo_liga}) ;`,
                }
            ]
        }
    })
}

const fetchEquipos = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return await (await fetch(`http://127.0.0.1:8000/api/ligas/${params.liga}/equipos/`)).json()
}

const renderEquipos = (data) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const equipos = [];

    data.forEach(equipo => {
        const tmp = {
            id: equipo.id,
            nombre: equipo.nombre_equipo,
            rosterLink: `/Roster.html?liga=${params.liga}&equipo=${equipo.id}`,
        }
        equipos.push(tmp);
    })

    
    new Vue({
        el: '#Tabla-equipos',
        data: {
            todo: equipos
        }
    })
}


fetchLiga().then(renderLiga)
fetchEquipos().then(renderEquipos)