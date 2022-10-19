import Readline from 'readline';

function toColoredShell(string, colorKey = 32){
  return `\x1b[${ colorKey }m${ string }\x1b[0m`;
}

async function readlineQuestion(question){
  const lineInterface = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => lineInterface.question(question, (answer) => {
    lineInterface.close();
    resolve(answer);
  }));
}

export {toColoredShell, readlineQuestion};
