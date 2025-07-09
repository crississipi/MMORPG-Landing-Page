"use client";

import React, { JSX, useState } from 'react'

interface CustomCheckboxProps {
    labelText: JSX.Element;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ labelText }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-start cursor-pointer select-none gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />

      <div
        className={`min-w-5 h-5 rounded-sm border-1 flex items-center justify-center transition-all
          ${checked ? 'bg-blue-500 border-white' : 'border-white/30'}`} >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {labelText}
    </label>
  )
}

export default CustomCheckbox
