import React from 'react'
import { TOTAL_RECORDS } from './constants';
import PageButton from './components/PageButton';
import './App.css'
const Pagination = (props) => {
    let pagesRequired;
    let pages = [];
    
    pagesRequired = parseInt(TOTAL_RECORDS/props.limit);


    for(let i = 1 ; i <= pagesRequired; i++){
        pages.push(<PageButton pageNumber = {i} selected = {props.id == i - 1} id = {i - 1} selectedButton = {props.selectedButton}/>)

    }
    if(pagesRequired * props.limit < TOTAL_RECORDS){
        for(let i = pagesRequired + 1 ; i <= TOTAL_RECORDS; i = i * props.limit){
          pages.push(<PageButton pageNumber = {i} selected = {props.id == i - 1} id = {i - 1} selectedButton = {props.selectedButton}/>)

      }
    }
  return (
    <div className='pagination'>
        {pages}

    </div>
  )
}

export default Pagination;