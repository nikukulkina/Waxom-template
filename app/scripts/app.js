import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/button/button.js';
import {initialSlider}from '../blocks/slider/slider.js';
import {category} from '../blocks/categories/categories.js';

$(() => {
	svg4everybody();
	initialSlider();
	category();
});
