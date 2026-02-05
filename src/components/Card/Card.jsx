import "./Card.scss";

const Card = ({
  children,
  variant = "default",
  hover = false,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <div
      className={`card card--${variant} ${
        hover ? "card--hover" : ""
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`card__header ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = "", ...props }) => (
  <div className={`card__body ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`card__footer ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`card__title ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`card__description ${className}`} {...props}>
    {children}
  </p>
);

const CardImage = ({ src, alt, className = "", ...props }) => (
  <div className={`card__image-container ${className}`}>
    <img src={src} alt={alt} className="card__image" {...props} />
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;

export default Card;
