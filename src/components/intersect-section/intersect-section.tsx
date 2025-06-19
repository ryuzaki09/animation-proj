import styled from "styled-components";
import React, { useEffect, useRef } from "react";

interface IIntersectProps {
  children: React.ReactNode;
  onActiveCb: (element: IntersectionObserverEntry) => void;
  hideDownArrow?: boolean;
  id: string;
  useMarker?: boolean;
}
export function InterSection({
  children,
  onActiveCb,
  hideDownArrow = false,
  id,
  useMarker = false,
}: IIntersectProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section === null) return;

    let targetElement = section;

    if (useMarker) {
      const marker = document.querySelector(`.section-marker[id="${id}"]`);
      if (marker) {
        // @ts-expect-error
        targetElement = marker;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {

          if (useMarker && entry.target.classList.contains("section-marker")) {
            const modifiedEntry = {
              ...entry,
              target: section,
            };
            onActiveCb(modifiedEntry as IntersectionObserverEntry);
          } else {
            onActiveCb(entry);
          }
        }
      },
      {
        threshold: useMarker ? 0.1 : 0.5,
        rootMargin: useMarker ? "0px 0px -80% 0px" : "0px",
      },
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [onActiveCb, id, useMarker]);

  return (
    <Wrapper
      ref={sectionRef}
      {...(id && { ["data-title"]: id })}
      data-hide-arrow={hideDownArrow}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
