import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const LenisComponent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const section_1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      col_left,
      { y: 0 },
      { y: "170vh", duration: 1, ease: "none" },
      0
    );

    // eslint-disable-next-line
    const scroll_1 = ScrollTrigger.create({
      animation: timeln,
      trigger: section_1,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });

    // Ensure ScrollTrigger refreshes and works with the horizontal scroll
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="vertical" class="section_1">
        <div className="container">
          <div className="vertical__content">
            <div className="col col_left">
              <h2 className="vertical__heading">
                <span>ABOUT US</span>
              </h2>
            </div>
            <div className="col col_right">
              <div className="vertical__item">
                <h3>Welcome</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Who are we ?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
              <div className="vertical__item">
                <h3>Our Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LenisComponent;
