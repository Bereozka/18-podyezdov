import * as React from "react";

import { Row } from "../../../../interfaces/table";
import { FilledInput } from "../../input/filled";

interface DataProps {
  index: number,
  data: Row;
  updateRow: (id: number, newObj: Row) => void;
  deleteRow: (id: number) => void;
};

export const FilledRow = React.memo(({
  index,
  data,
  updateRow,
  deleteRow
}: DataProps) => {

  const onClickHandler = (): void => {
    deleteRow(data["id"]);
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <FilledInput
          title="name"
          value={data.name}
          data={data}
          updateRow={updateRow}
        />
      </td>
      <td> 
        <FilledInput
          title="units"
          value={data.units}
          data={data}
          updateRow={updateRow}
        />
      </td>
      <td>
        <FilledInput
          title="count"
          value={data.count}
          data={data}
          updateRow={updateRow}
        />
      </td>
      <td>
        <FilledInput
          title="price"
          value={data.price}
          data={data}
          updateRow={updateRow}
        />
      </td>
      <td>
        <FilledInput
          title="percent"
          value={data.percent}
          data={data}
          updateRow={updateRow}
        />
      </td>
      <td>{data.total}</td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={onClickHandler}
        >Удалить</button>
      </td>
    </tr>
  )
});
