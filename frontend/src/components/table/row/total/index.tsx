import * as React from "react";

interface DataProps {
 totalPrice: number; 
}

export const TotalRow = React.memo(({
  totalPrice
}: DataProps) => {

  const [percent, setPercent] = React.useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let percent = Number(e.target.value);
    setPercent(() => percent)
  };

  return (
    <tr>
      <th></th>
      <td></td>
      <td></td>
      <td></td>
      <td>Всего</td>
      <td>
        <input
          className="table__input border"
          onChange={onChangeHandler}
          value={percent}
        />
      </td>
      <td>{totalPrice * percent / 100}</td>
    </tr>
  )
});
