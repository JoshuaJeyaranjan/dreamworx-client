import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${
        loading ? "btn--loading" : ""
      } ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <span className="btn__spinner">
          <span></span>
        </span>
      )}

      {icon && iconPosition === "left" && !loading && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}

      <span className="btn__content">{children}</span>

      {icon && iconPosition === "right" && !loading && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </button>
  );
};

export default Button;
