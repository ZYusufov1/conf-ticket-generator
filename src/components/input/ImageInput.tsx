import React, { FC } from 'react'
import classNames from 'classnames'
// @ts-ignore
import LogoIcon from './../../images/logo.svg?react'
// @ts-ignore
import UploaderIcon from './../../images/uploader.svg?react'
// @ts-ignore
import InfoIcon from './../../images/info.svg?react'
// @ts-ignore
import ErrorInfoIcon from './../../images/errorInfo.svg?react'
import './Input.css'

interface ITextInputProps {
    image: any,
    setImage: (value: any) => void,
    title: string,
    error: string | null,
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void,
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeImageClick: () => void,
    fileInputRef?: React.MutableRefObject<HTMLInputElement | null>
}

const ImageInput: FC<ITextInputProps> = ({
     image,
     setImage,
     title,
     error,
     handleDrop,
     handleDragOver,
     handleFileChange,
     handleChangeImageClick,
     fileInputRef
 }) => {
    return (
        <div className={'block'}>
            <div
                className={'text-preset-5'}
                style={{ color: 'var(--neutral-0)' }}
            >
                {title}
            </div>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={classNames('fieldBlock', 'uploader', 'text-preset-6')}
            >
                <input
                    type="file"
                    accept="image/jpeg, image/png"
                    className={!image ? 'input' : ''}
                    style={image ? { display: 'none' } : {}}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />

                {image ? (
                    <>
                        <img
                            src={image}
                            alt="Preview"
                            className={'img'}
                        />

                        <div className={'groupButtons'}>
                            <button
                                aria-label="Remove option"
                                onClick={() => setImage(null)}
                                className={'text-preset-7'}
                                style={{
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'solid',
                                    textUnderlinePosition: 'from-font',
                                    textDecorationSkipInk: 'auto'
                                }}
                            >
                                Remove image
                            </button>

                            <button
                                aria-label="Change option"
                                onClick={handleChangeImageClick}
                                className={'text-preset-7'}
                            >
                                Change image
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <UploaderIcon className={'icon'}/>
                        <div>Drag and drop or click to upload</div>
                    </>
                )}
            </div>

            <div
                className={classNames('info', 'text-preset-7')}
            >
                {!error ? <InfoIcon/> : <ErrorInfoIcon/>}
                {error || 'Upload your photo (JPG or PNG, max size: 5MB).'}
            </div>
        </div>
    )
}

export default ImageInput