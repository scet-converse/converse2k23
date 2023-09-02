'use client';
import React, { FormEvent, useState } from 'react';
import { InputTypes } from '@/interfaces/enums';
import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import formFields from '@/app/data/onboardingForm';

function Form({ user }: any) {
  const [form, setForm] = useState<Record<string, string>>({
    name: '',
    phone: '',
    enrollment: '',
    department: '',
    year: '',
    email: user.emailAddresses[0]['emailAddress'],
  });

  const handleSubmit: React.FormEventHandler<HTMLElement> = (
    e: FormEvent<HTMLElement>
  ) => {
    e.preventDefault();
    console.log(form);
    // TODO: Save user details in DB after validation
  };

  return (
    <div className="card w-4/5 md:w-2/5 bg-gray-900 p-10 rounded-lg">
      <div className="header mb-8">
        <h3 className="text-4xl font-bold mb-2">Onboard</h3>
        <p className="text-md">to continue for Converse 2023</p>
      </div>
      <div className="content mb-8">
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            if (field.type === InputTypes.SELECT) {
              return (
                <SelectInput
                  key={field.name}
                  value={form}
                  setValue={setForm}
                  name={field.name}
                  placeholder={field.placeholder}
                  tooltip={field.tooltip}
                  required={true}
                  options={field.options}
                />
              );
            }

            return (
              <TextInput
                key={field.name}
                value={form}
                setValue={setForm}
                name={field.name}
                placeholder={field.placeholder}
                inputType={field.type}
                tooltip={field.tooltip}
                disabled={field.disabled}
                pattern={field.pattern}
                required
              />
            );
          })}
          <button className="bg-gray-800 px-4 py-2 rounded-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
