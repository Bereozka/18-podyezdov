import * as React from "react";

import { Row } from "../../../../interfaces/table";

interface DataProps {
  index: number,
  data: Row,
  updateRow: (id: number, newObj: Row) => void;
  deleteRow: (id: number) => void;
};

export const SubtitleRow = React.memo(({
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
      <th></th>
      <td></td>
      <td>
        <input
          id="title"
          className="table__input"
          value={data.title}
          onChange={onChangeHandler}
        />
      </td>
      <td></td>
      <td></td>
      <td> </td>
      <td> </td>
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
