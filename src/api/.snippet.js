import BaseAPI from '@lib/baseAPI';

class API extends BaseAPI {
  constructor(){
    super();
  }

  handle(request, reply){

  }

  static options = {
    query: "/example/:id",
    cors: "*"
  }
}

export { API };
