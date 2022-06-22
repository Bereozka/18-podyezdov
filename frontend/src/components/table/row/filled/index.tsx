import * as React from "react";

import { Row } from "../../../../interfaces/table";

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    data[e.target.id] = e.target.value;
    updateRow(data["id"], data);
  };

  const onClickHandler = (): void => {
    deleteRow(data["id"]);
  };

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <input
          className="table__input"
          id="name"
          value={data.name}
          onChange={onChangeHandler}
        />
      </td>
      <td> 
        <input
          className="table__input"
          id="units"
          value={data.units}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          className="table__input"
          id="count"
          value={data.count}
          type="number"
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          className="table__input"
          id="price"
          value={data.price}
          type="number"
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          className="table__input"
          id="percent"
          value={data.percent}
          type="number"
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          className="table__input"
          id="total"
          value={data.total}
          type="number"
          onChange={onChangeHandler}
        />
      </td>
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
