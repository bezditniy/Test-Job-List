import React from "react";
import SelectedMark from "../images/MarkItem.svg"
import NavigateMark from "../images/NavigateMark.svg"

function List (props) {

    function dateDiffInDays(a, b) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc1 - utc2) / _MS_PER_DAY);
      }
      
    const a = new Date(props.updatedAt),
        b = new Date(props.createdAt),
        difference = dateDiffInDays(a, b);
          
    function getFormatedStringFromDays(numberOfDays) {
        let days = Math.floor(numberOfDays % 365 % 30);
    
        return [days];
    }
    
    let postedDAte = getFormatedStringFromDays(difference);

    return (

        <>
            <div className="mr-6 max-sm:mt-[25px]">
                <img className="min-w-[85px] h-[85px] max-sm:min-w-[66px] max-sm:h-[66px] rounded-full" src={props.pictures} alt="Job"/>
            </div>
            <div className="flex max-sm:flex-col-reverse justify-between grow">
                <div className="opacity-75 leading-7 max-w-[700px]">
                    <div className="xs:text-base sm:font-bold sm:text-xl font-normal text-lg text-[#3A4562] ">{props.title}</div>
                    <div className="flex text-center gap-1 xs:text-sm text-secondary-txt">Department name <span className=""> • </span> {props.name}</div>
                    <div className="flex gap-1 xs:text-sm text-secondary-txt"><img className="" src={NavigateMark} alt="Navigate Mark"/>{props.address}</div> 
                </div>
                <div className="opacity-75 min-w-[130px] flex flex-col justify-between items-end">
                    <img className="w-4 max-sm:hidden" src={SelectedMark} alt="Selected Mark"/>
                    <div className="text-secondary-txt xs:text-xs max-sm:text-sm">Posted {postedDAte} days ago</div> 
                </div>
            </div>
        </>
        
    )

}

export default List;