import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
function App() {
  const signUpSchema = z
    .object({
      name: z
        .string()
        .min(3, { message: 'name must be at least 3 characters' }),
      email: z.string().email({ message: 'Invalid email address' }).max(20),
      password: z
        .string()
        .min(4, { message: 'password must be at least 4 characters' }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'password must match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  console.log(isSubmitting);
  console.log(errors);
  const submit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const name = watch('name');
    console.log(name);
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          style={{
            padding: '8px',
            width: '250px',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '6px',
          }}
          {...register('name')}
          placeholder="name"
        />
        <br />
        {errors?.name?.message && <p>{errors?.name?.message}</p>}
        <input
          type="text"
          style={{
            padding: '8px',
            width: '250px',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '6px',
          }}
          {...register('email')}
          placeholder="email"
        />
        <br />
        {errors.email && <p>{errors.email?.message}</p>}
        <input
          type="text"
          style={{
            padding: '8px',
            width: '250px',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '6px',
          }}
          placeholder="password"
          {...register('password')}
        />
        {errors.password && <p>{errors.password?.message}</p>}
        <br />
        <input
          type="text"
          style={{
            padding: '8px',
            width: '250px',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '6px',
          }}
          placeholder="confirm password"
          {...register('confirmPassword')}
        />
        <br />
        {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          submit
        </button>
      </form>
      <br />
      <br />
      <div
        style={{ width: '100%', height: '100vh', backgroundColor: 'red' }}
      ></div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <br />
        <br />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="show"
          // animate="show"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut
          omnis ea earum vitae, ipsa iusto incidunt error dolorum asperiores
          optio hic possimus consectetur ullam nihil repudiandae. Corporis,
          itaque mollitia.
        </motion.p>
        <div
          style={{ width: '100%', height: '100vh', backgroundColor: 'red' }}
        ></div>
      </div>
    </div>
  );
}

export default App;
