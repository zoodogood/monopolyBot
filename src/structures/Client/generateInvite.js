import { OAuth2Scopes, PermissionFlagsBits } from 'discord-api-types/v9';

function generateInvite(client){
	const scopes = [
		OAuth2Scopes.ApplicationsCommands
	]

	const permissions = [
		PermissionFlagsBits.Administrator
	];

	return client.generateInvite({scopes, permissions});
}
export default generateInvite;