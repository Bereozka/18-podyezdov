import * as React from "react";

import { Thead } from "./thead";
import { Tbody } from "./tbody";

interface DataProps {
  data: any;
  setData: any;
  autocompleteList: any;
  theadItems: string[];
}


export const Table = React.memo(({
  data,
  setData,
  autocompleteList,
  theadItems,
}: DataProps) => {

  return (
    <div>
    <table className="table">
      <Thead items={theadItems} />
      <Tbody 
        data={data}
        setData={setData}
        autocompleteList={autocompleteList}
      />
    </table>
    </div>
  )
});
