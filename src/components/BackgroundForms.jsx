import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ImgElipse2 from '../assets/img-bg/Ellipse2.svg'
import ImgElipse3 from '../assets/img-bg/Ellipse3.svg'
import ImgElipse4 from '../assets/img-bg/Ellipse4.svg'
import ImgElipse5 from '../assets/img-bg/Ellipse5.svg'
import ImgElipse6 from '../assets/img-bg/Ellipse6.svg'
import ImgVector1 from '../assets/img-bg/Vector.svg'
import ImgVector2 from '../assets/img-bg/Vector-1.svg'
import ImgVector3 from '../assets/img-bg/Vector.2.svg'

const Elipse2 = styled.div`
    background-image: url(${ImgElipse2});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    // left: -180px;
    top: 68px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse3 = styled.div`
    background-image: url(${ImgElipse3});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    left: 377px;
    top: 544px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse4 = styled.div`
    background-image: url(${ImgElipse4});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    left: 0px;
    top: 1524px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse5 = styled.div`
    background-image: url('${ImgElipse5}');
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    left: 966px;
    top: 2459px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Elipse6 = styled.div`
    background-image: url(${ImgElipse6});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 400px;
    left: -35px;
    top: 5235px;
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Vector = styled.div`
    background-image: url('${ImgVector1}');
    background-repeat: no-repeat;
    position: absolute;
    width: 580px;
    right:0px;
    height: 777.99px;
    top: 1049px;
    filter: blur(10px);
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Vector1 = styled.div`
    background-image: url('${ImgVector2}');
    background-repeat: no-repeat;
    position: absolute;
    width: 580px;
    height: 777.99px;
    right: 0px;
    top: 4857px;
    filter: blur(10px);
    @media (max-width: 1200px) {
        display: none;
    }
`;

const Vector2 = styled.div`
    background-image: url('${ImgVector3}');
    background-repeat: no-repeat;
    position: absolute;
    width: 580px;
    height: 777.99px;
    left: 0px;
    top: 2377px;
    filter: blur(10px);
    @media (max-width: 1200px) {
        display: none;
    }
`;

const BackgroundForms = () => {
    return ( 
        <Fragment>
            <Elipse2></Elipse2>
            <Elipse3></Elipse3>
            <Elipse4> </Elipse4>
            <Elipse5> </Elipse5>
            <Elipse6> </Elipse6>
            <Vector> </Vector>
            <Vector1> </Vector1>
            <Vector2> </Vector2>
        </Fragment>

     );
}
 
export default BackgroundForms;