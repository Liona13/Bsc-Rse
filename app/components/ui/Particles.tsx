'use client'

import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!mounted) return null

  return (
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "connect", "bubble"],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
                color: theme === "dark" ? "#ffffff" : "#000000"
              }
            },
            connect: {
              distance: 150,
              links: {
                opacity: 0.2
              },
              radius: 120
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.4,
              opacity: 0.4,
              color: theme === "dark" ? "#ffffff" : "#000000"
            }
          }
        },
        particles: {
          color: {
            value: theme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            color: theme === "dark" ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
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
              speed: 0.8,
              minimumValue: 0.1,
              sync: false
            },
            random: {
              enable: true,
              minimumValue: 0.1
            },
            value: 0.5
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6
              }
            }
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.5,
              color: {
                value: theme === "dark" ? "#ffffff" : "#000000"
              }
            }
          },
          wobble: {
            distance: 10,
            enable: true,
            speed: {
              min: -2,
              max: 2
            }
          },
          roll: {
            darken: {
              enable: true,
              value: 25
            },
            enlighten: {
              enable: true,
              value: 25
            },
            enable: true,
            speed: {
              min: 15,
              max: 25
            }
          },
          zIndex: {
            value: { min: -1, max: 1 },
            opacityRate: 0.5,
            sizeRate: 0.5,
            velocityRate: 0.5
          }
        },
        detectRetina: true,
        background: {
          color: "transparent"
        }
      }}
    />
  )
} 