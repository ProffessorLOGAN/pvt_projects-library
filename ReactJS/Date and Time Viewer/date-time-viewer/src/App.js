
import './App.css';
const user = "TANSEN KESHRI";
const tdate = new Date().toLocaleDateString();
const ttime = new Date().toLocaleTimeString();
function App() {
  return (
   <>
   <h1>HELLO {user}</h1>
   <br/>
   <p>Today Date is {tdate}</p>
   <br/>
   <p>Time :-  " {ttime} "</p>
   </>
  );
}

export default App;
