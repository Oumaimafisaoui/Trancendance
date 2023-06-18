import { useState, FormEvent } from 'react';
import styles from "@/styles/loginForm.module.css";


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input_email}
          type="email"
          id="email"
          placeholder='abc@xyz.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.input_password}
          type="password"
          id="password"
          placeholder='********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.submit} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
