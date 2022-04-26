import React from "react";
import counter from "../Store/counter";
import {observer} from "mobx-react-lite";
import classes from './styles.module.css'

interface IProps {}

export const Counter: React.FC<IProps> = observer(() => {
    return (
      <div className={classes.counterContainer}>
          <div>
              {counter.total}
          </div>
          <button onClick={()=>counter.increment()} >inc</button>
          <button onClick={()=>counter.decrement()} >dec</button>
      </div>
    )
})