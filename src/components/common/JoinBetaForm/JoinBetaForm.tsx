const JoinBetaForm = () => {
  return (
    <div>
      <div
        className={'relative'}
        style={{
          maskImage:
            'linear-gradient(0deg, transparent 50%, #000000 51%), linear-gradient(-90deg, transparent 50%, #000000 51%)',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe data-tally-src="https://tally.so/embed/mJ0lZd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1" frameborder="0" marginheight="0" marginwidth="0" title="null"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>`,
          }}
        />
      </div>
    </div>
  );
};

export default JoinBetaForm;
