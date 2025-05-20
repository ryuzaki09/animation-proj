import styled from 'styled-components'
import React from 'react'

interface IIntersectProps {
  children: React.ReactNode;
  onActiveCb: (element: IntersectionObserverEntry) => void
  id?: string;
  hideDownArrow?: boolean
}
export function InterSection(
  { children, onActiveCb, id, hideDownArrow = false }: IIntersectProps
) {
  const sectionRef = React.useRef(null)

  React.useEffect(() => {
    const section = sectionRef.current
    if (section === null) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        onActiveCb(entry)
      }
    }, {
      threshold: 0.5
    })

    observer.observe(section)

    return () => {
      observer.unobserve(section)
    }
  }, [])

  return (
    <Wrapper
      ref={sectionRef}
      {...(id && { ['data-title']: id })}
      data-hide-arrow={hideDownArrow}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vw;
`
