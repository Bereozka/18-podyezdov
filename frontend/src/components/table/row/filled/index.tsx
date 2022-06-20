import * as React from "react";

import { Row } from "../../../../interfaces/table";

interface DataProps {
  index: number,
  data: Row;
  updateData: (id: number, newObj: Row) => void;
};

export const FilledRow = React.memo(({
  index,
  data,
  updateData,
}: DataProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    data[e.target.id] = e.target.value;
    updateData(data["id"], data);
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
        >Удалить</button>
      </td>
    </tr>
  )
});
