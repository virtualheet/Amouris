import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Project.css";

import ParallaxImage from  "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import workList from "../../data/workList";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  const { projectSlug } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  // Helper function to check if a file is a GIF
  const isGif = (filename) => {
    return filename.toLowerCase().endsWith('.gif');
  };

  useEffect(() => {
    // Find the current project based on slug
    const currentProject = workList.find((work) => work.slug === projectSlug);
    
    if (currentProject) {
      setProject(currentProject);
      
      // Find the next project for navigation
      const currentIndex = workList.findIndex((work) => work.slug === projectSlug);
      const nextIndex = (currentIndex + 1) % workList.length;
      setNextProject(workList[nextIndex]);
    }
  }, [projectSlug]);

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            {project.category}
          </AnimatedCopy>
          <AnimatedCopy tag="h1" delay={1}>
            {project.title}
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            {isGif(project.image) ? (
              <img src={project.image} alt={project.title} className="gif-image" />
            ) : (
              <ParallaxImage src={project.image} alt={project.title} />
            )}
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.description}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Year
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.year}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.category}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Client
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.client}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Designer
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Deep Patel
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            {project.images && project.images.map((image, index) => (
              <div className={`project-img ${isGif(image) ? 'gif-container' : ''}`} key={index}>
                <div className="project-img-wrapper">
                  {isGif(image) ? (
                    <img src={image} alt={`${project.title} image ${index + 1}`} className="gif-image" />
                  ) : (
                    <ParallaxImage src={image} alt={`${project.title} image ${index + 1}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Services
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.services && project.services.join(", ")}
            </AnimatedCopy>
          </div>
        </section>

        {nextProject && (
          <section className="next-project">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Next Project
            </AnimatedCopy>
            <AnimatedCopy tag="h3" animateOnScroll={true}>
              Next
            </AnimatedCopy>

            <Link to={`/project/${nextProject.slug}`} className="next-project-link">
              <div className="next-project-img">
                <div className="next-project-img-wrapper">
                  {isGif(nextProject.image) ? (
                    <img src={nextProject.image} alt={nextProject.title} className="gif-image" />
                  ) : (
                    <ParallaxImage src={nextProject.image} alt={nextProject.title} />
                  )}
                </div>
              </div>

              <AnimatedCopy tag="h4" animateOnScroll={true}>
                {nextProject.title}
              </AnimatedCopy>
            </Link>
          </section>
        )}
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
