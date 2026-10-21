import styles from './Button.module.css';

export function Button({ children, onClick, href, variant = 'dark', type = 'button', className = '' }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  if (href) return <a className={classes} href={href}>{children}</a>;
  return <button className={classes} onClick={onClick} type={type}>{children}</button>;
}