import * as React from "react";

import { Row } from "../../../../interfaces/table";
import { FilledInput } from "../../input/filled";

interface DataProps {
  index: number;
  data: Row;
  updateRow: (id: number, newObj: Row) => void;
  deleteRow: (id: number) => void;
};

export const SubtitleRow = React.memo(({
  index,
  data,
  updateRow,
  deleteRow,
}: DataProps) => {

  const onClickHandler = (): void => {
    deleteRow(data["id"]);
  };

  return (
    <tr>
      <th></th>
      <td></td>
      <td>
        <FilledInput
          title="title"
          value={data.title}
          data={data}
          updateRow={updateRow}
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
