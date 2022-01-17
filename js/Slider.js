export class Slider {

	constructor( interval = 3 ) {

		this.items = [];

		this.dom = document.createElement( 'div' );
		this.dom.className = 'slider';

		this.bulletsDOM = document.createElement( 'div' );
		this.bulletsDOM.className = 'bullets';

		this.dom.append( this.bulletsDOM );

		this._index = - 1;

		setInterval( () => {

			this.update();

		}, interval * 1000 );

	}

	set index( index ) {

		if ( this._index === index ) return;

		if ( this._index >= 0 ) {

			this.bulletsDOM.children[ this._index ].className = '';

			this.items[ this._index ].hide();

		}

		this._index = index;

		this.bulletsDOM.children[ this._index ].className = 'selected';

		this.items[ this._index ].show();

	}

	get index() {

		return this._index;

	}

	add( item ) {

		const bulletDOM = document.createElement( 'a' );
		this.bulletsDOM.append( bulletDOM );

		item.hide();

		let index = this.items.length;

		this.items.push( item );

		this.dom.append( item.dom );

		if ( this._index === - 1 ) {

			this.index = 0;

		}

		bulletDOM.onclick = () => this.index = index;

	}

	update() {

		if ( this.index + 1 < this.items.length ) {

			this.index ++;

		} else {

			this.index = 0;

		}

	}

}
