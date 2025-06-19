import React from "react";

import { assets } from "~/config/module-1/assets";

import * as Style from "./phone-scene.styles";
import { assetsModule2 } from "~/config/module-2/assets";
import { appState } from "~/state/app-state";

interface IProps {
  mobileScreens: React.ReactNode[];
  revealContent: React.ReactNode[];
}

export function PhoneScene({ mobileScreens, revealContent }: IProps) {
  const { phoneAnimationStarted } = appState((state) => state.bookmark);
  const [activeContentIndex, setActiveContentIndex] = React.useState(0);
  const scrollWrapperRef = React.useRef<HTMLDivElement>(null);
  const contentRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [previousIndex, setPreviousIndex] = React.useState(-1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    if (!phoneAnimationStarted) return;

    const observers = contentRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            if (activeContentIndex !== index) {
              setActiveContentIndex(index);
            }
          }
        },
        {
          threshold: 0.7,
          rootMargin: "0px",
        },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [phoneAnimationStarted, activeContentIndex]);

  React.useEffect(() => {
    if (activeContentIndex !== previousIndex) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setPreviousIndex(activeContentIndex);
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [activeContentIndex, previousIndex]);

  React.useEffect(() => {
    if (activeContentIndex === 4) {
      appState.getState().updateBookmark({ phoneRevealed: true });
    }
  }, [activeContentIndex]);

  return (
    <Style.Wrapper aria-label="Interactive phone display with scrollable content">
      <Style.AnimationArea $phoneAnimationStarted={phoneAnimationStarted}>
        <Style.PhoneWrapper
          $bgImage={assetsModule2.phoneImage}
          role="complementary"
          aria-label="Phone display showing news article"
        >
          <Style.PhoneInsideContent $phoneAnimationStarted={phoneAnimationStarted}>
            {mobileScreens.map((screen, index) => {
              const isActive = index === activeContentIndex;
              const wasActive = index === previousIndex && isTransitioning;

              let animationClass = "";
              if (isActive) animationClass = "fade-in";
              else if (wasActive) animationClass = "fade-out";
              else animationClass = "hidden";

              if (!isActive && !wasActive) return null;

              return (
                <div
                  key={index}
                  className={animationClass}
                  aria-hidden={!isActive}
                  role={isActive ? "region" : "none"}
                  aria-live={isActive ? "polite" : "off"}
                  aria-atomic="true"
                  id={`phone-content-${index}`}
                >
                  {screen}
                </div>
              );
            })}
          </Style.PhoneInsideContent>
        </Style.PhoneWrapper>

        <Style.RevealedContent
          $phoneAnimationStarted={phoneAnimationStarted}
        >
          <Style.ScrollWrapper>
            {revealContent.map((content, index) => {
              return (
                <div
                  key={index}
                  {...(index === 0 && { ref: scrollWrapperRef })}
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                >
                  {content}
                </div>
              );
            })}
          </Style.ScrollWrapper>
        </Style.RevealedContent>
      </Style.AnimationArea>
    </Style.Wrapper>
  );
}
