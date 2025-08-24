'use client';
import React, { useState, ChangeEvent } from 'react';
import AddProductModal, { Product } from './AddProductModal';

const initialProducts: Product[] = [
    { name: 'Casting Powder', slug: 'casting-powder', category: 'Casting Powder' },
    { name: 'Wax', slug: 'wax', category: 'Wax' },
    { name: 'Alloy', slug: 'alloy', category: 'Alloy' },
    { name: 'Machine', slug: 'machine', category: 'Machine' },
    { name: 'Burs', slug: 'burs', category: 'Burs' },
    { name: 'Plating Solution', slug: 'plating-solution', category: 'Plating Solution' },
    { name: 'Polishing Related items', slug: 'polishing-related-items', category: 'Polishing Related items' },
    { name: 'Micromotor', slug: 'micromotor', category: 'Micromotor' },
    { name: 'Melting Crucible', slug: 'melting-crucible', category: 'Melting Crucible' },
];

const ProductSelectWithModal: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<string>('');

    const handleAddProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
        setSelectedProduct(product.name);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(e.target.value);
    };

    return (
        <div className="relative flex flex-col mb-6">
            <label className="block font-medium mb-1 text-gray-700">
                Product <span className="text-red-500">*</span>
            </label>
            <div className="flex">
                <select
                    name="product"
                    required
                    value={selectedProduct}
                    onChange={handleSelectChange}
                    className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select product</option>
                    {products.map((prod) => (
                        <option key={prod.slug} value={prod.name}>
                            {prod.name} {prod.category ? `(${prod.category})` : ''}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    aria-label="Add product"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r flex items-center justify-center"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className="text-lg font-bold">+</span>
                </button>
            </div>
            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddProduct}
            />
        </div>
    );
};

export default ProductSelectWithModal;
