import { Fragment, useState } from 'react';
import './filter.css'

interface FilterProps {
    setState: Function;
    orbitingBodys: Array<string>;
    filter: string;
}

const Filter = (props: FilterProps) => {
    const [displayFilter, setDisplayFilter] = useState(false);
    const [searchText, setSearchText] = useState('');


    /**
        * Open and close the filter box.
    */
    const openFilter = () => {
        setDisplayFilter(!displayFilter);
    }

    /**
        * Search for a match in the orbiting body list with the input text.
    */
    const foundInSearch = (body: string) => {
        return (body.toLowerCase()).indexOf(searchText.toLowerCase()) !== -1;
    }

    /**
        * Send the filter to the parent component and close the filter.
    */
    const handleClick = (body: string) => {
        props.setState(body === props.filter ? '' : body);
        setDisplayFilter(false);
    }

    return (
        <Fragment>
            <button onClick={openFilter}>Open filter</button>
            {
                displayFilter ?
                    <div className='filterPopup'>
                        <input value={searchText} onChange={(event) => setSearchText(event.target.value)} type='text' className='search' placeholder='Type to search' />
                        {
                            props.orbitingBodys.map((body: string, index: number) => 
                            foundInSearch(body) ?
                                <p onClick={() => handleClick(body)} className={props.filter === body ? 'bodyItem bold' : 'bodyItem'} key={index}>{body}</p>
                                : <Fragment key={index}></Fragment>
                            )
                        }
                    </div>
                    : <Fragment></Fragment>
            }
        </Fragment>
    );
}

export default Filter;
