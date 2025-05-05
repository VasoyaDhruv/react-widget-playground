import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import widgetCss from '../components/Widget.css?raw';
import indexCss from '../index.css?raw';   

export default function IframeRenderer({ children }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDoc = iframeRef.current.contentDocument;
    iframeDoc.open();
    iframeDoc.write(    `
    <html>
      <head>
        <style>
           ${indexCss}
           ${widgetCss}
        </style>
      </head>
      <body><div id="mount"></div></body>
    </html>
    `
  );
    iframeDoc.close();

    

    const mountNode = iframeDoc.getElementById('mount');
    createRoot(mountNode).render(children);
  }, [children]);

  return (
    <iframe ref={iframeRef}  />
  );
}