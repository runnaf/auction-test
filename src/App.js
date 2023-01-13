import './App.css';
import { MainTitle } from './component/MainTitle';
import { MessageForUsers } from './component/MessageForUsers';
import { TableUsers } from './component/TableUsers';
import { Timer } from './component/Timer';
import { data } from "./data";

function App() {
  return (
    <section className='auction'>
      <MainTitle />
      <MessageForUsers />
      <TableUsers timer = { <Timer /> } users = { data } step = '25 000' price = '2 475 000' />
    </section>
  );
}

export default App;
