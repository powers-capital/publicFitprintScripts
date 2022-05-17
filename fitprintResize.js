console.log('hi');
<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js"> </script>
iFrameResize({ log: false, checkOrigin: false, heightCalculationMethod: 'grow', autoResize: false, onInit: function(iframe) { $(window).on('scroll', () => { const scrollFromTop = $(document).scrollTop(); iframe.iFrameResizer.sendMessage(scrollFromTop);}); }}, '#fitPrintIframe');
