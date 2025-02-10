import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="section-header mb-6">
      <h2 className="section-header-title text-2xl font-semibold text-gray-800">{title}</h2>
      {description && <p className="section-header-description text-gray-600">{description}</p>}
    </div>
  );
};

interface FormCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const FormCard: React.FC<FormCardProps> = ({ title, icon, children }) => {
  return (
    <div className="form-card bg-white shadow rounded-lg p-6 mb-6">
      <div className="form-card-header flex items-center mb-4">
        {icon && <span className="form-card-icon mr-2"><i className={`fa fa-${icon}`}></i></span>}
        <h3 className="form-card-title text-lg font-medium text-gray-700">{title}</h3>
      </div>
      <div className="form-card-content">{children}</div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', value, onChange, required = false, placeholder }) => {
  return (
    <div className="input-field mb-4">
      <label htmlFor={label} className="input-field-label block text-gray-700 text-sm font-bold mb-2">{label}{required && <span className="text-red-500">*</span>}</label>
      <input
        type={type}
        id={label}
        className="input-field-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange, required = false }) => {
  return (
    <div className="select-field mb-4">
      <label htmlFor={label} className="select-field-label block text-gray-700 text-sm font-bold mb-2">{label}{required && <span className="text-red-500">*</span>}</label>
      <select
        id={label}
        className="select-field-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, value, onChange, rows = 3, required = false }) => {
  return (
    <div className="textarea-field mb-4">
      <label htmlFor={label} className="textarea-field-label block text-gray-700 text-sm font-bold mb-2">{label}{required && <span className="text-red-500">*</span>}</label>
      <textarea
        id={label}
        className="textarea-field-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        required={required}
      />
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
