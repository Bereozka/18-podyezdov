import * as React from "react";

import { Row } from "../../../../interfaces/table";

interface DataProps {
  index: number,
  data: Row,
};

export const SubtitleRow = React.memo(({
  index,
  data,
}: DataProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    console.log(value);
    console.log(name);
    data["name"] = value;
    console.log(data);
  };

  return (
    <tr>
      <th></th>
      <td></td>
      <td>
        <input
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
        <button className="btn btn-danger" type="button">Удалить</button>
      </td>
    </tr>
  )
});
