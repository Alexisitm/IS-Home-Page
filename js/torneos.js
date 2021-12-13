const fetchTorneos = async () => {
    return await (await fetch('http://morning-tundra-87209.herokuapp.com/api/torneos')).json()
}

const renderTorneos = (data) => {
    const torneos = [];

    data.forEach(torneo => {
        const tmp = {
            id: torneo.id,
            titulo: torneo.nombre_torneo,
            calendarios: torneo.calendario,
            resultados: torneo.resultados,
        }
        torneos.push(tmp);
    })

    new Vue({
        el: '#torneos',
        data: {
            todo: torneos
        }
    })
}

fetchTorneos().then(renderTorneos);