import * as React from "react";

export const NewRow = React.memo(() => {
  return (
    <tr>
      <th scope="row">#</th>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <input className="table__input border" />
      </td>
      <td>
        <button className="btn btn-success" type="button">Добавить</button>
      </td>
    </tr>
  ) 
});