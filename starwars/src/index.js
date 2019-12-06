import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
	google : {
		families : [ 'Sulphur Point', 'sans-serif' ],
		families : [ 'Stardos Stencil', 'cursive' ],
	},
});

ReactDOM.render(<App />, document.getElementById('root'));
