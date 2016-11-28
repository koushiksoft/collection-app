import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {

	private collectedItem: Collectable[] = [];

	onRemoveFromCollection( item: Collectable) {

		this.collectableService.removeFromCollection(item);
	}

  	constructor(private collectableService: CollectableService) { }


  	ngOnInit() {

  		this.collectedItem = this.collectableService.getCollection();
  	}

}
