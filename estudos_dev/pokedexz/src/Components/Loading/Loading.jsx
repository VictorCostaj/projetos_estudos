import React from 'react';
import images from '../../assets/importImages';
import { ImgLoading } from './LoadingStyle';

const Loading = () => {
    return (
        <div>
            <ImgLoading src={images.loading} alt="imagem de loading" />
            <p>Aguarde..</p>
        </div>
    );
};

export default Loading;