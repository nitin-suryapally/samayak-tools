'use client';
import { productCategories } from '@/data';
import React, { useState, ChangeEvent } from 'react';

export interface ProductFormData {
  productName: string;
  productCategory: string;
  productPrice: string;
  description: string;
  competitorName: string;
  competitorProductName: string;
  competitorPrice: string;
}

export interface Product {
  name: string;
  slug: string;
  category: string;
}

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

const initialFormData: ProductFormData = {
  productName: '',
  productCategory: '',
  productPrice: '',
  description: '',
  competitorName: '',
  competitorProductName: '',
  competitorPrice: '',
};

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState<ProductFormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!form.productName.trim()) newErrors.productName = 'Product name is required';
    if (!form.productCategory) newErrors.productCategory = 'Product category is required';
    if (form.productPrice && Number(form.productPrice) < 0) newErrors.productPrice = 'Product price must be positive';
    if (form.competitorPrice && Number(form.competitorPrice) < 0) newErrors.competitorPrice = 'Competitor price must be positive';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onAdd({
      name: form.productName,
      slug: form.productName.toLowerCase().replace(/\s+/g, '-'),
      category: form.productCategory,
    });
    setForm(initialFormData);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          aria-label="Close modal"
        >×</button>
        <h3 className="text-xl font-semibold mb-4">Add Product</h3>
        <div className="space-y-3">

          <div>
            <label className="block text-gray-700 font-medium mb-1">Product Name *</label>
            <input type="text" name="productName" value={form.productName} onChange={handleChange}
              className={`w-full border ${errors.productName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
              required autoFocus />
            {errors.productName && <div className="text-red-600 text-sm mt-1">{errors.productName}</div>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Product Category *</label>
            <select
              name="productCategory"
              value={form.productCategory}
              onChange={handleChange}
              required
              className={`w-full border ${errors.productCategory ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
            >
              <option value="">Select category</option>
              {productCategories.map(cat => (
                <option key={cat.slug} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            {errors.productCategory && <div className="text-red-600 text-sm mt-1">{errors.productCategory}</div>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Product Price</label>
            <input type="number" name="productPrice" value={form.productPrice} onChange={handleChange}
              className={`w-full border ${errors.productPrice ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
              min={0} step={0.01} />
            {errors.productPrice && <div className="text-red-600 text-sm mt-1">{errors.productPrice}</div>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Competitor Name</label>
            <input type="text" name="competitorName" value={form.competitorName} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Competitor Product Name</label>
            <input type="text" name="competitorProductName" value={form.competitorProductName} onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Competitor Price</label>
            <input type="number" name="competitorPrice" value={form.competitorPrice} onChange={handleChange}
              className={`w-full border ${errors.competitorPrice ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
              min={0} step={0.01} />
            {errors.competitorPrice && <div className="text-red-600 text-sm mt-1">{errors.competitorPrice}</div>}
          </div>
          <div className="text-right mt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-white font-semibold"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
