// create component

import { useState } from "react";

export default function Gallery(props) {
  const [index, setIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const handleNextClick = () => {
    console.log(index);
    if (index < 12) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleHideClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>

      <h1>{props.sculptureList[index].name}</h1>
      <p>
        ({index + 1} of {props.sculptureList.length})
      </p>
      {/* {hidden ? "" : "Hell"} */}
      <button onClick={handleHideClick}>{isHidden ? "show" : "Hide"}</button>
      {isHidden ? "" : <p>{props.sculptureList[index].description}</p>}

      <div>
        <img
          src={props.sculptureList[index].url}
          alt={props.sculptureList[index].alt}
        />
      </div>
    </div>
  );
}
