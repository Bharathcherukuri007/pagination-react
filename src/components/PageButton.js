import React from 'react'
import './PageButton.css'
const PageButton = (props) => {
  return (
    <button type='radio' className= {!props.selected ? 'button' : 'selected'} onClick={() => props.selectedButton(props.id)} >{props.pageNumber}</button>
  )
}

export default PageButton