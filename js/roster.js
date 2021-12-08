const fetchEquipo = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return await (await fetch(`http://127.0.0.1:8000/api/ligas/${params.liga}/equipos/${params.equipo}`)).json()
}

const renderEquipo = (data) => {
    new Vue({
        el: '#Equipo',
        data: {
            todo: [
                {
                    nombre: data[0].nombre_equipo,
                    logoEquipo: data[0].logo_equipo != null ? `background-image: url(${data[0].logo_equipo});` : `background-image: url('/assets/images/kendall-scott-rYi3ZpupNlM-unsplash.jpg');`,
                }
            ]
        }
    })
}

const fetchEntrenador = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return await (await fetch(`http://127.0.0.1:8000/api/ligas/${params.liga}/equipos/${params.equipo}/entrenador`)).json()
}

const renderEntrenador = (data) => {
    new Vue({
        el: '#Entrenador',
        data: {
            todo: [
                {
                    nombre: data[0].nombre_entrenador,
                }
            ]
        }
    })
}

const fetchJugadores = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return await (await fetch(`http://127.0.0.1:8000/api/ligas/${params.liga}/equipos/${params.equipo}/jugadores`)).json()
}

const renderJugadores = (data) => {
    const posiciones = ['Pitcher','Catcher','Primer Base','Segunda Base','Tercera Base','Campo Corto','Jardinero Izquierdo','Jardinero Central','Jardinero Derecho']
    console.log(data[0].posicion)
    let jugadores = []

    data.forEach(jugador => {
        const tmp = {
            id: jugador.id,
            nombre: `${jugador.nombre_jugador} ${jugador.apaterno_jugador}`,
            posicion: posiciones[jugador.id_posicion-1]
        }
        jugadores.push(tmp);
    })

    new Vue({
        el: '#Roster',
        data: {
            todo: jugadores
        }
    })
    
}

fetchEquipo().then(renderEquipo)
fetchEntrenador().then(renderEntrenador)
fetchJugadores().then(renderJugadores)
