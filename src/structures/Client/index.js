
import generateInvite from "./generateInvite.js";

class Client {
	constructor(client){
		this.original = client;
	}

	createInvite(){
		return generateInvite(this.original);
	}
}

export default Client;