import { useEffect, useState } from 'react'
import { TProduct } from '../../interface/Product';
import instance from '~/apis';
import { Link } from 'react-router-dom';



const Productlist = () => {
    const [products, setProducts] = useState<TProduct[]>();
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await instance.get(`/products`)
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return (
        <div>
            <h1>Danh sách</h1>
            <div className='row'>
                {products?.map((item) => (
                    <div className='col-4'>
                        <div key={item.id}></div>
                        <Link to={`/shop/${item.id}`}>
                            <h3 className='card-title'>{item.title}</h3>
                        </Link>
                        <div>{item.price}</div>
                        <Link to={`/shop/${item.id}`}>
                            <img width={'100%'} src={item.thumbnail} alt="{item.title}" />
                        </Link>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productlist