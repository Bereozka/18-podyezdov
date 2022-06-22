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
  setData,
}: DataProps) => {

  const [workData, setWorkData] = React.useState<Array<TableRow>>([]);
  const [totalPrice, setTotalPrice] = React.useState();

  const calculateTotalPrice = () => {
    data.map(item => {
      if (item.type !== "filled") {
        return
      };
      let count = Number(item.data.count);
      let price = Number(item.data.price);
      let percent = Number(item.data.percent) / 100;
      item.data.total = String(count * price * percent);
      return item
    });
  };

  const updateRow = (id: number, newObj: Row): void => {
    setData(prevState => {
      const newState = prevState.map(obj => {
        if (obj.data.id === id) {
          obj.data = newObj
        };
        return obj
      });
      return newState
    });
    calculateTotalPrice();
  };

  const deleteRow = (id: number): void => {
    setData(state => {
      return state.filter(function(item){ 
          return item.data.id !== id; 
      });
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
            updateRow={updateRow}
            deleteRow={deleteRow}
          />
        }
        return <SubtitleRow
          key={i}
          index={i + 1}
          data={item.data}
          updateRow={updateRow}
          deleteRow={deleteRow}
        />
      })}
      <TotalRow />
      <NewRow />
    </tbody>
  )
});
