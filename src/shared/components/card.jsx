/* eslint-disable react/prop-types */
import "./card.css";

function Cards(props) {
  const { leadingicon, label, title, href, email, subject, phone } = props;

  // Construct the link based on the available props
  let link = '';
  if (email) {
    link = `mailto:${email}?subject=${encodeURIComponent(subject || '')}}`;
  } else if (phone) {
    link = `https://wa.me/${phone}`;
  } else {
    link = href || '#';
  }

  const cardContent = (
    <div className="cards">
      <div className="cards-leading-icon">
        {leadingicon}
      </div>
      <div className="cards-label">
        <h6 style={{ margin: "0", marginTop: "5px", color: "#CFCFCF" }}>
          {label}
        </h6>
        <h6 style={{ margin: "0", marginTop: "5px", color: "#fff", fontSize:"12px"}}>
          {title}
        </h6>
      </div>
    </div>
  );

  return (
    <a href={link} className="cards-link" target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
}

export default Cards;
