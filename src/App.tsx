import React, { useRef, useState } from 'react'
import classNames from 'classnames'
// @ts-ignore
import LogoIcon from './images/logo.svg?react'
// @ts-ignore
import UploaderIcon from './images/uploader.svg?react'
// @ts-ignore
import InfoIcon from './images/info.svg?react'
// @ts-ignore
import ErrorInfoIcon from './images/errorInfo.svg?react'
import TextInput  from './components/input/TextInput.tsx'
import ImageInput from './components/input/ImageInput.tsx'
import './styles/fonts.css'
import './components/input/Input.css'
import './App.css'

function App() {
    const [image, setImage] = useState(null)
    const [fullName, setFullName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [userGit, setUserGit] = useState<string>()
    const [errorFile, setErrorFile] = useState<string | null>(null)
    const [errorEmail, setErrorEmail] = useState<string | null>(null)

    const fileInputRef = useRef<HTMLInputElement | null>(null)
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        validateFile({ file })
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            validateFile({ file })
        }
    }

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const email = e.target.value
        validateFile({ email })
    }

    const validateFile = ({ file, email }: { file?: File; email?: string }) => {
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrorFile('File too large. Please upload a photo under 5MB.')

            } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
                setErrorFile('Invalid file type. Please upload JPG or PNG images.')
            } else {
                setErrorFile(null)
                setImage(URL.createObjectURL(file))
            }
        }

        if (email !== undefined) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Строгий шаблон

            if (!emailRegex.test(email)) {
                setErrorEmail('Please enter a valid email address.')
            } else if (email == ''){
                setErrorEmail('Email is required.')
            } else {
                setErrorEmail(null)
            }
        } else {
            setErrorEmail('Email is required.')
        }

        return
    }

    const handleChangeImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <div className={'page'}>
            <div className={'logoBlock'}>
                <LogoIcon/> Coding Conf
            </div>

            <div className={classNames('title', 'text-preset-1')}>
                Your Journey to Coding Conf 2025 Starts Here!
                <div className={classNames('subtitle', 'text-preset-4')}>
                    Secure your spot at next year’s biggest coding conference.
                </div>
            </div>

            <div className={'form'}>
                <ImageInput
                    image={image}
                    setImage={setImage}
                    title={'Upload Avatar'}
                    error={errorFile}
                    fileInputRef={fileInputRef}
                    handleDrop={handleDrop}
                    handleDragOver={handleDragOver}
                    handleFileChange={handleFileChange}
                    handleChangeImageClick={handleChangeImageClick}
                />

                <TextInput
                    type={'text'}
                    value={fullName}
                    title={'Full Name'}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <TextInput
                    type={'email'}
                    value={email}
                    title={'Email Address'}
                    placeholder={'example@email.com'}
                    error={errorEmail}
                    onBlur={handleEmailBlur}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput
                    type={'text'}
                    value={userGit}
                    title={'GitHub Username'}
                    placeholder={'@username'}
                    onChange={(e) => setUserGit(e.target.value)}
                />

                <button
                    className={classNames('submitButton', 'text-preset-5')}
                    onClick={() => {}}
                >
                    Generate My Ticket
                </button>
            </div>
        </div>
    )
}

export default App
