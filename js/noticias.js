const fetchNoticias = async () => {
    return await (await fetch('http://127.0.0.1:8000/api/noticias')).json()
}

const renderNoticias = (data) => {
    const noticias = [];

    data.forEach(noticia => {
        const tmp = {
            id: noticia.id,
            titulo: noticia.titulo,
            fecha: noticia.fecha_noticia,
            autor: `${noticia.nombre_autor} ${noticia.apaterno_autor} ${noticia.amaterno_autor ? `${liga.amaterno_autor}` : ''} `,
            descripcion: noticia.descripcion,
            portada: `background-image: url(${noticia.portada});`,
        }
        noticias.push(tmp);
    })

    new Vue({
        el: '#noticias',
        data: {
            todo: noticias
        }
    })
}

fetchNoticias().then(renderNoticias);