'use client';
import React, {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './textinput.module.css';
import { InputTypes } from '@/interfaces/enums';

type InputProps = {
  value: Record<string, string>;
  setValue: React.Dispatch<SetStateAction<Record<string, string>>>;
  name: string;
  placeholder?: string;
  inputType?: InputTypes;
  required?: boolean;
  tooltip?: string;
  pattern?: string;
  autocomplete?: boolean;
  disabled?: boolean;
};

/**
 * Component for an HTMl text input. Style it as per your need once and get a uniform input design over your app
 * @component
 *
 * @param {object} value Pass a react state which has type object
 * @param {Dispatch<SetStateAction<object>>} setValue Pass the setState function to update the state
 * @param {string} name Pass this name prop to reference this input in the state object. This is also the name of the node in the DOM
 * @param {string} [placeholder=""] Pass a string to set the placeholder value of the input
 * @param {"text"|"email"|"password"} [inputType="text"] Pass the input type to provide appropriate validation for the input
 * @param {boolean} [required=false] Pass true if the text input is required
 * @param {string} tooltip Pass a string to provide the tooltip text. Also this string will be displayed if the validation fails
 * @param {string} pattern Pass a regex string in case validation is needed
 * @param {boolean} [autocomplete="off"] Pass appropriately for autocomplete use. Mainly used for field like email, username and password
 *
 */
function Input({
  value,
  setValue,
  name,
  placeholder = '',
  inputType = InputTypes.TEXT,
  required = false,
  pattern,
  tooltip,
  autocomplete = false,
  disabled = false,
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(
    inputType == 'password' ? false : true
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isVisible) {
      ref.current.type = 'text';
    } else {
      ref.current.type = 'password';
    }
  }, [isVisible]);

  const displayInvalid = (e: any) => {
    if (!tooltip || !ref.current) {
      return;
    }

    if (!ref.current.validity.valid) {
      ref.current.setCustomValidity(tooltip);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const obj = { ...value };
    obj[name] = e.target.value;
    setValue(obj);
  };

  return (
    <div className={styles.input_div}>
      <input
        name={name}
        value={{ ...value }[name]}
        type={inputType}
        ref={ref}
        placeholder={placeholder}
        className={styles.text_input}
        pattern={pattern}
        required={required}
        title={tooltip}
        autoComplete={autocomplete ? 'on' : 'off'}
        onInvalid={displayInvalid}
        onChange={handleChange}
        disabled={disabled}
      />

      {/* {inputType === 'password' ? (
        isVisible ? (
          <EyeOn
            height={20}
            width={20}
            fill={'#FFF'}
            className={styles.eye_button}
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
        ) : (
          <EyeOff
            height={20}
            width={20}
            fill={'#FFF'}
            className={styles.eye_button}
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
        )
      ) : undefined} */}
    </div>
  );
}

export default Input;
