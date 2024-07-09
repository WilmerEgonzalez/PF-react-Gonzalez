import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Categoria: {category}
                </p>
            </section> 
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item;