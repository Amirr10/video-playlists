import React from 'react'
import Carousel from './Carousel'
import '../App.css';

const Playlist = (props) => {
    console.log(props.listNum? props.listNum: null)

    return (
        <div className="playlist">
            
            <div className="playlist-title">
                    {props.playlist.name}
            </div>

            <div className="carousel">
                <Carousel thumnbails={props.playlist.newContent}
                          listNum={props.listNum === 0 ? 0: null}
                           />
            </div>
        </div>
    )
}

export default  Playlist