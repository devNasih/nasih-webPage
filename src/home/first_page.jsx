import "../home/first_page.css";

export default function FirstPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 user-Image">
          <div className="Image-0">
            <img
              src="/public/assets/DSC00052.JPG"
              alt="my-image"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 user-details">
          <div className="greetings-home">
            <h6>Hello, I&apos;m</h6>
          </div>
          <div className="User-name">
            <h3>Nasih Ameen K</h3>
          </div>
          <div className="user-designation">
            <h4>Full Stack Developer</h4>
          </div>
          <div className="user-buttons">
            <button className="resume-btn">Resume</button>
            <button className="contact-btn">Contact Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
