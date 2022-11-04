import importCommands from '#lib/importCommands.js';

class CommandsManager {
	collection = null;
	
	constructor({path}){
		this.folderPath = path;
	}

	async importAll(){
		const path = this.folderPath;
		this.collection = await importCommands({path});
	}
}

export { CommandsManager };