import React from 'react';

export default function SurveyField({ input, label, meta: { error, touched} }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} stype={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
}
