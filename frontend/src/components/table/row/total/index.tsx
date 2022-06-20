import * as React from "react";

export const TotalRow = React.memo(() => {
  return (
    <tr>
      <th></th>
      <td></td>
      <td></td>
      <td></td>
      <td>Всего</td>
      <td>
        <input className="table__input border" />
      </td>
      <td>120</td>
    </tr>
  )
});
