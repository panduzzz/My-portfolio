import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.png' alt='Pavithra' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Pavithra, Computer science engineering student, currently studying 2nd year in Ramaiah university of applied sciences,peenya,bengaluru,karnataka..</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
