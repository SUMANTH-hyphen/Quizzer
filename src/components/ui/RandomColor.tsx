import { FC } from "react";

const RandomColor:FC<{tag:string, colorPicker:string[]}> = ({tag, colorPicker}) => {

    return (
        <span className={`w-fit inline-flex items-center rounded-md bg-${colorPicker[0]} px-2 py-1 text-xs font-medium text-${colorPicker[1]} ring-1 ring-offset-current ring-${colorPicker[2]}`}>{tag}</span>
    )
  }
  
  export default RandomColor