import React from 'react';
import '../../css/errors.css';
export const FormErrors = (Errors) => {
  return (
    <div className="wt-errors">
      {Object.keys(Errors.Errors).map((fieldName, i) => {
        if (Errors.Errors[fieldName].length > 0) {
          return <p key={i}>{Errors.Errors[fieldName]}</p>;
        } else {
          return '';
        }
      })}
    </div>
  );
};
