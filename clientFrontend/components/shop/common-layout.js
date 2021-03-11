import React from 'react';
import HeaderThree from '../headers/header-three';
import FooterOne from '../footers/footer-one';
import Breadcrubs from '../common/widgets/breadcrubs';
import Helmet from 'react-helmet';
import favicon from '../../public/assets/images/favicon/1.png'

const CommonLayout = ({ children, title, parent ,subTitle }) => {
    return (
        <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        </Helmet>
            <HeaderThree topClass="top-header" logoName="logo.png" />
            <Breadcrubs title={title} parent={parent} subTitle={subTitle}  />
                <>{children}</>
            <FooterOne />
        </>
    )
}

export default CommonLayout;