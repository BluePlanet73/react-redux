import React from 'react'

export default function List(props) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                        <span onClick={() => props.change && props.change(item)}
                              style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                        >{item.name} </span>
                    <button onClick={() => props.remove(item)}>x</button>
                </li>
            ))}
        </ul>
    )
}
