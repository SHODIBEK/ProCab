import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
import 'owl.carousel';
import '@fancyapps/fancybox';
// import './vendor/slick';
import './vendor/pace';
// import './vendor/jquery.mixitup.min.js';