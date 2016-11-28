import { Collectable } from './collectable.model';

export class CollectableService {	
	private collectables: Collectable[] = [
		{message: 'sddsddlllllll asas', type: 'book'},
		{message: 'kkdkkdk asas', type: 'photo'},
		{message: 'rerere fgsgagh  ddddddd', type: 'hhhh'},
		{message: 'ffdfdffd  dgagghaggh asas', type: 'camera'}
	];

	private collection: Collectable[] = [];


	getCollectables(){

		return this.collectables;
	}

	getCollection() {

		return this.collection;
	}

	addToCollection( item: Collectable ) {

		if(this.collection.indexOf(item) != -1){
			return;
		}
		this.collection.push(item);


	}

	removeFromCollection( item: Collectable ) {

		this.collection.splice(this.collection.indexOf(item), 1);

	}
}