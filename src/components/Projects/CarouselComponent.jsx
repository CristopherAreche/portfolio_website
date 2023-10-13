import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"; // Asumiendo que estás utilizando Reactstrap para Bootstrap

const CarouselComponent = ({ projects }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = projects.map((project, index) => (
    <CarouselItem key={index}>
      <div
        style={{ width: "100%" }}
        className="container row d-flex justify-content-center"
      >
        <div
          key={index}
          className="text-white p-0 m-0"
          style={{ width: "55em" }}
        >
          <div className="card m-3 bg-black bg-opacity-50 rounded-4">
            <div className="row g-0">
              <div className="col-md-5" style={{ height: "17em" }}>
                <img
                  className="rounded-4 p-2 w-100 h-100"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div
                className="col-md-7"
                style={{
                  height: "17em",
                }}
              >
                <div className="card-body h-100 d-flex flex-column justify-content-evenly">
                  <h4
                    style={{ color: "rgb(104, 192, 92)" }}
                    className="card-title"
                  >
                    {project.name}
                  </h4>
                  <p className="card-text text-white fs-8">
                    {project.description}
                  </p>
                  <div className="d-flex gap-4">
                    <button
                      style={{ border: "1px solid rgb(104, 192, 92)" }}
                      className="btn btn-outline-success bg-transparent"
                    >
                      {project?.source_code ? (
                        <a
                          style={{ color: " rgb(104, 192, 92)" }}
                          className="text-decoration-none"
                          href={project.source_code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      ) : (
                        <a
                          style={{ color: " rgb(100, 100, 100)" }}
                          className="text-decoration-none"
                          href={project.source_code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          In Progress...
                        </a>
                      )}
                    </button>
                    <button
                      style={{ border: "1px solid rgb(104, 192, 92)" }}
                      className="btn btn-outline-success bg-transparent"
                    >
                      <a
                        style={{ color: " rgb(104, 192, 92)" }}
                        className="text-decoration-none"
                        href={project.deploy}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit
                      </a>
                    </button>
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    {project.stack.map((icons, index) => (
                      <img
                        key={index}
                        style={{ width: "1.5em" }}
                        src={icons}
                        alt={project}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{ width: "90vw" }}
    >
      <CarouselIndicators
        items={projects}
        activeIndex={activeIndex}
        onClickHandler={setActiveIndex}
      />
      {slides}

      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;
