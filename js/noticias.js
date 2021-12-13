const fetchNoticias = async () => {
    return await (await fetch('http://morning-tundra-87209.herokuapp.com/api/noticias')).json()
}

const renderNoticias = (data) => {

    const ruta = 'http://morning-tundra-87209.herokuapp.com/assets/images/noticias/';
    const noticias = [];
    let pilaNoticias = []

    data.forEach(noticia => {
        pilaNoticias.unshift(noticia)
    })

    pilaNoticias.forEach(noticia => {
        const tmp = {
            id: noticia.id,
            titulo: noticia.titulo,
            fecha: noticia.fecha_noticia,
            autor: `${noticia.nombre_autor} ${noticia.apaterno_autor} ${noticia.amaterno_autor ? `${noticia.amaterno_autor}` : ''} `,
            descripcion: noticia.descripcion,
            portada: `background-image: url(${ruta}${noticia.portada});`,
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