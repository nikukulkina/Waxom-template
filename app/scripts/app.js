import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/button/button.js';
import {initialSlider}from '../blocks/slider/slider.js';
import {category}from '../blocks/categories/categories.js';
import {projects}from '../blocks/projects/projects';

$(() => {
	svg4everybody();
	initialSlider();
	projects();
	category();
});
