export enum batches {
  FIRST = 'First',
  SECOND = 'Second',
  THIRD = 'Third',
  FOURTH = 'Fourth',
}

export enum departments {
  IT = 'Information Technology Engineering',
  CO = 'Computer Engineering',
  AIDS = 'Artificial Intelligence & Data Science',
  EC = 'Electronics and Communication Engineering',
  EL = 'Electrical Engineering',
  CH = 'Chemical Engineering',
  CL = 'Civil Engineering',
  IC = 'Instrumentation and Contol Engineering',
  MH = 'Mechanical Engineering',
  MCA = 'Master of Computer Applications',
  TX = 'Textile Engineering',
}

export enum InputTypes {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
}

type User = {
  name: string;
  collegeName: string;
  year: batches;
  department: departments;
  email: string;
  phone: string;
};

export default User;
