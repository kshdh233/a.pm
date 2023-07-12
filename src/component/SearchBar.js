import React,{useState} from "react";
import './SearchBar.css';

const SearchBar = (props)=>{
    const products = props.searchItems;
    const [searchValue,setSearchValue]= useState("");

    const handleInputChange = (event)=>{
        setSearchValue(event.target.value);
    }

    const shouldDisplayButton = searchValue.length >0;

    const handleInputClear = () =>{
        setSearchValue("");
    }

    const filteredProducts = products &&products.filter((product) => { return product.includes(searchValue);})

    return(
        <div className="searchBar">
            <input className="textcss"type="text" value={searchValue} placeholder="공연,공연장 검색하기" onChange={handleInputChange}/>

            {shouldDisplayButton && 
            <button onClick={handleInputClear}> 확인 </button> }

            <ul>
            {filteredProducts &&filteredProducts.map((product)=>{
                return (<li key={product}>{product}</li>)
            })}
            </ul>
        </div>
    )
}

export default SearchBar;