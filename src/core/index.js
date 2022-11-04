import config from '#config';
import Core from './constructor.js';


const core = new Core(config);
await core.prepare();

export default core;