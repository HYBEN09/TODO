function Button({ onClick, children, className, type }) {
  const baseClassName = 'rounded-md py-2 px-4 ml-4 dark:bg-gray-500';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClassName} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
