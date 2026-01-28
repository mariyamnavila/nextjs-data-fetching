
import React from 'react';
import { getProducts } from '../actions/products/getProducts';

// export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, { cache: 'force-cache' });
    // const data = await res.json();

    const data = await getProducts();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;