'use client';
import { useRouter } from "next/navigation";

const ProductAddForm = () => {
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const productData = {
            name: formData.get('productName'),
            price: formData.get('productPrice'),
            description: formData.get('productDescription'),
        };
        const res = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        const result = await res.json();
        console.log("Product added:", result);
        form.reset()
        router.push('/products');
        router.refresh();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="productName" className="border border-white" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="productPrice">Product Price:</label>
                    <input type="number" id="productPrice" name="productPrice" className="border border-white" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="productDescription">Product Description:</label>
                    <textarea id="productDescription" name="productDescription" className="border border-white" required></textarea>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductAddForm;