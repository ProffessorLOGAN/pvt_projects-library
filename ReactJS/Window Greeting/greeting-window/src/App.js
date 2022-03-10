import "./App.css";

const cssStyle1 = {};
const cssStyle2 = {};

let curHour = new Date();
curHour = curHour.getHours();
let greeting = "";

if (curHour >= 1 && curHour < 12) {
  greeting = "Good Morning";
  cssStyle1.backgroundColor = "yellow";
  cssStyle1.color = "black";
  cssStyle2.color = " green";
} else if (curHour >= 12 && curHour < 19) {
  greeting = "Good Afternoon";
  cssStyle1.backgroundColor = "green";
  cssStyle1.color = " black";
  cssStyle2.color = " yellow";
} else {
  greeting = " GOOD Night";
  cssStyle1.backgroundColor = "yellow";
  cssStyle1.color = " green";
  cssStyle2.color = " black";
}

function App() {
  return (
    <>
      <div>
        <h1 style={cssStyle1}>
          Hello Proffessor_LOGAN,<span style={cssStyle2}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
