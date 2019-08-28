import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/button/button.js';
import {initialSlider}from '../blocks/slider/slider.js';
import {category}from '../blocks/categories/categories.js';
import {projects}from '../blocks/projects/projects';
import {player}from '../blocks/video-player/video-player';
import {accordeon}from '../blocks/accordeon-item/accordeon-item';

$(() => {
	svg4everybody();
	initialSlider();
	projects();
	category();
	player();
	accordeon();
});
