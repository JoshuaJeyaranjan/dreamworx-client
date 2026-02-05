import "./Glitch.scss";

export default function Glitch({ subHeader, header, paragraph }) {
  return (
    <section className="glitch">
      <div className="glitch__text-container">
        {subHeader && <h3 className="glitch__sub-header">{subHeader}</h3>}
        {header && (
          <h2 className="glitch__header" data-text={header}>
            {header}
          </h2>
        )}
        {paragraph && <p className="glitch__paragraph">{paragraph}</p>}
      </div>
    </section>
  );
}
