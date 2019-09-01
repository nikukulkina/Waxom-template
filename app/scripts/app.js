import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/button/button.js';
import {initialSlider}from '../blocks/slider/slider.js';
import {category}from '../blocks/categories/categories.js';
import {projects}from '../blocks/projects/projects';
import {player}from '../blocks/video-start-screen/video-start-screen';
import {accordeon}from '../blocks/accordeon-item/accordeon-item';
import {burger}from '../blocks/burger-menu/burger-menu.js';

$(() => {
	svg4everybody();
	initialSlider();
	projects();
	category();
	player();
	accordeon();
	burger();
});
