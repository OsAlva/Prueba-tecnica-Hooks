 import { useState, useId} from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';
 
 export function Filters(){
    const {filters, setFilters} = useFilters();
    const minPriceFilterId = useId();
    const minPriceCategoryId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Min price:</label>
                <input
                    type='range'
                    id={filters.minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={minPriceCategoryId}>Category</label>
                <select id={minPriceCategoryId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Moviles</option>
                </select>
            </div>
        </section>
    )
 }