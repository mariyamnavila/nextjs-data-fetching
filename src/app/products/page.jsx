import { redirect } from 'next/navigation';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch('http://localhost:3000/api/items', { cache: 'force-cache' });
    const data = await res.json();

    if (data.length > 3) {
        redirect('/products/add');
    }

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