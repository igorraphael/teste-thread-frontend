import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@rocketseat/unform';

const CustomSelect = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }
          return ref.state.value.value;
        }
      },
    });
  }, [error, fieldName, registerField, rest.isMulti]);
  return (
    <>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span style={{display: 'block', marginTop: 10}}>Tipo obrigatório</span>}
    </>
    
  );
};
export default CustomSelect;