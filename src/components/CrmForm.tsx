'use client';

import React from 'react';
import { useActionState } from 'react';
import ProductSelectWithModal from './ProductSelectWithModal';
import { createLead, type LeadResult } from '../actions/createLead';

const sourceOptions = ['Website', 'Exhibition', 'Customer visit'];
const roleOptions = ['Decision Maker', 'Employee', 'Influencer'];
const customerTypeOptions = ['End user', 'Dealer'];
const contactOptions = ['New', 'Old'];
const typeOfLeadOptions = ['Sales', 'Service'];

// 28 Indian states (official list)
const stateOptions = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
  'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal'
];

export default function CrmForm() {
  const [state, action, pending] = useActionState<LeadResult | null, FormData>(createLead, null);

  return (
    <form action={action} className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Create New Lead</h2>

      {state && !state.ok && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
          <p className="font-medium">Submission failed</p>
          <p className="text-sm">{state.message}</p>
          {state.status && <p className="text-xs mt-1">Upstream {state.status} {state.statusText}</p>}
        </div>
      )}
      {state && state.ok && (
        <div className="mb-4 rounded border border-green-300 bg-green-50 p-3 text-green-700">
          <p className="font-medium">Lead submitted</p>
          <p className="text-sm">Upstream responded successfully.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Company <span className="text-red-500">*</span></label>
          <input name="company" type="text" required className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Enter company name" />
        </div>

        {/* Source */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Source <span className="text-red-500">*</span></label>
          <select name="source" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select source</option>
            {sourceOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        {/* First/Middle/Last Name */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">First Name <span className="text-red-500">*</span></label>
          <input name="firstName" type="text" required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Middle Name</label>
          <input name="middleName" type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Last Name <span className="text-red-500">*</span></label>
          <input name="lastName" type="text" required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>

        {/* Role, Customer Type, Contact */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Role <span className="text-red-500">*</span></label>
          <select name="role" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select role</option>
            {roleOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Customer Type <span className="text-red-500">*</span></label>
          <select name="customerType" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select customer type</option>
            {customerTypeOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Contact <span className="text-red-500">*</span></label>
          <select name="contact" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select contact</option>
            {contactOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        {/* Job title */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Job title</label>
          <input name="jobTitle" type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>

        {/* Phone/Phone2/Email */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Phone <span className="text-red-500">*</span></label>
          <input name="phone" type="tel" required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Phone2</label>
          <input name="phone2" type="tel" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Email</label>
          <input name="email" type="email" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>

        {/* Department, Type of Lead */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Department</label>
          <input name="department" type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Type of Lead <span className="text-red-500">*</span></label>
          <select name="typeOfLead" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select lead type</option>
            {typeOfLeadOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        {/* Product selection comp — sole source for product-related data */}
        <ProductSelectWithModal />

        {/* City, State, Address */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">City</label>
          <input name="city" type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">State <span className="text-red-500">*</span></label>
          <select name="state" required className="w-full border border-gray-300 rounded px-4 py-2">
            <option value="">Select state</option>
            {stateOptions.map((opt) => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1 text-gray-700">Address</label>
          <input name="address" type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>

        {/* File Name (Attachment) placeholder */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1 text-gray-700">File Name (Attachment)</label>
          <input name="attachment" type="file" accept="image/*" className="w-full border border-gray-300 rounded px-4 py-2" />
          <p className="text-xs text-gray-500 mt-1">File is not uploaded in this request; handle separately or send base64 if supported.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button type="submit" disabled={pending} className="bg-blue-600 disabled:opacity-60 hover:bg-blue-700 px-8 py-3 rounded text-white font-semibold w-full md:w-auto">
          {pending ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
