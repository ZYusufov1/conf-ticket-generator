import classNames from 'classnames'
// @ts-ignore
import ErrorInfoIcon from './../../images/errorInfo.svg?react'
import { FC } from 'react'
import './Input.css'

interface ITextInputProps {
    value: string | undefined,
    onChange: (e) => void,
    onBlur?: (e) => void,
    title: string,
    placeholder?: string,
    type: string,
    error?: string | null
}

const TextInput: FC<ITextInputProps> = ({ value, onChange, error, title, placeholder = '', type, onBlur = () => {} }) => {
    return (
        <div className={'block'}>
            <div
                className={'text-preset-5'}
                style={{ color: 'var(--neutral-0)' }}
            >
                {title}
            </div>

            <input
                type={type}
                style={{ padding: '15px', border: '1px solid var(--colors-neutral-500, #8784A5)' }}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                className={classNames('fieldBlock', 'text-preset-6')}
            />

            {error && (
                <div
                    className={classNames('info', 'text-preset-7')}
                >
                    <ErrorInfoIcon/>
                    {error}
                </div>
            )}
        </div>
    )
}

export default TextInput