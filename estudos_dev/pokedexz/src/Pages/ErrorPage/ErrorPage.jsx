/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import images from '../../assets/importImages';
import Header from '../../Components/Header/Header';
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    ContainerErrorPage,
    GifImage,
   
    GifImageContainer,
    TituloError,
} from './ErrorPageStyle';
import Error from '../../Components/Error/Error';

const ErrorPage = () => {
    return (
        <>
            <Header />
            {/* <ContainerErrorPage>
                <TituloError>Desculpa, não encontrei a sua página!</TituloError>
                <GifImageContainer>
                    <GifImage src={images.pikachu} />
                </GifImageContainer>
            </ContainerErrorPage> */}
            <Error />
        </>
    );
};

export default ErrorPage;
