import * as React from "react";

import './App.css';
import { Table } from "./components/table";
import { TableRow } from "./interfaces/table";

function App() {

  const [workData, setWorkData] = React.useState<Array<TableRow>>([
    {
      type: "filled",
      data: {
        id: 1,
        name: "Some name",
        units: "Unit",
        count: "12",
        price: "12",
        percent: "100",
        total: "100",
      },
    },
    {
      type: "subtitle",
      data: {
        id: 2,
        title: "Title"
      },
    },
  ]);
  const [materialData, setMaterialData] = React.useState<Array<TableRow>>([]);


  return (
    <div className="App">
      <div className="content">
        <div className="wrapper">
          <Table 
            workData={workData}
            setWorkData={setWorkData}
            materialData={materialData}
            setMaterialData={setMaterialData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
