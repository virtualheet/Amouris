import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>2021</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="" />
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              I'm Deep Patel — a UI/UX, branding and logo designer focused on creating impactful visual identities and intuitive digital experiences that help brands stand out and connect with their audience.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              For me, design is about solving problems beautifully — it's where strategy meets creativity. I believe in thoughtful simplicity, purposeful aesthetics, and design that communicates clearly and memorably.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Every brand has a unique story to tell, and I'm passionate about translating those narratives into compelling visual languages. If my design resonates and drives results — I consider that true success.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/services-banner.jpg" alt="" />
            </div>
            <p className="primary">Crafted with Strategy</p>
          </div>
          <div className="services-col">
            <h4>
              I approach each project as a strategic partnership, combining research and creativity to develop designs that are not only visually compelling but also strategically sound. My process is collaborative, thoughtful, and results-driven.
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Brand Identity</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I create comprehensive brand identities that tell cohesive stories across all touchpoints. From logo design and color palettes to typography and visual systems, I build brands that are distinctive, adaptable, and aligned with business objectives.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>UI/UX Design</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I craft digital interfaces that prioritize both aesthetics and usability. My approach centers on understanding user needs and business goals to create seamless experiences that guide users intuitively while reinforcing brand identity.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Logo Design</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    I design logos that distill brand essence into memorable visual marks. My process is rooted in strategic thinking and refinement, ensuring each logo is versatile, distinctive, and capable of standing the test of time while communicating core brand values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


       
        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
