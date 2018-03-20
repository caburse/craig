import React from 'react';
import { render } from 'react-dom';
import Main from './pages/main/Main.jsx';
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';

	WebFont.load({
		google: {
			families: ['Alfa Slab One', 'Cabin Sketch', 'Caveat Brush', 'Permanent Marker', 'Sedgwick Ave Display','Quicksand', 'sans-serif']
		}
	});

render((
	<BrowserRouter>	
    	<Main />
    </BrowserRouter>),
	document.getElementById('sucka-free'));