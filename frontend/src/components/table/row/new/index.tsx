import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { AutocompleteInput } from "../../input/autocomplete";
import { getListWorks } from "../../../../services/api/work";
import { WorkModel } from "../../../../interfaces/services/api";
import { TableRow, Row } from "../../../../interfaces/table";

interface DataProps {
  data: Array<TableRow>;
  setData?: Dispatch<SetStateAction<Array<TableRow>>>;
};

interface ResponseData {
  data: Array<WorkModel>;
};

export const NewRow = React.memo(({
  data,
  setData,
}: DataProps) => {

  const [items, setItems] = React.useState<Array<WorkModel>>([]);
  const [result, setResult] = React.useState("");

  React.useEffect(() => {
    getListWorks()
      .then((
        data,
      ): void => {
        if (!data) {
          return
        };
        setItems(() => {
          return [].concat(data)
        });
      });
  }, []);

  const onClickHandler = (event: React.MouseEvent) => {
    items.forEach(item => {
      if (item.title !== result) {
        return
      }

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
      newData.push({
        type: "filled",
        data: {
          id: item.id,
          name: item.title,
          units: item.units,
          count: "1",
          price: String(item.price),
          percent: "100",
          total: String(item.price),
        }
      });
      setData(() => newData);
    });
  };

  return (
    <tr>
      <th scope="row">#</th>
      <td>
        <AutocompleteInput
          items={items.map((item: WorkModel) => item.title)}
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