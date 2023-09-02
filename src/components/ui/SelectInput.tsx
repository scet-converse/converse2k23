import React from 'react';

import styles from './textinput.module.css';

function SelectInput({
  value,
  setValue,
  name,
  placeholder = '',
  required = false,
  tooltip,
  autocomplete = false,
  options = [],
}: any) {
  const handleOnChange = (e: any) => {
    const obj = { ...value };
    obj[name] = e.target.value;
    setValue(obj);
  };

  return (
    <div className={styles.input_div}>
      <div className={`${styles.text_input}`}>
        <select
          name={name}
          placeholder={placeholder}
          required={required}
          title={tooltip}
          autoComplete={autocomplete ? 'on' : 'off'}
          className={` ${styles.select_input}`}
          onChange={handleOnChange}
        >
          <option value="">{placeholder}</option>
          {options.map((opt: string) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
