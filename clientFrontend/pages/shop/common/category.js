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


   const type = ((catg === 'Dresses') || (catg === 'Skirts')|| (catg === 'Ftshirts') || (catg === 'Fjeans')|| (catg === 'Fsports')|| (catg === 'Fall')) ?
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
                    <li><a href={null} onClick={() => updateCategory("Ftshirts")}>T-shirts</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fjackets")}>Jackets</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fjeans")}>Jeans </a></li>
                    <li><a href={null} onClick={() => updateCategory("Fsports")}>Sports wear</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fshoes")}>Shoes</a></li>
                    <li><p className="font-weight-bold">Women Accessories</p></li>
                    <li><a href={null} onClick={() => updateCategory("Fnecklaces")}>Necklaces</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fbracelets&rings")}>Bracelets & Rings</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fcaps&hats")}>Caps & Hats</a></li>
                    <li><a href={null} onClick={() => updateCategory("Fpurses&bags")}>Purses & bags</a></li>
                    
                </ul>
            </div>
        </div>
    </Collapse>
</div>
     ) : (( catg === 'Sweater') || (catg === 'Mshirts')|| (catg === 'MBlazers')|| (catg === 'MJeans')|| (catg === 'Mall')) ?
   ( <div className="collection-collapse-block open">
    <h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
    <Collapse isOpen={isCategoryOpen}>
        <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
                <ul className="category-list">
                    <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                   <li><p className="font-weight-bold">Men Fashion</p></li>
                    <li><a href={null} onClick={() => updateCategory("Mshirts")}>Shirts</a></li>
                    <li><a href={null} onClick={() => updateCategory("Msweater")}>Sweater</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mjeans")}>Jeans</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mjackets")}>Jackets</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mblazers")}>Blazers </a></li>
                    <li><a href={null} onClick={() => updateCategory("Msports")}>Gym wear</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mshoes")}>Shoes</a></li>
                    <li><p className="font-weight-bold">Men Accessories</p></li>
                    <li><a href={null} onClick={() => updateCategory("Mnecklaces")}>Necklaces</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mbracelets&rings")}>Bracelets & Rings</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mcaps&hats")}>Caps & Hats</a></li>
                    <li><a href={null} onClick={() => updateCategory("Mbags")}>Bags</a></li>
                    
                </ul>
            </div>
        </div>
    </Collapse>
</div>

) : '' 
    
return(type)

}

export default Category;