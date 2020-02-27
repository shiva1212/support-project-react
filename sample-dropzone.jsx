import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = ({
    onDropRejected,
    maxSize=1000000,// 1MB
    onDropAccepted,
    acceptedFormats,
}) => {

  return (
      <Dropzone
        onDropAccepted={acceptedFiles => console.log('tt', acceptedFiles)}
        accept={['.jpg']}
        // maxSize={maxSize}
        // onDropRejected={onDropRejected}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <span>click won't work here</span>
            <div
              {...getRootProps()}
              style={{
                height: '100px',
                'background-color': '#147411',
              }}
            >
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
  );
};

export default FileUpload;
