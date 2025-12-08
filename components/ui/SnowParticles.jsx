"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function SnowParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-snow"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1
        },
        particles: {
          number: { value: 50 },
          move: {
            direction: "bottom",
            speed: 1.2
          },
          size: { value: 12 },
          opacity: { value: 1 },
          shape: {
            type: "image",
            image: [
              {
                src: "/images/snow-flake.png",
                width: 32,
                height: 32
              }
            ]
          }
        }
      }}
    />
  );
}
