import './App.css'
import './styles/fonts.css'
// @ts-ignore
import LogoIcon from './images/logo.svg?react'
import classNames from 'classnames'
import { useState } from 'react'

function App() {
    const [image, setImage] = useState(null)
    const [error, setError] = useState('')

    const handleDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        validateFile(file)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        validateFile(file)
    }

    const validateFile = (file) => {
        if (!file) return
        if (file.size > 500 * 1024) {
            setError('File size exceeds the 500KB limit.')
            return
        }
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            setError('Only JPG and PNG formats are supported.')
            return
        }
        setError('')
        setImage(URL.createObjectURL(file))
    }
    
  return (
    <div className={'page'}>
      <div className={'logoBlock'}>
        <LogoIcon /> Coding Conf
      </div>

        <>
            <div className={classNames('title', 'text-preset-1')}>
                Your Journey to Coding Conf 2025 Starts Here!
                <div className={classNames('subtitle', 'text-preset-4')}>
                    Secure your spot at next year’s biggest coding conference.
                </div>
            </div>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: '2px dashed #888',
                    padding: '20px',
                    borderRadius: '10px',
                    background: '#2a2a2a',
                    cursor: 'pointer',
                    position: 'relative',
                }}
            >
                <input
                    type="file"
                    accept="image/jpeg, image/png"
                    style={{
                        opacity: 0,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        cursor: 'pointer',
                    }}
                    onChange={handleFileChange}
                />
                {image ? (
                    <img
                        src={image}
                        alt="Preview"
                        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                    />
                ) : (
                    <>
                        <div style={{ fontSize: '40px', color: '#ff7f50' }}>📤</div>
                        <p>Drag and drop or click to upload</p>
                    </>
                )}
            </div>
        </>
    </div>
  )
}

export default App
