import { useEffect, useRef, useState } from 'react';

function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-preview ${isVisible ? 'fade-in' : 'hidden-section'}`}
    >
      <div className="about-preview-image">
        <div className="placeholder-image">☕</div>
      </div>
      <div className="about-preview-text">
        <h2>Our Story</h2>
        <p>
          Brew & Co. started as a small dream between friends who shared one
          passion: great coffee. Today, we continue to serve every cup with
          the same love and care as our very first day.
        </p>
        <a href="/about" className="about-link">Read More →</a>
      </div>
    </section>
  );
}

export default AboutPreview;