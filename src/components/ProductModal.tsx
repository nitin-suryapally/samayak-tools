'use client';

import React, { useState } from 'react';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    productName: string;
    productPrice: string;
    productCategory: string;
    competitorName: string;
    competitorProduct: string;
    competitorPrice: string;
    description: string;
  }) => void;
};

// Centralized category list aligned with product families in the selector
const productCategories = [
  'Casting Powder',
  'Wax',
  'Alloy',
  'Machine',
  'Burs',
  'Plating Solution',
  'Polishing Related items',
  'Micromotor',
  'Melting Crucible',
];

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({
    productName: '',
    productPrice: '',
    productCategory: '',
    competitorName: '',
    competitorProduct: '',
    competitorPrice: '',
    description: '',
  });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Add Product Details</h3>

        <div className="grid grid-cols-1 gap-4">
          <input
            className="border rounded px-3 py-2"
            placeholder="Product Name"
            value={form.productName}
            onChange={update('productName')}
          />

          <select
            className="border rounded px-3 py-2"
            value={form.productCategory}
            onChange={update('productCategory')}
          >
            <option value="">Select Category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <input
            className="border rounded px-3 py-2"
            placeholder="Product Price"
            value={form.productPrice}
            onChange={update('productPrice')}
          />

          <input
            className="border rounded px-3 py-2"
            placeholder="Competitor Name"
            value={form.competitorName}
            onChange={update('competitorName')}
          />
          <input
            className="border rounded px-3 py-2"
            placeholder="Competitor Product"
            value={form.competitorProduct}
            onChange={update('competitorProduct')}
          />
          <input
            className="border rounded px-3 py-2"
            placeholder="Competitor Price"
            value={form.competitorPrice}
            onChange={update('competitorPrice')}
          />

          <textarea
            className="border rounded px-3 py-2"
            placeholder="Description"
            value={form.description}
            onChange={update('description')}
            rows={3}
          />
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button type="button" className="px-4 py-2 rounded border" onClick={onClose}>Cancel</button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-blue-600 text-white"
            onClick={() => { onSave(form); onClose(); }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
