import React from 'react';

const FormInput = ({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  rows
}) => {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-400 mb-1"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea 
          id={id}
          rows={rows || 4}
          className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input 
          type={type}
          id={id}
          className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;