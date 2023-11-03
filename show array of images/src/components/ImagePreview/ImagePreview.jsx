import { useEffect, useRef } from 'react';
import Dropzone from 'dropzone';

const ImagePreview = ({ base64String }) => {
    const dropzoneRef = useRef(null);

    useEffect(() => {
        const dropzone = new Dropzone(dropzoneRef.current, {
        url: '/upload', 
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        autoProcessQueue: false,
        init: function() {
            this.on('addedfile', function(file) {
            });
        },
        });

        return () => {
        dropzone.destroy(); 
        };
    }, []);

    useEffect(() => {
        if (base64String) {
        const image = new Image();
        image.src = base64String;
        dropzoneRef.current.appendChild(image);
        }
    }, [base64String]);

    return <div ref={dropzoneRef} className="dropzone"></div>;
};

export default ImagePreview;