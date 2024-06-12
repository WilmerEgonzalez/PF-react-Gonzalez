const products = [
    {
    id: 1,
    nombre: "Resident Evil 2 Remake" ,
    precio: 35500,
    imagen: "https://i.pinimg.com/originals/e4/65/99/e46599f46774154fe547ecf334639f4d.jpg" ,
    stock: 10,
    descripcion: 'VideoJuego Resident Evil 2 version remake 2019',
    categoria: 'Juego',
    },
    {
    id: 2,
    nombre: "Consola Playstation Ps4 1tb" ,
    precio: 76260,
    imagen: "https://www.cordobadigital.net/wp-content/uploads/2023/11/PS4-1tb.png" ,
    stock: 10,
    descripcion: 'Consola Playstation Ps4 1Tb',
    categoria: 'Consola',
    },
    {
    id: 3,
    nombre: "Soportes Pared Ps4" ,
    precio: 6600,
    imagen: "https://tauroparts.com/wp-content/uploads/2021/05/Slim-600x600.jpg" ,
    stock: 10,
    descripcion: 'Soportes Pared Ps4',
    categoria: 'Accesorios',
    },
    {
    id: 4,
    nombre: "Placa de video Nvidia GeForce GT 1030" ,
    precio: 51700,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_823560-MLU72820801963_112023-O.webp" ,
    stock: 10,
    descripcion: 'Placa de video Nvidia GeForce GT 1030',
    categoria: 'Componentes'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoryId === categoryId));
        }, 500);
    });
};
