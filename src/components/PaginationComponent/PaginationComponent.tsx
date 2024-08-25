import React, {FC} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";
import {router} from "../../router";

interface PaginationControlsProps {
    hasNextPage: boolean
    hasPrevPage: boolean
}

const PaginationComponent: FC<PaginationControlsProps> = (
    {
        hasNextPage,
        hasPrevPage,
    }
) => {
    // const router = useRouter();
    // let rout = useLocation();
    // console.log(rout);
    const searchParams = useSearchParams();
    // const page = searchParams.get('offset') ?? '1'

    return (
        <div className="pagination">
            <button
                className='bg-blue-500 text-white p-1'
                disabled={!hasPrevPage}
                onClick={() => {
                    // router.push(`?offset=${Number(page) - 1}`);
                }}>
                prev page
            </button>

            <div className="pagination-num">
                {/*{page}*/}
            </div>

            <button
                className='bg-blue-500 text-white p-1'
                disabled={!hasNextPage}
                onClick={() => {
                    // router.push(`?offset=${Number(page) + 1}`);
                }}>
                next page
            </button>
        </div>
    )
}

export default PaginationComponent;