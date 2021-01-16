import axios from 'axios'

const instance=axios.create(
  {
  baseURL:'https://todolist-9ae78-default-rtdb.firebaseio.com/'
  }
);
export default instance
