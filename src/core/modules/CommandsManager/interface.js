import { CommandsManager } from "./mod.js";

function getCommandsManager({path}){
	return new CommandsManager({path});
}

async function initializeCommandsManager(manager){
	await manager.importAll();
}
export { getCommandsManager, initializeCommandsManager };