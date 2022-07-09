import * as React from "react";

import './App.css';
import { Table } from "./components/table";
import { TableRow } from "./interfaces/table";
import { getListWorks, getListMaterials } from "./services/api";
import { WorkModel, MaterialModel } from "./interfaces/services/api";

function App() {

  const [workData, setWorkData] = React.useState<Array<TableRow>>([]);
  const [materialData, setMaterialData] = React.useState<Array<TableRow>>([]);
  const [worksAutocomplete, setWorksAutocomplete] = React.useState<Array<WorkModel>>([]);
  const [materialsAutocomplete, setMaterialsAutocomplete] = React.useState<Array<MaterialModel>>([]);

  const worksThead = [
    "№",
    "НАИМЕНОВАНИЕ РАБОТ",
    "ЕД. ИЗМ",
    "КОЛ-ВО",
    "ЦЕНА, (₽)",
    "%",
    "∑, (₽)",
    "Кнопка",
  ]
  const materialsThead = [
    "№",
    "НАИМЕНОВАНИЕ МАТЕРИАЛОВ",
    "ЕД. ИЗМ",
    "КОЛ-ВО",
    "ЦЕНА, (₽)",
    "%",
    "∑, (₽)",
    "Кнопка",
  ]

  React.useEffect(() => {
    getListWorks()
      .then((
        data,
      ): void => {
        if (!data) {
          return
        };
        setWorksAutocomplete(() => {
          return [].concat(data, {
            id: -1,
            title: "Подзаголовок",
          })
        });
      });
    getListMaterials()
      .then((data): void => {
        if ( !data ) {
          return
        }
          setMaterialsAutocomplete(() => {
            return [].concat(data, {
              id: -1,
              title: "Подзаголовок",
            })
          });
      });
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="wrapper">
          <Table 
            data={workData}
            setData={setWorkData}
            autocompleteList={worksAutocomplete}
            theadItems={worksThead}
          />
          <Table 
            data={materialData}
            setData={setMaterialData}
            autocompleteList={materialsAutocomplete}
            theadItems={materialsThead}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
