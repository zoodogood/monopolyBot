import 'dotenv/config';
import { getDatabase } from '@module/database';

const { SUPABASE_HOST: host, SUPABASE_SECRET: token } = process.env;
const database = await getDatabase({host, token});

const x = await database.client.functions.invoke(`SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name`)

console.log(x);
