import myphoto from "./assets/myphoto.png"

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={myphoto} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            Hi, I’m Abubakr, a passionate Full Stack Developer with a knack for creating efficient and innovative web solutions. With a background in both front-end and back-end development, I enjoy crafting seamless user experiences and building robust, scalable applications.

I have a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js. Over the past few months, I’ve honed my skills by developing various projects in the finance and ecommerce sectors, focusing on performance, security, and scalability.
            </p>
            <p className="hero--section-description">
            Driven by curiosity and a love for problem-solving, I’m always exploring new technologies and pushing the boundaries of what can be achieved with code. When I'm not coding, I enjoy learning about design principles and contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
    );
  }