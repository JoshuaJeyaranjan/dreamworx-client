import "./ChooseUs.scss";

const reasons = [
  {
    title: "Comprehensive Expertise",
    text: "With four specialized divisions covering car care, upholstery, customization, mechanical and body shop services, we're your one-stop destination for all things automotive.",
  },
  {
    title: "Personalized Approach",
    text: "We understand that every vehicle is unique, just like its owner. Our personalized approach ensures that your specific needs are met, delivering a tailored and satisfying experience.",
  },
  {
    title: "Skilled Craftsmanship",
    text: "Our team is comprised of highly skilled professionals who bring a passion for perfection to every job. From car wash to engine repair, expect nothing but the best.",
  },
  {
    title: "Transparency and Trust",
    text: "We believe in open communication and transparency. From clear explanations of services to fair pricing, you can trust us to keep you informed at every step.",
  },
  {
    title: "Innovation at Every Turn",
    text: "Stay ahead of the curve with our innovative services, including ceramic coating, PPF, and smart paint. We’re always exploring new techniques and technologies to enhance your vehicle.",
  },
  {
    title: "Choose Dreamworx",
    text: "For a transformative automotive experience that goes beyond the ordinary. Your journey deserves the best, and we’re here to deliver.",
  },
];

export default function ChooseUs() {
  return (
    <section className="choose-us">
      <h1 className="choose-us__header">Why Choose Us?</h1>

      <div className="choose-us__grid">
        {reasons.map((reason, idx) => (
          <div key={idx} className="choose-us__card">
            <h2 className="choose-us__title">{reason.title}:</h2>
            <p className="choose-us__text">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
