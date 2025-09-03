'use client';

import React from 'react';
import { useActionState } from 'react';
import { createLeadSimple, type LeadResult } from '../actions/createLeadSimple';

const initial: LeadResult | null = null;

export default function ContactForm() {
  // Same pattern as CRM: state, formAction, pending from useActionState
  const [state, formAction, pending] = useActionState<LeadResult | null, FormData>(
    createLeadSimple,
    initial
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent py-12 md:py-24">
      <div className="bg-black rounded-xl p-4 md:p-8 w-full max-w-2xl">
        <div className="bg-white rounded-xl w-full h-full p-6 md:p-10">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-7 mt-1 tracking-wide">
            CONNECT WITH US
          </h1>

          <form action={formAction} className="space-y-5" noValidate>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">FULL NAME*</label>
              <input type="text" name="full_name" required className="w-full border rounded-full px-4 py-2 text-black bg-white" />
            </div>

            <div>
              <label className="block font-bold text-xs mb-1 ml-1">EMAIL*</label>
              <input type="email" name="email" required className="w-full border rounded-full px-4 py-2 text-black bg-white" />
            </div>

            <div>
              <label className="block font-bold text-xs mb-1 ml-1">PHONE NO.*</label>
              <input type="tel" name="phone" required className="w-full border rounded-full px-4 py-2 text-black bg-white" />
            </div>

            <div>
              <label className="block font-bold text-xs mb-1 ml-1">COMPANY (OPTIONAL)</label>
              <input type="text" name="company" className="w-full border rounded-full px-4 py-2 text-black bg-white" />
            </div>

            <div>
              <label className="block font-bold text-xs mb-1 ml-1">DESCRIPTION</label>
              <textarea name="description" rows={4} className="w-full border rounded-2xl px-4 py-2 text-black bg-white" />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={pending}
                className="bg-black text-white px-10 py-2 rounded font-semibold w-full"
              >
                {pending ? 'Submitting…' : 'SUBMIT'}
              </button>
            </div>

            {state && !state.ok && (
              <p className="text-center text-xs mt-2 font-medium text-red-600">
                {state.message || 'Submission failed'}
              </p>
            )}
            {state && state.ok && (
              <p className="text-center text-xs mt-2 font-medium text-green-700">
                Message sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
