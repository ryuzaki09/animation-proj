import React from "react";
import { assetsModule2 } from "~/config/module-2/assets";
import { appState } from "~/state/app-state";

import * as Style from "./phone-scene.styles";

interface IPhoneSceneProps {
  content: {
    phoneContent: React.ReactNode;
    revealContent: React.ReactNode;
    showDownArrow: boolean;
  }[];
}
export function PhoneScene({ content }: IPhoneSceneProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { phoneAnimationStarted, secondPhoneRevealed } = appState((state) => state.bookmark);
  const contentWrapperRef = React.useRef<HTMLDivElement>(null);

  let slideLength = 1;

  if (!secondPhoneRevealed && phoneAnimationStarted) {
    slideLength = 2;
  }

  if (secondPhoneRevealed && phoneAnimationStarted) {
    slideLength = content.length;
  }

  const handleReadMore = () => {
    appState.getState().updateBookmark({ phoneAnimationStarted: true });
  };

  const handleRevealMore = () => {
    if (!secondPhoneRevealed) {
      appState.getState().updateBookmark({ secondPhoneRevealed: true });
      setTimeout(() => {
        if (contentWrapperRef.current) {
          const slides = contentWrapperRef.current.querySelectorAll("& > div");
          slides[2].scrollIntoView({ behavior: "smooth" });
        }
      }, 2000);
      return;
    }
    setTimeout(() => {
      if (contentWrapperRef.current) {
        const slides = contentWrapperRef.current.querySelectorAll("& > div");
        slides[2].scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <Style.Wrapper>
      <Style.InnerWrapper style={{ height: `${slideLength}00dvh` }}>
        <Style.PhoneWrapper
          $leftAlign={phoneAnimationStarted}
          role="article"
          aria-label="Phone display showing news article"
          aria-live="polite"
        >
          <Style.PhoneInnerWrapper $leftAlign={phoneAnimationStarted}>
            <Style.PhoneTop>
              <img src={assetsModule2.phoneTop} />
            </Style.PhoneTop>
            <Style.PhoneBody>
              <Style.PhoneLeft>
                <img src={assetsModule2.phoneLeft} alt="" />
              </Style.PhoneLeft>
              <Style.PhoneBodyContent>
                {content.map((c, index) => {
                  return (
                    <Style.PhoneContent
                      key={index}
                      data-is-active={activeIndex === index}
                      aria-hidden={activeIndex !== index}
                      inert={activeIndex !== index}
                    >
                      {c.phoneContent}
                      {index === 0 && (
                        <button
                          className="readMore"
                          onClick={handleReadMore}
                          aria-label="Read more about this article"
                          aria-description="Reveal new content in the phone display"
                        >
                          Read more
                        </button>
                      )}
                      {index === 1 && (
                        <button
                          onClick={handleRevealMore}
                          aria-label="Read more about this article"
                          aria-description="Reveal new content in the phone display"
                        >
                          Reveal more
                        </button>
                      )}
                    </Style.PhoneContent>
                  );
                })}
              </Style.PhoneBodyContent>
              <Style.PhoneRight>
                <img src={assetsModule2.phoneRight} alt="" />
              </Style.PhoneRight>
            </Style.PhoneBody>
          </Style.PhoneInnerWrapper>
        </Style.PhoneWrapper>
        <Style.RevealWrapper>
          <Style.RevealInnerWrapper $reveal={phoneAnimationStarted} ref={contentWrapperRef} aria-live="polite">
            {content.map((c, index) => {
              if (!phoneAnimationStarted && index > 0) {
                return null;
              }
              if (!secondPhoneRevealed && index > 1) {
                return null;
              }

              let showArrow: boolean;
              if (index === 0) {
                showArrow = index === 0 && phoneAnimationStarted;
              } else if (index === 1) {
                showArrow = index === 1 && secondPhoneRevealed;
              } else {
                showArrow = c.showDownArrow;
              }

              return (
                <InterSectSlide
                  key={index}
                  content={c.revealContent}
                  intersectCb={() => setActiveIndex(index)}
                  showDownArrow={showArrow}
                />
              );
            })}
          </Style.RevealInnerWrapper>
        </Style.RevealWrapper>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}

interface IIntersectSlideProps {
  content: React.ReactNode;
  intersectCb: () => void;
  showDownArrow: boolean;
}

function InterSectSlide({ content, intersectCb, showDownArrow }: IIntersectSlideProps) {
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          intersectCb();
          appState.getState().setShowDownArrow(showDownArrow);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [showDownArrow]);

  return (
    <Style.RevealContent ref={elementRef} role="region">
      {content}
    </Style.RevealContent>
  );
}
