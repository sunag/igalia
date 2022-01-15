import { Filters, FilterItem } from './Filters.js';
import { Grid, GridItem } from './Grid.js';
import { Slider } from './Slider.js';

const dom = document.querySelector( 'main' );

const sliderDuration = 7; // seconds
const cleanMode = true; // hide all grid itens and show only after select a filter

const slider = new Slider( sliderDuration );
const filters = new Filters( cleanMode );
const grid = new Grid();

dom.append( slider.dom );
dom.append( filters.dom );
dom.append( grid.dom );

const loadJSON = async ( url ) => {

	const response = await fetch( url );
	const json = await response.json();

	const filterLib = {};

	for ( const demo of json.demos ) {

		const gridItem = new GridItem( demo.title, demo.description, demo.thumbnail, demo.url );

		if ( demo.highlight ) {

			slider.add( gridItem );

		} else {

			// grid

			let filter = filterLib[ demo.category ];

			if ( filter === undefined ) {

				filter = new FilterItem( demo.category );
				filters.add( filter );

				filterLib[ demo.category ] = filter;

			}

			grid.add( gridItem );
			filter.add( gridItem );

		}

	}

	filters.update();

};

loadJSON( './demos/demos.json' );
