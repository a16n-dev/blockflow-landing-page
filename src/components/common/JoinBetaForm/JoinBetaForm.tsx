'use client';

import { useEffect } from 'react';

const JoinBetaForm = () => {
  useEffect(() => {
    const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

    const load = () => {
      // Load Tally embeds
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll('iframe[data-tally-src]:not([src])')
        .forEach((iframeEl) => {
          (iframeEl as any).src = (iframeEl as any).dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof (window as any).Tally !== 'undefined') {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement('script');
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
  }, []);

  return (
    <div
      className={'relative'}
      style={{
        maskImage:
          'linear-gradient(0deg, transparent 50%, #000000 51%), linear-gradient(-90deg, transparent 50%, #000000 51%)',
      }}
    >
      <iframe
        data-tally-src='https://tally.so/embed/mJ0lZd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
        loading='lazy'
        width='100%'
        height='1'
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
};

export default JoinBetaForm;
