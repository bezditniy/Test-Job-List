import React, {useState} from "react";

import List from "../components/Job-list"
import Pagination from '../components/Pagination';


const BoardList = ({products}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(products.length / recordsPerPage)

    return (

        <div className="mx-auto my-7 px-4 flex flex-col gap-2 max-w-[1400px]">
            {currentRecords.map((item) => (
                <a className="rounded-lg flex  shadow-md px-4 py-6 bg-secondary" key={item.id} href={`/job-list/${item.id}`}>
                    <List
                        pictures={item.pictures[0]}
                        title={item.title}
                        name={item.name}
                        address={item.address}
                        updatedAt={item.updatedAt}
                        createdAt={item.createdAt}
                    />
                </a>
            ))}

            <div className="max-w-[512px] mx-auto mt-[49px]">
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default BoardList