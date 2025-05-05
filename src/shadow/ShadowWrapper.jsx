import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import widgetCss from '../components/Widget.css?raw';
import indexCss from '../index.css?raw';    

export default function ShadowWrapper({ children }) {
  const hostRef = useRef(null);
  const shadowRootRef = useRef(null);
  const rootRef = useRef(null);
  

  useEffect(() => {
    if (!shadowRootRef.current) {
      shadowRootRef.current = hostRef.current.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = widgetCss + indexCss;
      shadowRootRef.current.appendChild(style)
      rootRef.current = createRoot(shadowRootRef.current).render(children);

    }
  }, [children]);

  return <div ref={hostRef}></div>;
}