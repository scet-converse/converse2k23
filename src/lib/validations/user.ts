import * as zod from 'zod';

export const userSchema = zod.object({
  name: zod
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(32, {
      message: 'Name must be at most 32 characters long',
    }),

  mobile: zod.coerce
    .number()
    .min(1000000000, {
      message: 'Mobile number must be 10 digits long',
    })
    .max(9999999999, {
      message: 'Mobile number must be 10 digits long',
    }),

  enroll: zod.string().min(12, {
    message: 'Enrollment number must be at least 12 characters long',
  }),

  college: zod.string().min(3, {
    message: 'College must be at least 3 characters long',
  }),

  branch: zod.string(),

  year: zod.coerce.number(),
});
