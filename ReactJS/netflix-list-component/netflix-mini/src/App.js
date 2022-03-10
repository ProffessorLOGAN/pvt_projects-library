import './App.css';
import Card from './components/Card';

import Sdata from './data/Sdata';

function App() {
  return (
   <>
 
   {Sdata.map((val) =>{
     return(
            <Card
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
            );
     })
    }
   </>
  );
}

export default App;
