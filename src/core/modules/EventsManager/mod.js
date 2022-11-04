import importEvents from '#lib/importEvents.js';

class EventsManager {
	collection = null;
	
	constructor({path}){
		this.folderPath = path;
	}

	async importAll(){
		const path = this.folderPath;
		this.collection = await importEvents({path});
	}

	handleAll(){

		for (const event of this.collection.values())
			event.handle();
		
	}
}

export { EventsManager };