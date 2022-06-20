import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { FilledRow, SubtitleRow, NewRow, TotalRow } from "../row";

import { TableRow, Row } from "../../../interfaces/table";


interface DataProps {
  data: Array<TableRow>;
  setData?: Dispatch<SetStateAction<Array<TableRow>>>;
}

export const Tbody = React.memo(({
  data,
  setData
}: DataProps) => {

  const updateData = (id: number, newObj: Row) => {
    setData(prevState => {
      const newState = prevState.map(obj => {
        if (obj.data.id === id) {
          obj.data = newObj
        };
        return obj
      });
      return newState
    });
  };

  return (
    <tbody>
      {data.map((item, i) => {
        if (item.type === "filled") {
          return <FilledRow
            key={i}
            index={i + 1}
            data={item.data}
            updateData={updateData}
          />
        }
        return <SubtitleRow
          key={i}
          index={i + 1}
          data={item.data}
        />
      })}
      <TotalRow />
      <NewRow />
    </tbody>
  )
});
