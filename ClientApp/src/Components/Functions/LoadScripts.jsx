// import { useEffect } from 'react';
// import react, { FC } from 'react';

import { element } from 'prop-types';

var loadScript = function (src, Element) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.defer = true;
  tag.type = 'text/javascript';
  tag.src = src;
  Element.appendChild(tag);
};

export const loadTinyMCE = function (Element) {
  loadScript('/js/tinymce/tinymce.min.js', Element);
};

export const loadScripts1 = function (Element) {
  console.log(Element);
  loadScript('/js/vendor/jquery-3.3.1.js', Element);
  loadScript('/js/vendor/jquery-library.js', Element);
  loadScript('/js/vendor/bootstrap.min.js', Element);
  loadScript('/js/owl.carousel.min.js', Element);
  loadScript('/js/chosen.jquery.js', Element);
  loadScript('/js/scrollbar.min.js', Element);
  loadScript('/js/tilt.jquery.js', Element);
  loadScript('/js/prettyPhoto.js', Element);
  loadScript('/js/jquery-ui.js', Element);
  loadScript('/js/readmore.js', Element);
  loadScript('/js/countTo.js', Element);
  loadScript('/js/appear.js', Element);
  loadScript('/js/tipso.js', Element);
  loadScript('/js/jRate.js', Element);
  loadScript('/js/main.js', Element);
};
export default loadScripts1;

export const loadScripts = function (Element) {
  console.log(Element);
  loadScript('/js/vendor/jquery-3.3.1.js', Element);
  loadScript('/js/vendor/jquery-library.js', Element);
  loadScript('/js/vendor/bootstrap.min.js', Element);
  loadScript('/js/owl.carousel.min.js', Element);
  loadScript('/js/chosen.jquery.js', Element);
  loadScript('/js/tilt.jquery.js', Element);
  loadScript('/js/scrollbar.min.js', Element);
  loadScript('/js/prettyPhoto.js', Element);
  loadScript('/js/jquery-ui.js', Element);
  loadScript('/js/readmore.js', Element);
  loadScript('/js/countTo.js', Element);
  loadScript('/js/appear.js', Element);
  loadScript('/js/tipso.js', Element);
  loadScript('/js/jRate.js', Element);
  loadScript('/js/main.js', Element);
};

export const loadScripts2 = function (Element) {
  loadScript('/js/vendor/jquery-3.3.1.js', Element);
  loadScript('/js/vendor/jquery-library.js', Element);
  loadScript('/js/vendor/bootstrap.min.js', Element);
  loadScript('/js/owl.carousel.min.js', Element);
  loadScript('/js/chosen.jquery.js', Element);
  loadScript('/js/scrollbar.min.js', Element);
  loadScript('/js/tilt.jquery.js', Element);
  loadScript('/js/prettyPhoto.js', Element);
  loadScript('/js/jquery-ui.js', Element);
  loadScript('/js/readmore.js', Element);
  loadScript('/js/countTo.js', Element);
  loadScript('/js/appear.js', Element);
  loadScript('/js/tipso.js', Element);
  loadScript('/js/jRate.js', Element);
  loadScript('/js/main.js', Element);
  console.log('script2');
};

// const useScript = (url, elementId, async) => {
//   useEffect(() => {
//     // const placement = document.querySelector(position);
//     const placement = document.getElementById(elementId);
//     const script = document.createElement('script');

//     script.src = url;
//     // script.async = async;
//     script.defer = true;
//     placement.appendChild(script);

//     return () => {
//       placement.removeChild(script);
//     };
//   }, [async, elementId, url]);
// };

// export const Script = ({ src, elementId, async = true }) => {
//   useScript(src, elementId, async);

//   return null; // Return null is necessary for the moment.
// };
// export const Script2 = ({ elementId, async = true }) => {
//   alert('начало');
//   useScript('./js/vendor/jquery-3.3.1.js', elementId, async);
//   useScript('./js/vendor/jquery-library.js', elementId, async);
//   // useScript('./js/vendor/bootstrap.min.js', elementId, async);
//   useScript('./js/owl.carousel.min.js', elementId, async);
//   // useScript('./js/chosen.jquery.js', elementId, async);
//   // useScript('./js/scrollbar.min.js', elementId, async);
//   // useScript('./js/tilt.jquery.js', elementId, async);
//   useScript('./js/prettyPhoto.js', elementId, async);
//   // useScript('./js/jquery-ui.js', elementId, async);
//   // useScript('./js/readmore.js', elementId, async);
//   // useScript('./js/countTo.js', elementId, async);
//   // useScript('./js/appear.js', elementId, async);
//   // useScript('./js/tipso.js', elementId, async);
//   // useScript('./js/jRate.js', elementId, async);
//   useScript('./js/main.js', elementId, async);

//   return null; // Return null is necessary for the moment.
// };

// export const loadScripts1 = ({ elementId }) => {
//   useScript(src, elementId, async);
//   useScript('./js/vendor/jquery-3.3.1.js', elementId, 'false');
//   useScript('./js/vendor/jquery-library.js', elementId, 'false');
//   useScript('./js/vendor/bootstrap.min.js', elementId, 'false');
//   useScript('./js/owl.carousel.min.js', elementId, 'false');
//   useScript('./js/chosen.jquery.js', elementId, 'false');
//   useScript('./js/scrollbar.min.js', elementId, 'false');
//   useScript('./js/tilt.jquery.js', elementId, 'false');
//   useScript('./js/prettyPhoto.js', elementId, 'false');
//   useScript('./js/jquery-ui.js', elementId, 'false');
//   useScript('./js/readmore.js', elementId, 'false');
//   useScript('./js/countTo.js', elementId, 'false');
//   useScript('./js/appear.js', elementId, 'false');
//   useScript('./js/tipso.js', elementId, 'false');
//   useScript('./js/jRate.js', elementId, 'false');
//   useScript('./js/main.js', elementId, 'false');
//   return null;
// };
