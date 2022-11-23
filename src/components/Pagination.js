import React from 'react';
import { Link } from "react-router-dom";

import ArrowLeft from "../images/ArrowLeft.svg"
import ArrowRight from "../images/ArrowRight.svg"

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    
    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <nav>
            <ul className='flex items-center justify-center list-none h-[52px] w-auto bg-secondary shadow-md rounded-lg px-[23px]'>
                <li className="mr-[17px] page-item ">
                    <Link className="page-link" 
                        onClick={prevPage} 
                        to={'/job-list'}>
                        
                        <img src={ArrowLeft} alt="Arrow Left"/>
                    </Link>
                </li>
                <hr className='h-8 w-[1.3px]'/>
                <div className='mx-[55.5px] max-sm:mx-10 gap-2 flex '>
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}>

                            <Link className= {`font-bold max-sm:text-base text-[20.8px] px-[15px] ${currentPage === pgNumber ? 'active' : ''} `}  onClick={() => setCurrentPage(pgNumber)}  
                                to={'/job-list'}>
                                
                                {pgNumber}
                            </Link>
                        </li>
                    ))}
                </div>
                <hr className='h-8 w-[1.3px]'/>
                <li className="ml-[17px] page-item">
                    <Link className="page-link" 
                        onClick={nextPage}
                        to={'/job-list'}>
                        
                        <img src={ArrowRight} alt="Arrow Right"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination