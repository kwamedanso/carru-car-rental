import React from 'react'

export default function Button(props) {
    return (
        <button className={props.active ? `active btn` : 'btn'} data-button={props.btnAttribute} onClick={() => props.onClick()} >{props.title} </button>
    )
}
