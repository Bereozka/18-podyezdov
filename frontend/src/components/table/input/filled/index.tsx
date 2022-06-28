import * as React from "react";

import { Row } from "../../../../interfaces/table";

interface DataProps {
  title: string;
  value: string;
  data: Row;
  updateRow: (id: number, newObj: Row) => void;
};

export const FilledInput = React.memo(({
  title,
  value,
  data,
  updateRow,
}: DataProps) => {

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    data[event.target.id] = event.target.value;
    updateRow(data["id"], data);
  };


  return (
    <input
      id={title}
      className="table__input"
      value={value}
      onChange={onChangeHandler}
    />
  );
});
