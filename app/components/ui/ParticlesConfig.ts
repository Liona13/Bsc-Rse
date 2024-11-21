import type { ISourceOptions } from "@tsparticles/engine"

export const particlesConfig: ISourceOptions = {
  background: {
    opacity: 0,
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: true,
          force: 10,
          smooth: 10
        }
      },
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.4,
        speed: 1,
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: ["#ffffff", "#3b82f6", "#8b5cf6"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.05,
      }
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.5,
      straight: false,
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200
        }
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
      value: { min: 0.1, max: 0.3 },
    },
    shape: {
      type: ["circle", "triangle"],
    },
    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      }
    },
  },
  detectRetina: true,
} as const; 