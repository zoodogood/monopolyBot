import ChildProcess from 'node:child_process';


const RefreshCommands = ({ refreshCommands: {stdout, command} }) => {
  const child = ChildProcess.spawn(command, [], {shell: true});
  if (stdout){
    handleStdout(child);
  }

  return new Promise(resolve => child.on("exit", resolve));
}



function handleStdout(child){
  child.stdout.on('data', data => console.info( data.toString() ));
}

export default RefreshCommands;
