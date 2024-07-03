import React from 'react'

export const Pagination = ({postsPerPage,totalPosts}) => {
    const pageNumbers=[];

    for(let i= 1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        {pageNumbers.map(number =>(
            <a href='!#' className='page-link'>
                {number}
            </a>
        ))}
    </nav>>
  )
}
