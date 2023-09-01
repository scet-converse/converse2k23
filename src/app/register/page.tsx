'use client';

import User, {
  InputTypes,
  batches,
  departments,
} from '@/interfaces/user.interface';
import { FC, ReactElement, useState } from 'react';
import TextInput from '@/components/TextInput';
import Link from 'next/link';

type RegisterProps = {
  eventTitle: string;
  eventDate: Date;
  user?: User;
};

const formFields = [
  {
    name: 'name',
    type: InputTypes.TEXT,
    placeholder: 'Name',
    tooltip: 'Name is required',
  },
  {
    name: 'department',
    type: InputTypes.TEXT,
    placeholder: 'Department',
    tooltip: 'Department is required',
  },
  {
    name: 'year',
    type: InputTypes.TEXT,
    placeholder: 'Year',
    tooltip: 'Batch year is required',
  },
  {
    name: 'email',
    type: InputTypes.EMAIL,
    placeholder: 'Email',
    tooltip: 'Email is required',
  },
];
const now = new Date();

const bhagya: User = {
  name: 'Bhagya Patel',
  year: batches.FOURTH,
  department: departments.IT,
  collegeName: 'SCET',
  phone: '1234567890',
  email: 'bhagya@mail.com',
};

const Register: FC<RegisterProps> = ({
  eventTitle = 'Bug Buzz',
  eventDate = now,
  user = bhagya,
}): ReactElement => {
  const [form, setForm] = useState<Record<string, string>>(user ? user : {});

  console.log(form);

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="w-4/5 md:w-1/3">
        <p className="mb-[20%] cursor-pointer">
          <Link href="/">&larr; &nbsp; Home</Link>
        </p>
        <h1>Register for</h1>
        <p className="text-4xl font-bold">{eventTitle}</p>
        {eventDate && (
          <p className="text-md">
            {eventDate.toLocaleDateString('en-US', { dateStyle: 'long' })}
          </p>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form my-8">
            {formFields.map((field, idx) => {
              return (
                <TextInput
                  key={idx}
                  value={form}
                  setValue={setForm}
                  inputType={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  tooltip={field.tooltip}
                />
              );
            })}
          </div>
          <button
            className="border-white border-[1px] hover:bg-slate-300 hover:text-black p-2 rounded transition-all"
            type="submit"
          >
            Confirm Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
