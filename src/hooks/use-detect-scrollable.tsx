import { useEffect, useState, RefObject } from 'react';

export function useDetectScrollable(ref: RefObject<HTMLElement | null>): boolean {
  const [isScrollable, setIsScrollable] = useState(false);
  
  useEffect(() => {
    if (!ref || !ref.current) return;
    const element = ref.current;
    
    if (!element) return;
    
    const checkIfScrollable = () => {
      setIsScrollable(element.scrollHeight > element.clientHeight);
    };
    
    checkIfScrollable();
    
    const resizeObserver = new ResizeObserver(checkIfScrollable);
    resizeObserver.observe(element);
    
    const mutationObserver = new MutationObserver(checkIfScrollable);
    mutationObserver.observe(element, { 
      childList: true, 
      subtree: true,
      characterData: true 
    });
    
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [ref]);
  
  return isScrollable;
}