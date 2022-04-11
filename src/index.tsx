import {createRoot} from 'react-dom/client'
import App from './App';

const rootId:any = document.getElementById('root');
const root = createRoot(rootId);

root.render(
  <>
    <App></App>
  </>
)


