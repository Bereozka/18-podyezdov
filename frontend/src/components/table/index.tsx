import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { Thead } from "./thead";
import { Tbody } from "./tbody";

import { TableRow } from "../../interfaces/table";

interface DataProps {
  workData: Array<TableRow>;
  setWorkData?: Dispatch<SetStateAction<Array<TableRow>>>;
  materialData: Array<TableRow>;
  setMaterialData?: Dispatch<SetStateAction<Array<TableRow>>>;
}


export const Table = React.memo(({
  workData,
  setWorkData,
  materialData,
  setMaterialData,
}: DataProps) => {

  const thead_items = [
    "№",
    "НАИМЕНОВАНИЕ РАБОТ",
    "ЕД. ИЗМ",
    "КОЛ-ВО",
    "ЦЕНА, (₽)",
    "%",
    "∑, (₽)",
    "Кнопка",
  ]

  return (
    <div>
    <table className="table">
      <Thead items={thead_items} />
      <Tbody 
        data={workData}
        setData={setWorkData}
      />
    </table>
    </div>
  )
});
