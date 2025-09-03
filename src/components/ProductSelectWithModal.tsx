'use client';

import React, { useState, ChangeEvent } from 'react';
import ProductModal from './ProductModal';


const initialProducts = [
  { name: 'Casting Powder', slug: 'casting-powder' },
  { name: 'Wax', slug: 'wax' },
  { name: 'Alloy', slug: 'alloy' },
  { name: 'Machine', slug: 'machine' },
  { name: 'Burs', slug: 'burs' },
  { name: 'Plating Solution', slug: 'plating-solution' },
  { name: 'Polishing Related items', slug: 'polishing-related-items' },
  { name: 'Micromotor', slug: 'micromotor' },
  { name: 'Melting Crucible', slug: 'melting-crucible' },
];

const ProductSelectWithModal: React.FC = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hidden values to submit
  const [hidden, setHidden] = useState({
    productName: '',
    productPrice: '',
    productCategory: '',
    competitorName: '',
    competitorProduct: '',
    competitorPrice: '',
    description: '',
  });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    setSelectedProductName(name);
    setHidden((s) => ({ ...s, productName: name })); // keep in sync
  };

  const handleSaveFromModal = (data: typeof hidden) => {
    // Save hidden values that will be posted with the main form
    setHidden((s) => ({ ...s, ...data, productName: selectedProductName || data.productName }));
    // Optionally add new product to list if name typed in modal differs
    const finalName = selectedProductName || data.productName;
    if (finalName && !products.find(p => p.name === finalName)) {
      setProducts((prev) => [...prev, { name: finalName, slug: `custom-${Date.now()}` }]);
      setSelectedProductName(finalName);
    }
  };

  return (
    <div className="relative flex flex-col mb-6 md:col-span-2">
      <label className="block font-medium mb-1 text-gray-700">
        Product <span className="text-red-500">*</span>
      </label>
      <div className="flex">
        <select
          name="product"
          required
          value={selectedProductName}
          onChange={handleSelectChange}
          className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select product</option>
          {products.map((prod) => (
            <option key={prod.slug} value={prod.name}>
              {prod.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          aria-label="Add product details"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r flex items-center justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="text-lg font-bold">+</span>
        </button>
      </div>

      {/* Hidden fields that carry the modal values into FormData */}
      <input type="hidden" name="productName" value={hidden.productName} />
      <input type="hidden" name="productPrice" value={hidden.productPrice} />
      <input type="hidden" name="productCategory" value={hidden.productCategory} />
      <input type="hidden" name="competitorName" value={hidden.competitorName} />
      <input type="hidden" name="competitorProduct" value={hidden.competitorProduct} />
      <input type="hidden" name="competitorPrice" value={hidden.competitorPrice} />
      <input type="hidden" name="description" value={hidden.description} />

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveFromModal}
      />
    </div>
  );
};

export default ProductSelectWithModal;
