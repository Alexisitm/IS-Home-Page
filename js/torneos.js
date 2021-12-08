const fetchTorneos = async () => {
    return await (await fetch('http://127.0.0.1:8000/api/torneos')).json()
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