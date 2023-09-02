import { InputTypes, departments, batches } from '@/interfaces/enums';

const formFields = [
  {
    name: 'name',
    type: InputTypes.TEXT,
    placeholder: 'Full Name',
    tooltip: 'Name is required',
  },
  {
    name: 'email',
    type: InputTypes.EMAIL,
    placeholder: 'Email',
    tooltip: 'Email is required',
    disabled: true,
  },
  {
    name: 'phone',
    type: InputTypes.TEXT,
    placeholder: 'Phone Number',
    tooltip: 'Phone number is required',
    pattern: '^[0-9]*$',
  },
  {
    name: 'enrollment',
    type: InputTypes.TEXT,
    placeholder: 'Enrollment Number',
    tooltip: 'Enrollment Number is required',
  },
  {
    name: 'department',
    type: InputTypes.SELECT,
    placeholder: 'Department',
    tooltip: 'Department is required',
    options: Object.values(departments),
  },
  {
    name: 'year',
    type: InputTypes.SELECT,
    placeholder: 'Year',
    tooltip: 'Batch year is required',
    options: Object.values(batches),
  },
];

export default formFields;
