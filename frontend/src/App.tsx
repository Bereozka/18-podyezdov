import * as React from "react";

import './App.css';
import { Table } from "./components/table";
import { TableRow } from "./interfaces/table";
import { getListWorks, getListMaterials } from "./services/api";
import { WorkModel, MaterialModel, WorksMaterialsModel } from "./interfaces/services/api";
import { Button } from "./components/button";
import {
  getWordFileRequest,
  getExcelFileRequest,
  getWork,
  getMaterial,
  getWorksMaterials,
} from "./services/api";

function App() {

  const [prevWorkData, setPrevWorkData] = React.useState<Array<TableRow>>([]);
  const [workData, setWorkData] = React.useState<Array<TableRow>>([
    // {
    //   type: "filled",
    //   data: {
    //     id: 1,
    //     name: "Наименование работ",
    //     units: "units",
    //     count: "23",
    //     price: "100",
    //     percent: "100",
    //     total: "2300",
    //   }
    // },
    // {
    //   type: "subtitle",
    //   data: {
    //     id: 2,
    //     title: "subtitle",
    //   }
    // },
  ]);
  const [materialData, setMaterialData] = React.useState<Array<TableRow>>([
    // {
    //   type: "filled",
    //   data: {
    //     id: 1,
    //     name: "Наименование dsfk",
    //     units: "units",
    //     count: "23",
    //     price: "100",
    //     percent: "100",
    //     total: "2300",
    //   }
    // },
  ]);
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
  React.useEffect(() => {
    let added = workData.filter((o) => prevWorkData.indexOf(o) === -1);
    let deleted = prevWorkData.filter((o) => workData.indexOf(o) === -1);

    if (added.length !== 0 && added[0].data.db_index) {
      getWork(added[0].data.db_index)
        .then((work: WorkModel) => {
          console.log(work)
          for (let workmaterial of work.worksmaterials) {
            getWorksMaterials(workmaterial)
              .then((worksmaterials: WorksMaterialsModel) => {
                
                getMaterial(worksmaterials.material)
                  .then((material: MaterialModel) => {
                    let newData = [].concat(materialData);
                    newData.push({
                      type: "filled",
                      data: {
                        id: Math.floor(Math.random() * -10000),
                        name: material.title,
                        units: material.units,
                        count: worksmaterials.count,
                        price: material.price,
                        percent: "100",
                        total: "10",
                      }
                    });
                    setMaterialData(() => newData);
                  })
              })
          }
        })
    }

    setPrevWorkData(() => workData)
  }, [workData]);

  let getWordFile = (event: React.MouseEvent): void => {
    getWordFileRequest(workData, materialData);
  };

  let getExcelFile = (event: React.MouseEvent): void => {
    getExcelFileRequest(workData, materialData);
  }

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
        <div className="d-flex flex-row wrapper">
          <Button
            onClickHandler={getWordFile}
          >Сгенерировать word</Button>
          <Button
            onClickHandler={getExcelFile}
          >Сгенерировать excel</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
