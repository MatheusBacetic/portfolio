"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/app/data";

const firewallScreenshots = [
  {
    src: "/projects/server-nginx-firewall/nftables-ruleset.png",
    alt: "Ruleset do firewall nftables no terminal",
    label: "nftables ruleset",
  },
  {
    src: "/projects/server-nginx-firewall/nginx-home.png",
    alt: "Página inicial servida pelo Nginx no laboratório",
    label: "nginx server",
  },
  {
    src: "/projects/server-nginx-firewall/logs.png",
    alt: "Logs e monitoramento do servidor seguro",
    label: "security logs",
  },
  {
    src: "/projects/server-nginx-firewall/ssh-mobile.png",
    alt: "Acesso SSH ao servidor pelo dispositivo autorizado",
    label: "authorized ssh",
  },
];

const evoluzioneScreenshots = [
  {
    src: "/projects/evoluzione/evo1.png",
    alt: "Interface da plataforma empresarial Evoluzione",
    label: "evoluzione overview",
  },
  {
    src: "/projects/evoluzione/evo2.png",
    alt: "Central de comando do Evoluzione",
    label: "central de comando",
  },
  {
    src: "/projects/evoluzione/image.png",
    alt: "Fluxo operacional da plataforma Evoluzione",
    label: "fluxo operacional",
  },
  {
    src: "/projects/evoluzione/evo3.png",
    alt: "Interface de gestão do Evoluzione",
    label: "gestão integrada",
  },
  {
    src: "/projects/evoluzione/evo4.png",
    alt: "Visão de dados da plataforma Evoluzione",
    label: "visão do negócio",
  },
  {
    src: "/projects/evoluzione/evo6.png",
    alt: "Experiência responsiva do Evoluzione",
    label: "experiência premium",
  },
];

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  const screenshots =
    type === "evoluzione" ? evoluzioneScreenshots : firewallScreenshots;
  const screenshotCount = screenshots.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeScreenshot = screenshots[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % screenshotCount);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + screenshotCount) % screenshotCount,
        );
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, screenshotCount]);

  return (
    <>
      <div className={`visual visual-${type} project-gallery`}>
        <button
          className="gallery-stage"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Ampliar screenshot: ${activeScreenshot.alt}`}
        >
          <Image
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 980px) 80vw, 36vw"
            className="gallery-image"
            priority={activeIndex === 0}
          />
          <span className="gallery-scanlines" aria-hidden="true" />
          <span className="gallery-caption">
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(screenshots.length).padStart(2, "0")}
            </span>
            <strong>{activeScreenshot.label}</strong>
            <small>clique para ampliar ↗</small>
          </span>
        </button>

        <div
          className="gallery-thumbnails"
          aria-label="Screenshots do projeto"
          style={{
            gridTemplateColumns: `repeat(${screenshots.length}, minmax(0, 1fr))`,
          }}
        >
          {screenshots.map((screenshot, index) => (
            <button
              className={index === activeIndex ? "active" : ""}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Exibir ${screenshot.label}`}
              aria-pressed={index === activeIndex}
              key={screenshot.src}
            >
              <Image
                src={screenshot.src}
                alt=""
                fill
                sizes="72px"
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen &&
        createPortal(
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${activeScreenshot.alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            className="modal-close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar visualização"
          >
            <span>fechar</span> ×
          </button>
          <div className="modal-frame">
            <div className="modal-toolbar">
              <span>{activeScreenshot.label}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(screenshots.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar visualização"
              >
                ESC ×
              </button>
            </div>
            <div className="modal-image-wrap">
              <Image
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                fill
                sizes="95vw"
                className="modal-image"
                priority
              />
            </div>
            <div className="modal-controls">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (current) =>
                      (current - 1 + screenshots.length) % screenshots.length,
                  )
                }
              >
                ← anterior
              </button>
              <span>Use ← → para navegar</span>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (current) => (current + 1) % screenshots.length,
                  )
                }
              >
                próxima →
              </button>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
