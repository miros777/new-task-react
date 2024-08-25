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

    return (
        <div>

            <button
                disabled={!previous}
                onClick={() => {
                    const page = query.get('offset');
                    if (page) {
                        let currentPage = +page;
                        currentPage -= 20;
                        setQuery({offset: currentPage.toString()})
                    }
                }}
            >
                prev
            </button>

            <button
                disabled={!next}
                onClick={() => {
                    const page = query.get('offset');
                    if (page) {
                        let currentPage = +page;
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