import { request } from '../src/helpers/request'

import './App.css';

function App() {
  const handleClick = async () => {
    try {
      const payload = {
        www: 'mei'
      }
      const res: any = await request({method: 'POST', payload, resource: 'post'});
      const { data } = res;
      console.log('res', data);
    } catch (err) {
      console.log('err');
    }
  };
  return (
    <div>
      <button onClick={handleClick}>request</button>
    </div>
  );
}

export default App;
