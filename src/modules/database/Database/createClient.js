import supabase from '@supabase/supabase-js';


function createClient({host, token}){
  return supabase.createClient(host, token);
}




export default createClient;
