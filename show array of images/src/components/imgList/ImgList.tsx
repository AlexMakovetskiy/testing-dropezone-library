import { useEffect, useState } from 'react';

import ImagePreview from '../ImagePreview/ImagePreview';
import { getImgList } from '../../api/getImgList';

import './ImgList.css';

interface IImgContentElement {
    name: string;
    img: string;
}

interface IImgListData {
    content: IImgContentElement[];
}

function ImgList() {
    const [imgListState, setImgListState] = useState<IImgListData>();

    useEffect(() => {
        (async function () {
            const response: Response = await getImgList();
            const images: IImgListData = await response.json();
            setImgListState(images);
        })();
    }, []);

    return (
        <div className='imgListWrap'>
            {
                imgListState?.content.map((imgElement, index) => (
                    <div key={index} className='imgElementWrap'>
                        <p>{imgElement.name}</p>
                        <ImagePreview base64String={imgElement.img}/>
                    </div>
                ))
            }
        </div>
    );
}

export default ImgList;
