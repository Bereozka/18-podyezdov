import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { AutocompleteInput } from "../../input/autocomplete";
import { WorkModel } from "../../../../interfaces/services/api";
import { TableRow } from "../../../../interfaces/table";

interface DataProps {
  data: Array<TableRow>;
  setData?: Dispatch<SetStateAction<Array<TableRow>>>;
  autocompleteList: Array<WorkModel>;
};

export const NewRow = React.memo(({
  autocompleteList,
  data,
  setData,
}: DataProps) => {
  
  const [result, setResult] = React.useState("");

  const onClickHandler = (event: React.MouseEvent) => {
    let currentItem: WorkModel;
    autocompleteList.forEach(item => {
      if (item.title === result) {
        currentItem = item;
      };
    });

    // check on already added
    let alreadyAdded = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].data.name === result) {
        alreadyAdded = true;
      };
    };
    if (alreadyAdded) {
      return
    };

    let newData = [].concat(data);
    if ( result === "Подзаголовок" ) {
      newData.push({
        type: "subtitle",
        data: {
          id: Math.floor(Math.random() * -10000),
          title: "Подзаголовок",
        }
      });
    } else if ( currentItem ) {
      newData.push({
        type: "filled",
        data: {
          id: currentItem.id,
          name: currentItem.title,
          units: currentItem.units,
          count: "1",
          price: String(currentItem.price),
          percent: "100",
          total: String(currentItem.price),
        }
      });
    } else {
      newData.push({
        type: "filled",
        data: {
          id: Math.floor(Math.random() * -10000),
          name: result,
          units: "units",
          count: "1",
          price: "10",
          percent: "100",
          total: "10",
        }
      });
    }
    setData(() => newData);
  };

  return (
    <tr>
      <th scope="row">#</th>
      <td>
        <AutocompleteInput
          items={autocompleteList.map((item: WorkModel) => item.title)}
          result={result}
          setResult={setResult}
        />
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button
          className="btn btn-success"
          type="button"
          onClick={onClickHandler}
        >Добавить</button>
      </td>
    </tr>
  ) 
});
