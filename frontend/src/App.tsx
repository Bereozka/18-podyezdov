import * as React from "react";

import './App.css';
import { Table } from "./components/table";
import { TableRow } from "./interfaces/table";

function App() {

  const [workData, setWorkData] = React.useState<Array<TableRow>>([]);
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
