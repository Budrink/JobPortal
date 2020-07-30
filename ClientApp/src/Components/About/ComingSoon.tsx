import React from 'react';
// import { FC, memo } from 'react';
import '../../css/bootstrap.min.css';
import '../../css/normalize.css';
import '../../css/scrollbar.css';
import '../../css/fontawesome/fontawesome-all.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.min.css';
import '../../css/linearicons.css';
import '../../css/jquery-ui.css';
import '../../css/tipso.css';
import '../../css/chosen.css';
import '../../css/prettyPhoto.css';
import '../../css/main.css';
import '../../css/color.css';
import '../../css/transitions.css';
import '../../css/responsive.css';

const ComingSoon: React.FC = () => {
  return (
    <div>
      {/*    
   <!doctype html>
<!--[if lt IE 7]>		<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>			<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>			<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->	<html class="no-js" lang=""> <!--<![endif]--></html> */}
      <head>
        {/* <meta charset="utf-8"> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>BootStrap HTML5 CSS3 Theme</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      </head>
      <body>
        {/* <!--[if lt IE 8]>
		<p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<!-- Preloader Start -->
	<div className="preloader-outer">
		<div className='loader'>
			<div className='loader--dot'></div>
			<div className='loader--dot'></div>
			<div className='loader--dot'></div>
			<div className='loader--dot'></div>
		</div>
	</div>
	<!-- Preloader End -->
	<!-- Wrapper Start --> */}
        <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
          {/* <!--Main Start--> */}
          <main id="wt-main" className="wt-main wt-haslayout">
            {/* <!--Coming Soon Start --> */}
            <div className="wt-haslayout wt-main-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="wt-comingsoon-holder wt-haslayout">
                      <div className="wt-comingsoon-aligncenter">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 float-left">
                          <div className="wt-comingsoon-content">
                            <strong className="wt-comingsoon-logo">
                              <img
                                src="/images/comingsoon/logo.png"
                                alt="img description"
                              />
                            </strong>
                            <div className="wt-title">
                              <h2>
                                <span>Stay Tuned We’re</span> Launching Very
                                Soon!
                              </h2>
                            </div>
                            <div className="wt-description">
                              <p>
                                Consectetur adipisicing elit sed dotem eiusmod
                                tempor incuntes ut labore etdolore maigna aliqua
                                enim.
                              </p>
                            </div>
                            <ul
                              id="wt-comming-sooncounter"
                              className="wt-comming-sooncounter"
                            >
                              <li className="wt-counterbox">
                                <div id="days" className="timer_box"></div>
                              </li>
                              <li className="wt-counterbox">
                                <div id="hours" className="timer_box"></div>
                              </li>
                              <li className="wt-counterbox">
                                <div id="minutes" className="timer_box"></div>
                              </li>
                              <li className="wt-counterbox">
                                <div id="seconds" className="timer_box"></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 float-left">
                          <div className="wt-comingsoonimg">
                            <figure>
                              <img
                                src="/images/comingsoon/img-02.png"
                                alt="img description"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Coming Soon End--> */}
          </main>
          {/* <!--Main End--> */}
          <p className="wt-copyrights wt-comingsoon-wt-copyrights">
            <a href="1.html;">Worktern.</a> © 2018 All Rights Reserved.
          </p>
        </div>
        {/* <!--Wrapper End--> */}
        <script src="js/vendor/jquery-3.3.1.js"></script>
        <script src="js/vendor/jquery-library.js"></script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/chosen.jquery.js"></script>
        <script src="js/tilt.jquery.js"></script>
        <script src="js/scrollbar.min.js"></script>
        <script src="js/prettyPhoto.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/readmore.js"></script>
        <script src="js/countTo.js"></script>
        <script src="js/appear.js"></script>
        <script src="js/tipso.js"></script>
        <script src="js/jRate.js"></script>
        <script src="js/main.js"></script>
        {/* <script>
		(function($) {
			var launch = new Date(2019, 12, 1, 1, 12);
			var days = $('#days');
			var hours = $('#hours');
			var minutes = $('#minutes');
			var seconds = $('#seconds');
			setDate();
			function setDate(){
				var now = new Date();
				if( launch < now ){
					days.html('<h1>0</h1><p>Days</p>');
					hours.html('<h1>0</h1><p>Hours</p>');
					minutes.html('<h1>0</h1><p>Minutes</p>');
					seconds.html('<h1>0</h1><p>Seconds</p>');
				}
				else{
					var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
					var d = Math.floor(s/86400);
					days.html('<h1>'+d+'</h1><p>Day'+(d>1?'s':''),'</p>');
					s -= d*86400;
					var h = Math.floor(s/3600);
					hours.html('<h1>'+h+'</h1><p>Hour'+(h>1?'s':''),'</p>');
					s -= h*3600;
					var m = Math.floor(s/60);
					minutes.html('<h1>'+m+'</h1><p>Minute'+(m>1?'s':''),'</p>');
					s = Math.floor(s-m*60);
					seconds.html('<h1>'+s+'</h1><p>Second'+(s>1?'s':''),'</p>');
					setTimeout(setDate, 1000);
				}
			}
		})(jQuery);
	</script> */}
      </body>
    </div>
  );
};
export default ComingSoon;
