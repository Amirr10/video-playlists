import React, { useEffect, useRef } from 'react'
import '../App.css';


 const Thunmbail = (props) => {

    let focusBox = useRef(null)

    useEffect(() => {
        //Focus on the first item
        if(props.listNum === 0 && props.thumnNum === 0){
            console.log(focusBox.current)
            focusBox.current.focus()
        } else {
            if(props.focusNum !== 0){
                console.log()
            }
        }
    }, [])

    return (
        <div className="thumnbail" tabIndex={props.thumnNum}
                                    ref={focusBox}
                                    onKeyDown={(e) => props.focusFunc(e,props.thumnNum)}
                                    >
                <img className="thumb-img" src={props.img} alt=""/>
                {props.thumnbail.title}
                

        </div>
    )
}

export default Thunmbail