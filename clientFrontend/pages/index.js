import React from 'react';
import Banner from './layouts/Fashion/Components/Banner'
import CollectionBanner from './layouts/Marketplace/components/Collections';
import TopCollection from '../components/common/Collections/Collection3';
import Parallax from './layouts/Fashion/Components/Parallax';
import SpecialProducts from '../components/common/Collections/TabCollection1';
import ServiceLayout from '../components/common/Service/service1';
import Blog from '../components/common/Blog/blog1';
import Instagram from '../components/common/instagram/instagram1';
import LogoBlock from '../components/common/logo-block';
import FooterOne from '../components/footers/footer-one';
import Headerthree from '../components/headers/header-three';
import { withApollo } from '../helpers/apollo/apollo';
import { Product4 } from '../services/script';
import Paragraph from '../components/common/Paragraph';
import ModalComponent from '../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../public/assets/images/favicon/logo.png'

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      <Headerthree logoName={'logo.png'} topClass="top-header" />
      <Banner /> 
      <CollectionBanner />
      <Paragraph title="title1 section-t-space" inner="title-inner1" hrClass={false} />
      <TopCollection noTitle="null" backImage={true} type="fashion" title="top collection" subtitle="special offer"  productSlider={Product4} designClass="section-b-space p-t-0 ratio_asos" noSlider="false" cartClass="cart-info cart-wrap" />
      <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1"  designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" /> 
      <ServiceLayout sectionClass="border-section small-section" />
     
      <FooterOne logoName={'logo.png'} />
    </>
  )
}

export default withApollo(Fashion);