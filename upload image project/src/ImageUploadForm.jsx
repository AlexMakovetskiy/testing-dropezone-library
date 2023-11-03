import { useEffect, useRef, useState } from 'react';
import Dropzone from 'dropzone';

import './ImageUploadForm.css';

const ImageUploadForm = () => {
    const [img64State, setImg64State] = useState("");
    const dropzoneRef = useRef(null);

    useEffect(() => {
        const dropzone = new Dropzone(dropzoneRef.current, {
        url: '/upload', 
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        autoProcessQueue: false,
        init: function() {
            this.on('addedfile', function(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const base64String = event.target.result;
                setImg64State(base64String);
            };
            reader.readAsDataURL(file);
            });
        },
        });

        return () => {
            dropzone.destroy(); 
        };
    }, []);

    return (
        <div>
            <div ref={dropzoneRef} className="dropzoneWrap">
                <div className="dz-message" data-dz-message>
                    <span>Перетащите файлы сюда или кликните, чтобы выбрать</span>
                </div>
            </div>
            <button onClick={() => console.log(img64State)}>Click</button>
        </div>
    );
};

export default ImageUploadForm;