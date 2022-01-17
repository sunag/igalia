export class Grid {

	constructor() {

		this.dom = document.createElement( 'div' );
		this.dom.className = 'grid';

	}

	add( item ) {

		this.dom.append( item.dom );

	}

}

export class GridItem {

	constructor( title = '', description = '', thumbnail, url ) {

		this.dom = document.createElement( 'a' );
		this.dom.className = 'item';
		this.dom.href = url;

		this.infoDOM = document.createElement( 'div' );
		this.infoDOM.className = 'info';

		this.titleDOM = document.createElement( 'h2' );
		this.descriptionDOM = document.createElement( 'p' );

		this.playImageDOM = document.createElement( 'img' );
		this.playImageDOM.className = 'play_vr';
		this.playImageDOM.src = 'img/play_vr2.svg';

		this.infoDOM.append( this.titleDOM );
		this.infoDOM.append( this.descriptionDOM );
		this.infoDOM.append( this.playImageDOM );

		this.imageDOM = document.createElement( 'img' );

		this.dom.append( this.infoDOM );
		this.dom.append( this.imageDOM );

		//

		this.titleDOM.innerText = title;
		this.descriptionDOM.innerText = description;
		this.imageDOM.src = thumbnail;

		//

		this._timeoutID = null;

	}

	show() {

		this.dom.style.display = '';

		requestAnimationFrame( () => this.dom.classList.add( 'visible' ) );

	}

	hide( fade = false ) {

		this.dom.classList.remove( 'visible' );

		if ( ! fade ) {

			this.dom.style.display = 'none';

		} else {

			clearTimeout( this._timeoutID );

			this._timeoutID = setTimeout( () => {

				this.dom.style.display = 'none';

			}, 200 );

		}

	}

}
