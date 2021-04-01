import { pathToArray } from 'graphql/jsutils/Path';
import React, { useState, useContext } from 'react';
import {useParams} from 'react-router-dom'
import { Collapse } from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';

const Category = () => {
    const context = useContext(FilterContext);
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
    const setSelectedCategory = context.setSelectedCategory;
    const [url, setUrl] = useState();
    const cat = context.state;
    
    
    

    const updateCategory = (category) => {
        context.setSelectedBrands([])
        const pathname = window.location.pathname;
        setUrl(pathname);
        setSelectedCategory(category);
      

    }

   const querylink = window.location.search;
   const urlParams = new URLSearchParams(querylink)
   const catg = urlParams.get('category')
   console.log(catg)

   const type = (catg === 'Skirts') ? 
   (
    <div className="collection-collapse-block open">
    <h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
    <Collapse isOpen={isCategoryOpen}>
        <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
                <ul className="category-list">
                    <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                   <li><p className="font-weight-bold">Women Fashion</p></li>
                    <li><a href={null} onClick={() => updateCategory("Dresses")}>Dresses</a></li>
                    <li><a href={null} onClick={() => updateCategory("Skirts")}>Skirts</a></li>
                    <li><a href={null} onClick={() => updateCategory("T-Shirts")}>Sweater</a></li>
                    <li><a href={null} onClick={() => updateCategory("Jackets")}>Jackets</a></li>
                    <li><a href={null} onClick={() => updateCategory("Jeans")}>Jeans </a></li>
                    <li><a href={null} onClick={() => updateCategory("Gym")}>Gym wear</a></li>
                    <li><a href={null} onClick={() => updateCategory("Shoes")}>Shoes</a></li>
                    <li><p className="font-weight-bold">Women Accessories</p></li>
                    <li><a href={null} onClick={() => updateCategory("Hats")}>Hats</a></li>
                    <li><a href={null} onClick={() => updateCategory("Handbags")}>Handbags</a></li>
                    <li><a href={null} onClick={() => updateCategory("tools")}>tools</a></li>
                    
                </ul>
            </div>
        </div>
    </Collapse>
</div>
     ) :  catg === 'Sweater ' ?
   ( <div className="collection-collapse-block open">
    <h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
    <Collapse isOpen={isCategoryOpen}>
        <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
                <ul className="category-list">
                    <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                   <li><p className="font-weight-bold">Men Fashion</p></li>
                    <li><a href={null} onClick={() => updateCategory("Dresses")}>Dresses</a></li>
                    <li><a href={null} onClick={() => updateCategory("Skirts")}>Skirts</a></li>
                    <li><a href={null} onClick={() => updateCategory("T-Shirts")}>Sweater</a></li>
                    <li><a href={null} onClick={() => updateCategory("Jackets")}>Jackets</a></li>
                    <li><a href={null} onClick={() => updateCategory("Jeans")}>Jeans </a></li>
                    <li><a href={null} onClick={() => updateCategory("Gym")}>Gym wear</a></li>
                    <li><a href={null} onClick={() => updateCategory("Shoes")}>Shoes</a></li>
                    <li><p className="font-weight-bold">Men Accessories</p></li>
                    <li><a href={null} onClick={() => updateCategory("Hats")}>Hats</a></li>
                    <li><a href={null} onClick={() => updateCategory("Handbags")}>Handbags</a></li>
                    <li><a href={null} onClick={() => updateCategory("tools")}>tools</a></li>
                    
                </ul>
            </div>
        </div>
    </Collapse>
</div>

) : '' 
    
return(type)

}

export default Category;