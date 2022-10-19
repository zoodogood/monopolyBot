

class App {
  constructor(){
    this.createdAt = Date.now();
  }

 
  get primaryKey(){
    return "main";
  }

  get type(){
    return "app";
  }

  transfromToDatabase(){
    const {createdAt, primaryKey} = this;
    return {createdAt, primaryKey};
  }

  transfromFromDatabase(data){
    this.createdAt = data.createdAt;
    return this;
  }
}

export default App;
