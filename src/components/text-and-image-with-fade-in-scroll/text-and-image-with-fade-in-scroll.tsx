import React, { useRef, useEffect, useState, useLayoutEffect, use } from "react";
import * as Style from "./text-and-image-with-fade-in-scroll.styles";
import { appState } from "~/state/app-state";

interface TextAndImageWithFadeInScrollProps {
  content: React.ReactNode[];
  imgSrc: string;
}

export function TextAndImageWithFadeInScroll({ content, imgSrc }: TextAndImageWithFadeInScrollProps) {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const contentTopSentinelRef = useRef<HTMLSpanElement>(null);
  const contentBottomSentinelRef = useRef<HTMLSpanElement>(null);
  const [isAtTheTop, setIsAtTheTop] = useState(true);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useLayoutEffect(() => {
    setContentLoaded(true);
  }, []);

  useEffect(() => {
    if (!contentBottomSentinelRef.current || !contentLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsFullyVisible(true);
          appState.getState().updateBookmark({ textAndImageScrolledToEnd: true });
        } else {
          setIsFullyVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(contentBottomSentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [contentLoaded]);

  useEffect(() => {
    if (!contentTopSentinelRef.current || !contentLoaded) return;

    const topObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsAtTheTop(true);
        } else {
          setIsAtTheTop(false);
        }
      },
      { threshold: 0.1 },
    );

    topObserver.observe(contentTopSentinelRef.current);

    return () => {
      topObserver.disconnect();
    };
  }, [contentLoaded]);

  return (
    <Style.Wrapper>
      <Style.ContentWrapper>
        <Style.ContentContainer ref={contentContainerRef} className={`${isFullyVisible ? "at-bottom" : ""} ${isAtTheTop ? "at-top" : ""}`}>
          <Style.ContentTopSentinel ref={contentTopSentinelRef} />
          {content.map((contentItem, index) => (
            <div key={index}>{contentItem}</div>
          ))}
          <Style.ContentBottomSentinel ref={contentBottomSentinelRef} />
        </Style.ContentContainer>
      </Style.ContentWrapper>
      <Style.StickyImgWrapper>
        <img src={imgSrc} alt="" />
      </Style.StickyImgWrapper>
    </Style.Wrapper>
  );
}
