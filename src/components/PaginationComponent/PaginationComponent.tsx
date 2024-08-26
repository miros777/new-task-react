import React, {useEffect} from 'react'
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redax/store";
import {pokemonAction} from "../../redax/slices/pokemonSlice";


const PaginationComponent = () => {

    const dispatch = useAppDispatch();
    const paginInfo = useAppSelector(state => state.pokemonStore.pagenInfo);

    let [query, setQuery] = useSearchParams({offset: '0'});

    useEffect(() => {
        const currentOffset = query.get('offset') || '0';
        dispatch(pokemonAction.loadPaginatedInfo(currentOffset));
    }, [query]);

    const previous = paginInfo?.previous;
    const next = paginInfo?.next;

    let currentPage:number = (Number(query.get('offset')) / 20);
    if(currentPage > 0){
        currentPage = currentPage + 1;
    }else {
        currentPage = 1;
    }

    return (
        <div className="wrapper d-flex f-wrap j-c-center pagination">
            <button
                disabled={!previous}
                onClick={() => {
                    const offset = query.get('offset');
                    if (offset) {
                        let currentPage = +offset;
                        currentPage -= 20;
                        setQuery({offset: currentPage.toString()})
                    }
                }}
            >
                prev
            </button>

            <div className="currentPage d-flex f-column j-c-center ">
                <span>page</span>
                <span>{currentPage}</span>
            </div>


            <button
                disabled={!next}
                onClick={() => {
                    const offset = query.get('offset');
                    if (offset) {
                        let currentPage = +offset;
                        currentPage += 20;
                        setQuery({offset: currentPage.toString()})
                    }

                }}
            >next
            </button>
        </div>
    );
};
export default PaginationComponent;