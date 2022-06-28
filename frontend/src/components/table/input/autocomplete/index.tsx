import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import styles from "./styles.module.css";

interface DataProps {
  items: Array<String>;
  result: String;
  setResult?: Dispatch<SetStateAction<String>>;
}

export const AutocompleteInput = React.memo(({
  items,
  result,
  setResult,
}: DataProps) => {

  const [suggestions, setSuggestions] = React.useState<Array<String>>([]);


  let search = (str: string) => {
    let results = [];
    const val = str.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      if (items[i].toLowerCase().indexOf(val) > -1) {
        results.push([items[i], "disable"]);
      };
    };
    if (results.length !== 0) {
      results[0][1] = "active";
    };
    return results;
  }

  let onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.currentTarget.value;
    let results = Array();
    if (inputVal.length > 0) {
      results = search(inputVal);
    }
    setSuggestions(() => results);
    setResult(() => inputVal);
  };

  let onMouseDownHandler = (event: React.MouseEvent) => {
    let text = String(event.currentTarget.innerHTML);
    setSuggestions(() => [])
    console.log(text);
    setResult(() => text);
  };

  let onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      for (let i = 0; i < suggestions.length; i++) {
        if (suggestions[i][1] === "active") {
          setResult(() => String(suggestions[i][0]));
          setSuggestions(() => []);
        }
      }
    };
  };

  let onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.code === "ArrowDown") {
      for (let i = 0; i < suggestions.length; i++) {
        if (suggestions[i][1] === "active" && i + 1 !== suggestions.length) {
          let newSuggestions = [].concat(suggestions);
          newSuggestions[i][1] = "disable";
          newSuggestions[i + 1][1] = "active";
          setSuggestions(() => newSuggestions)
          break
        }
      }
    } else if (event.code === "ArrowUp") {
      for (let i = 0; i < suggestions.length; i++) {
        if (suggestions[i][1] === "active" && i !== 0) {
          let newSuggestions = [].concat(suggestions);
          newSuggestions[i][1] = "disable";
          newSuggestions[i - 1][1] = "active";
          setSuggestions(() => newSuggestions)
        };
      };
    };
  };

  let onMouseEnterHandler = (event: React.MouseEvent) => {
    let newSuggestions = [].concat(suggestions);
    for (let i = 0; i < suggestions.length; i++) {
      if (newSuggestions[i][0] === event.currentTarget.innerHTML) {
        newSuggestions[i][1] = "active";
      } else {
        newSuggestions[i][1] = "disable";
      };
    };
    setSuggestions(() => newSuggestions);
  };

  let onBlurHandler = () => {
    console.log("blur"); 
    setSuggestions(() => []);
  };

  let onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    let results = Array();
    if (inputVal.length > 0) {
      results = search(inputVal);
    }
    setSuggestions(() => results);
    setResult(() => inputVal);
  }

  return (
    <div>
      <input
        className="table__input border"
        value={String(result)}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        onKeyDown={onKeyDownHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <div className={styles.suggestions}>
        <ul>
          {suggestions.map((item, i) => {
            if (item[1] === "active") {
              return (<li
                key={i}
                onMouseDown={onMouseDownHandler}
                onMouseEnter={onMouseEnterHandler}
                className={styles.active}
              >{item[0]}</li>)
            } else {
              return (<li
                key={i}
                onMouseEnter={onMouseEnterHandler}
              >{item[0]}</li>)
            }

        })}
        </ul>
      </div>
    </div>
  )
});
