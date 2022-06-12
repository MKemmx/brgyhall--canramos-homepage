import React from "react";

// Component
import Footer from "./Footer";

import { BsMegaphone } from "react-icons/bs";

const Content = () => {
  const iframe = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1957.5328235492404!2d125.0148878915123!3d11.108485405942526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1654867972118!5m2!1sen!2sph" width="100%" height="500vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <div>
      <section id="home" className="home">
        <div className="home-container">
          {/* SK IMAGE */}
          <div className="sk-image-container">
            <img
              className="animate__animated animate__bounce animate__delay-0.5s"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sangguniang_Kabataan_logo.svg/2048px-Sangguniang_Kabataan_logo.svg.png"
              alt="sk-logo"
            />
          </div>
          {/* HOME TEXT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1800"
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
      <section id="projects" className="project">
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
              alt="project-1"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-1.png?resize=840%2C473&ssl=1
              "
              alt="project-2"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="project-3"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="project-4"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-4.png?resize=840%2C473&ssl=1"
              alt="project-5"
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1700"
              src="https://i0.wp.com/travelwithkarla.com/wp-content/uploads/2021/04/Sangguniang-Kabataan-Projects-during-Pandemic-3.png?resize=840%2C473&ssl=1"
              alt="project-6"
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <div id="services" className="services">
        <div className="services-container">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="services-text"
          >
            <h2>Services</h2>
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
            <p>
              Located @ Near Tanauan School Of Craftsmanship & Home Industries
              (TSCHI School)
            </p>
          </div>
          <Iframe iframe={iframe} />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default Content;
