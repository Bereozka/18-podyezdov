import * as React from 'react';

interface Props {
  children: React.ReactNode;
  onClickHandler?: (event: React.MouseEvent) => void;
}

export const Button = React.memo(({
  children,
  onClickHandler,
}: Props) => {

  return (
    <div className="p-2">
      <button
        className="btn btn-primary btn-lg"
        type="button"
        onClick={onClickHandler}
      >{children}</button>
    </div>
  )
})
