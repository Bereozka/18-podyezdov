import * as React from "react";

interface Items {
  items?: Array<String>,
}

export const Thead = React.memo(({ items }:Items) => {
  return (
    <thead>
      <tr className="thead-dark">
        {items.map((item, i) => <th scope="col" key={i}>{item}</th>)}
      </tr>
    </thead>
  )
});
