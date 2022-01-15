export class Filters {

	constructor( hideAll ) {

		this.dom = document.createElement( 'div' );
		this.dom.className = 'tags';

		this.items = [];
		this.selected = null;
		this.hideAll = hideAll;

	}

	add( item ) {

		item.filter = this;
		item.onselect = () => {

			if ( this.selected === item ) {

				this.selected = null;

			} else {

				this.selected = item;

			}

			this.update();

		};

		this.items.push( item );

		this.dom.append( item.dom );

	}

	update() {

		const { hideAll, selected } = this;

		if ( selected !== null ) {

			this.dom.classList.add( 'filtering' );

		} else {

			this.dom.classList.remove( 'filtering' );

		}

		for ( const filterItem of this.items ) {

			if ( selected === filterItem ) {

				filterItem.dom.classList.add( 'selected' );

			} else {

				filterItem.dom.classList.remove( 'selected' );

			}

			for ( const item of filterItem.items ) {

				if ( ( hideAll && selected === null ) || ( selected !== null && selected !== filterItem ) ) {

					item.hide();

				} else {

					item.show();

				}

			}

		}

	}

}

export class FilterItem {

	constructor( name ) {

		this.items = [];
		this.onselect = null;

		this.dom = document.createElement( 'a' );
		this.dom.innerText = name;

		this.dom.onclick = () => this.onselect();

	}

	add( gridItem ) {

		this.items.push( gridItem );

	}

}
