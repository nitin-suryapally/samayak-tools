import React from 'react';
import ProductSelectWithModal from './ProductSelectWithModal';


const sourceOptions = ["Exhibition", "Customer visit"];
const roleOptions = ["Decision maker", "Employee", "Influencer"];
const customerTypeOptions = ["End user", "Dealer"];
const contactOptions = ["New", "Old"];
const typeOfLeadOptions = ["Sales", "Service"];
const stateOptions = ["State 1", "State 2"];

async function createLead(formData: FormData) {
    'use server';
    // Gather all the field values as needed
    const payload = {
        company: formData.get('company'),
        source: formData.get('source'),
        firstName: formData.get('firstName'),
        role: formData.get('role'),
        customerType: formData.get('customerType'),
        contact: formData.get('contact'),
        typeOfLead: formData.get('typeOfLead'),
        product: formData.get('product'),      // comes from the hidden input
        state: formData.get('state'),
        // attachment: formData.get('attachment'), // handle as needed for file upload
        // etc...
    };

    console.log('Submitting lead:', payload);

    // POST to your API endpoint
    const res = await fetch('https://your.api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        throw new Error('Failed to submit lead');
    }
``
    // Optionally redirect or revalidate or return something
}


const CrmForm = () => (
    <form
        action={createLead}
        className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-3xl mx-auto my-10"
    // encType="multipart/form-data"
    >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Create New Lead</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Company <span className="text-red-500">*</span>
                </label>
                <input
                    name="company"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter company name"
                />
            </div>
            {/* Source */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Source <span className="text-red-500">*</span>
                </label>
                <select
                    name="source"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select source</option>
                    {sourceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* First Name */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    First Name <span className="text-red-500">*</span>
                </label>
                <input
                    name="firstName"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter first name"
                />
            </div>
            {/* Role */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Role <span className="text-red-500">*</span>
                </label>
                <select
                    name="role"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select role</option>
                    {roleOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* Customer Type */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Customer Type <span className="text-red-500">*</span>
                </label>
                <select
                    name="customerType"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select customer type</option>
                    {customerTypeOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* Contact */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Contact <span className="text-red-500">*</span>
                </label>
                <select
                    name="contact"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select contact</option>
                    {contactOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* Type of Lead */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    Type of Lead <span className="text-red-500">*</span>
                </label>
                <select
                    name="typeOfLead"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select lead type</option>
                    {typeOfLeadOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* Product Category */}
            <ProductSelectWithModal />
            {/* State */}
            <div>
                <label className="block font-medium mb-1 text-gray-700">
                    State <span className="text-red-500">*</span>
                </label>
                <select
                    name="state"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Select state</option>
                    {stateOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            {/* Business Card Attachment */}
            <div className="md:col-span-2">
                <label className="block font-medium mb-1 text-gray-700">
                    Business Card (Image) <span className="text-red-500">*</span>
                </label>
                <input
                    name="attachment"
                    type="file"
                    accept="image/*"
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2"
                />
            </div>
        </div>
        <div className="mt-8 text-center">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded text-white font-semibold transition-colors w-full md:w-auto"
            >
                Submit
            </button>
        </div>
    </form>
);

export default CrmForm;
