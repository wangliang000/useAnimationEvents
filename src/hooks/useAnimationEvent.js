import { useEffect, useRef } from 'react';
export function useAnimationEvents(doms, animationEvent, handle) {
  const listenDoms = useRef([]);
  useEffect(() => {
    listenDoms.current = doms.filter((_d) => isHTMLElement(_d));

  }, [doms]);
  useEffect(() => {
    if (listenDoms.current.length) {
      
      listenDoms.current.forEach((_d) =>
        _d.addEventListener(animationEvent, handle),
      );
    }
    // return () => {
    //   listenDoms.current.lenth &&
    //     listenDoms.current.forEach((_d) =>
    //       _d.removeEventListener(animationEvent, handle),
    //     );
    // };
  }, [animationEvent, handle]);
}

function isHTMLElement(dom = null) {
  if (HTMLElement) {
    return dom instanceof HTMLElement;
  } else {
    return dom && typeof dom === 'object' && dom.nodeType === Node.ELEMENT_NODE;
  }
}
