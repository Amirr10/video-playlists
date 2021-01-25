import React, { Fragment, useRef } from 'react'
import Thunmbail from './Thunmbail'
import '../App.css';

 const Carousel = (props) => {

    let flag = props.listNum
    let num = 0
    const ref = useRef(null)

    const focusHandler = (e,ind) => {
        let tabs = document.querySelectorAll('[tabIndex]')
        // console.log(e.keyCode)
        // console.log(document.activeElement.tabIndex)

        if(e.keyCode === 37){
          ref.current = tabs[ind - 1]
          ref.current.focus()
          console.log(ref.current)
        } else if (e.keyCode === 39){
          ref.current = tabs[ind + 1]
          ref.current.focus()
        }
      }


    return (
        <>
            {props.thumnbails.map((thumn,i) =>
                    <Thunmbail thumnbail={thumn}
                               listNum={props.listNum === 0? 0 : null} 
                               thumnNum={i}
                               focusFunc={focusHandler}
                               focusNum={num}
                               img={thumn.thumbnail}
                               />
            )}
        </>
    )
}

export default Carousel
