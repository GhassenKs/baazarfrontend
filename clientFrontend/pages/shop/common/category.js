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


   const type = ((catg === 'Dresses') || (catg === 'Skirts')|| (catg === 'Ftshirts') || (catg === 'Fjeans')|| (catg === 'Fsports')|| (catg === 'Fall')
   || (catg === 'Fall')|| (catg === 'Fnecklaces')|| (catg === 'Fbracelets&rings')|| (catg === 'Fcaps&hats')|| (catg === 'Fpurses&bags')) ?
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
     ) : (( catg === 'Sweater') || (catg === 'Mshirts')|| (catg === 'MBlazers')|| (catg === 'MJeans')|| (catg === 'Mall')
     || (catg === 'Mnecklaces')|| (catg === 'Mbracelets&rings')|| (catg === 'Mcaps&hats')|| (catg === 'Mbags')) ?
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

) :  (( catg === 'tables') || (catg === 'chairs')|| (catg === 'desks')|| (catg === 'bedrooms')|| (catg === 'Mall')
|| (catg === 'televisions')|| (catg === 'projectors')|| (catg === 'tvreceivers')|| (catg === 'Soundspeakers')|| (catg === 'microwaves')|| (catg === 'lights')|| (catg === 'refrigeratorsnfreezers')   ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
               <li><p className="font-weight-bold">Home Furniture</p></li>
                <li><a href={null} onClick={() => updateCategory("chairs")}>Chairs</a></li>
                <li><a href={null} onClick={() => updateCategory("Tables")}>Tables</a></li>
                <li><a href={null} onClick={() => updateCategory("bedrooms")}>Bedrooms</a></li>
                <li><a href={null} onClick={() => updateCategory("desks")}>Desks</a></li>
                <li><a href={null} onClick={() => updateCategory("mattresses")}>Mattresses</a></li>
                <li><a href={null} onClick={() => updateCategory("dressers")}>Dressers</a></li>
                <li><p className="font-weight-bold">Home Entertainment</p></li>
                <li><a href={null} onClick={() => updateCategory("televisions")}>Televisions</a></li>
                <li><a href={null} onClick={() => updateCategory("TVreceivers")}>TV receivers</a></li>
                <li><a href={null} onClick={() => updateCategory("projectors")}>Projectors</a></li>
                <li><a href={null} onClick={() => updateCategory("Sspeakers")}>Soundbar Speakers</a></li>
                <li><p className="font-weight-bold">Home Appliances</p></li>
                <li><a href={null} onClick={() => updateCategory("microwaves")}>Microwave</a></li>
                <li><a href={null} onClick={() => updateCategory("lights")}>Indoors & outdoors light</a></li>
                <li><a href={null} onClick={() => updateCategory("frigs")}>Refrigerator & Freezers</a></li>
                
                
            </ul>
        </div>
    </div>
</Collapse>
</div>

):  (( catg === 'digitalcameras') || (catg === 'securitycameras')|| (catg === 'Caccessories')|| (catg === 'headphonesnearphones ')|| (catg === 'speakers')
|| (catg === 'radios')|| (catg === 'desktopC')|| (catg === 'laptops')  ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
               <li><p className="font-weight-bold">Cameras & photography</p></li>
                <li><a href={null} onClick={() => updateCategory("digitalcameras")}>Digital cameras</a></li>
                <li><a href={null} onClick={() => updateCategory("securitycameras")}>Security cameras</a></li>
                <li><a href={null} onClick={() => updateCategory("Caccessories")}>Camera Accessories</a></li>
                
                <li><p className="font-weight-bold">Audio</p></li>
                <li><a href={null} onClick={() => updateCategory("Headphonesnearphones")}>Headphones & Earphones</a></li>
                <li><a href={null} onClick={() => updateCategory("speakers")}>Speakers</a></li>
                <li><a href={null} onClick={() => updateCategory("radios")}>Radios</a></li>

                <li><p className="font-weight-bold">Computers</p></li>
                <li><a href={null} onClick={() => updateCategory("desktopC")}>Desktop computers</a></li>
                <li><a href={null} onClick={() => updateCategory("laptops")}>Laptop computers</a></li>
                
                
                
               
                
                
            </ul>
        </div>
    </div>
</Collapse>
</div>

)




:  (( catg === 'strawberry') || (catg === 'bananas')|| (catg === 'apples')|| (catg === 'watermelons')|| (catg === 'allfruits')
|| (catg === 'allveg')|| (catg === 'tomatoes')|| (catg === 'potatoes')|| (catg === 'carrots')|| (catg === 'onions')|| (catg === 'lettuce')|| (catg === 'water')
|| (catg === 'milk')|| (catg === 'softdrinks')  ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
               <li><p className="font-weight-bold">Fruits</p></li>
                <li><a href={null} onClick={() => updateCategory("strawberry")}>Strawberry</a></li>
                <li><a href={null} onClick={() => updateCategory("bananas")}>Bananas</a></li>
                <li><a href={null} onClick={() => updateCategory("apples")}>Apples</a></li>
                <li><a href={null} onClick={() => updateCategory("watermelons")}>Watermelons</a></li>
                <li><a href={null} onClick={() => updateCategory("pears")}>Pears</a></li>
                <li><a href={null} onClick={() => updateCategory("mangoes")}>Mangoes</a></li>
                <li><a href={null} onClick={() => updateCategory("peaches")}>Peaches</a></li>

                <li><p className="font-weight-bold">Vegetables</p></li>
                <li><a href={null} onClick={() => updateCategory("tomatoes")}>Tomatoes</a></li>
                <li><a href={null} onClick={() => updateCategory("potatoes")}>Potatoes</a></li>
                <li><a href={null} onClick={() => updateCategory("carrots")}>Carrots</a></li>
                <li><a href={null} onClick={() => updateCategory("onions")}>Onions</a></li>
                <li><a href={null} onClick={() => updateCategory("lettuce")}>Lettuce</a></li>
                <li><p className="font-weight-bold">Beverages</p></li>
                <li><a href={null} onClick={() => updateCategory("water")}>Water</a></li>
                <li><a href={null} onClick={() => updateCategory("milk")}>Milk</a></li>
                <li><a href={null} onClick={() => updateCategory("softdrinks")}>Soft Drinks</a></li>
                <li><p className="font-weight-bold">Domestic Cleaning</p></li>
               
                
                
            </ul>
        </div>
    </div>
</Collapse>
</div>

) : (( catg === 'treats') || (catg === 'phealthsupplies')|| (catg === 'pfurnitures')|| (catg === 'ptoys')|| (catg === 'pgrooming')
|| (catg === 'pcleaning') ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                <li><a href={null} onClick={() => updateCategory("treats")}>Treats</a></li>
                <li><a href={null} onClick={() => updateCategory("phealthsupplies")}>Health Supplies</a></li>
                <li><a href={null} onClick={() => updateCategory("pfurniture")}>Bed & Furniture</a></li>
                <li><a href={null} onClick={() => updateCategory("ptoys")}>Toys</a></li>
                <li><a href={null} onClick={() => updateCategory("pgrooming")}>Grooming</a></li>
                <li><a href={null} onClick={() => updateCategory("pcleaning")}>Waste & Clean</a></li>
                

               
                
                
            </ul>
        </div>
    </div>
</Collapse>
</div>

):(( catg === 'bsupplies') || (catg === 'electrical')|| (catg === 'hardware')|| (catg === 'fixtures')|| (catg === 'bulbs')
|| (catg === 'wallsupplies')|| (catg === 'pnhandtools')|| (catg === 'plumbing') ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                <li><a href={null} onClick={() => updateCategory("bsupplies")}>Building supplies</a></li>
                <li><a href={null} onClick={() => updateCategory("electrical")}>Electrical tools</a></li>
                <li><a href={null} onClick={() => updateCategory("hardware")}>Hardware tools</a></li>
                <li><a href={null} onClick={() => updateCategory("fixtures")}>Kitchen & bath fixtures</a></li>
                <li><a href={null} onClick={() => updateCategory("bulbs")}>Light bulbs</a></li>
                <li><a href={null} onClick={() => updateCategory("wallsupplies")}>Painting tools & wall supplies</a></li>
                <li><a href={null} onClick={() => updateCategory("plumbing")}>Plumbing</a></li>

                

               
                
                
            </ul>
        </div>
    </div>
</Collapse>
</div>

):(( catg === 'proteinbars') || (catg === 'wsupplies')|| (catg === 'mutivitamins')|| (catg === 'immunesupport') ) ? 
( <div className="collection-collapse-block open">
<h3 className="collapse-block-title" onClick={toggleCategory}>Category</h3>
<Collapse isOpen={isCategoryOpen}>
    <div className="collection-collapse-block-content">
        <div className="collection-brand-filter">
            <ul className="category-list">
                <li><a href={null} onClick={() => updateCategory("all")}>all products</a></li>
                <li><a href={null} onClick={() => updateCategory("proteinbars")}>Protein Bars</a></li>
                <li><a href={null} onClick={() => updateCategory("wsupplies")}>Workout Supplies</a></li>
                <li><a href={null} onClick={() => updateCategory("multivitamins")}>Multivitamins</a></li>
                <li><a href={null} onClick={() => updateCategory("immunesupport")}>Immune support</a></li>
               

                
            </ul>
        </div>
    </div>
</Collapse>
</div>

):''
    
return(type)

}

export default Category;