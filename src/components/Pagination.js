import { Icon } from "@iconify/react"
import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react/cjs/react.development"

export const Pagination = ({items, setPaginatedItems, itemsPerPage, origin}) => {
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setPaginatedItems(items.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(items.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, items])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset)
    }

    //Handles change of player
    useEffect(() => {
        setItemOffset(0)
    }, [origin])

    return (
        <>
            {pageCount !== 1 && <ReactPaginate
                activeClassName="text-slate-50 font-bold"
                breakLabel="..."
                nextClassName="px-2 border-l-2 border-slate-900"
                previousClassName="px-2 border-r-2 border-slate-900"
                previousLabel={<Icon icon="ic:baseline-arrow-back-ios-new"/>}
                nextLabel={<Icon icon="ic:baseline-arrow-back-ios-new" hFlip={true}/>}
                pageLinkClassName="px-3"
                pageClassName="block"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                className="flex text-slate-400 font-semibold mt-4 bg-slate-800 w-min items-center rounded"
            />}
        </>
    )
}