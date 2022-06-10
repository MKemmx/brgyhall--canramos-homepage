import React, { useEffect } from "react";
import "./App.css";

import AOS from "aos";
import { BsMegaphone } from "react-icons/bs";

function App() {
  const iframe = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1957.5328235492404!2d125.0148878915123!3d11.108485405942526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1654867972118!5m2!1sen!2sph" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-container">
          <h3 className="title"> SK Canramos Project </h3>
          {/* LIST */}
          <ul className="navlist">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#map">MAP</a>
            </li>
            <li> LOGIN </li>
          </ul>
        </div>
      </div>
      {/* HOME PAGE */}
      <section id="home" className="home">
        <div className="home-container">
          {/* SK IMAGE */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="sk-image-container"
          >
            <img
              data-aos-duration="1500"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sangguniang_Kabataan_logo.svg/2048px-Sangguniang_Kabataan_logo.svg.png"
              alt="sk-image"
            />
          </div>
          {/* HOME TEXT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="home-text-container"
          >
            <h2> WELCOME TO</h2>
            <h1> BARANGAY CANRAMOS</h1>
            <p> Barangay Canramos Tanauan Leyte</p>
            <p> Open Hours of Barangay: Moday to Friday (8AM - 5PM)</p>
            <p>brgycanramos@gmail.com / 0912-123-3211</p>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="project" className="project">
        <div className="project-container">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="project-text"
          >
            <h2> PROJECTS </h2>
            <p> SK Projects </p>
          </div>
          {/* PROJECT GALLERY */}
          <div className="project-gallery">
            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic.png?resize=840%2C473&ssl=1"
              alt="image-1"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-1.png?resize=840%2C473&ssl=1
              "
              alt="image-2"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="image 3"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="image-4"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-4.png?resize=840%2C473&ssl=1"
              alt="image-5"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="image 6"
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <div id="services" className="services">
        <div className="services-container">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="services-text"
          >
            <h2> Services </h2>
            <p> Offered Documents </p>
          </div>
          {/* CARDS */}
          <div className="cards-container">
            {/* Card 1 */}
            <div
              data-aos="fade-right"
              data-aos-duration="1700"
              className="card"
            >
              <div className="card-logo">
                <BsMegaphone size={40} />
              </div>
              <div className="card-title">BARANGAY CLEARANCE</div>
              <div className="card-text-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt eos est et. Reiciendis, accusamus, sapiente
                  exercitationem dolore perspiciatis nostrum a, quas soluta
                  explicabo quia repellat vero. Officiis, nisi laudantium? Quos!
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div data-aos="fade-up" data-aos-duration="1700" className="card">
              <div
                data-aos="fade-top"
                data-aos-duration="1700"
                className="card-logo"
              >
                <BsMegaphone size={40} />
              </div>
              <div className="card-title">BARANGAY INDIGENCY</div>
              <div className="card-text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eos est et. Reiciendis, accusamus, sapiente
                exercitationem dolore perspiciatis nostrum a, quas soluta
                explicabo quia repellat vero. Officiis, nisi laudantium? Quos!
              </div>
            </div>
            {/* BARANGAY REQUEST */}
            <div data-aos="fade-left" data-aos-duration="1700" className="card">
              <div className="card-logo">
                <BsMegaphone size={40} />
              </div>
              <div className="card-title">BARANGAY REQUEST</div>
              <div className="card-text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eos est et. Reiciendis, accusamus, sapiente
                exercitationem dolore perspiciatis nostrum a, quas soluta
                explicabo quia repellat vero. Officiis, nisi laudantium? Quos!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MAP SECTION */}
      <section id="map" className="map">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="map-container"
        >
          <div className="map-text">
            <h2> MAP </h2>
            <p> Located (Near TSCHI School) </p>
          </div>
          <Iframe iframe={iframe} />
        </div>
      </section>
      {/* Footer */}
      <section className="footer">
        <div className="footer-container">
          <p>Canramos SK Project &copy; 2022</p>
        </div>
      </section>
    </>
  );
}

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default App;
