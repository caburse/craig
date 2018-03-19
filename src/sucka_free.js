import React from 'react';
import { render } from 'react-dom';
import Main from './pages/main/Main.jsx';
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';

	WebFont.load({
		google: {
			families: ['Alfa Slab One:300,400,700', 'Cabin Sketch', 'Caveat Brush', 'Permanent Marker', 'Sedgwick Ave Dsplay:300,400,700', 'sans-serif']
		}
	});

render((
	<BrowserRouter>	
    	<Main />
    </BrowserRouter>),
	document.getElementById('sucka-free'));