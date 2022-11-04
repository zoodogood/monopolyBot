import { EventsManager } from "./mod.js";

function getEventsManager({path}){
	return new EventsManager({path});
}

async function initializeEventsManager(manager){
	await manager.importAll();
	manager.handleAll();
}

export { getEventsManager, initializeEventsManager };