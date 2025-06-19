import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  --content-offset: 50%;
  position: relative;
  min-height: 100vh;

  & > div {
    width: 50%;
  }

  strong {
    font-weight: 500;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  place-content: center;
  padding-inline: 3rem;
  margin: auto;
`;

export const StickyImgWrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100dvh;

  & img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

type ContentContainerProps = {
  $isScrollable?: boolean;
};

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  margin-top: 3rem;

  &::before,
  &::after {
    content: "";
    position: sticky;
    left: 0;
    min-height: 120px;
    height: 120px;
    pointer-events: none;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.3s ease;
    width: 100%;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }
  &.at-bottom::after {
    opacity: 0;
  }

  &.at-top::before {
    opacity: 0;
  }
`;

export const ContentTopSentinel = styled.span`
  height: 1px;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const ContentBottomSentinel = styled.span`
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;