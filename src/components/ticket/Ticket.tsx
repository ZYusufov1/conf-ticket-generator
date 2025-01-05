import classNames from 'classnames'
// @ts-ignore
import LogoIcon from './../../images/logo.svg?react'
// @ts-ignore
import TicketIcon from './../../images/ticket.svg?react'
// @ts-ignore
import GitIcon from './../../images/git.svg?react'
import './Ticket.css'

const Ticket = (props: { image?: any, fullName?: string | undefined, userGit?: string | undefined }) => {
    return (
        <div className={'ticket'}>
            <TicketIcon/>

            <div className={'logoTicketBlock'}>
                <LogoIcon/>
                <div
                    className={'labelTicket'}
                >
                    <div className={'text-preset-2'}>Coding Conf</div>
                    <div className={'text-preset-6'}>Jan 31, 2025 / Austin, TX</div>
                </div>
            </div>
            {props.image && (
                <div className={'imgAndInfo'}>
                    <img
                        src={props.image}
                        alt="Preview"
                        className={'img'}
                    />

                    <div className={classNames('info', 'text-preset-3')}>
                        {props.fullName}

                        {props.userGit && (
                            <div className={classNames('git', 'text-preset-5')}>
                                <GitIcon/>
                                {props.userGit}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div
                className={classNames('numberTicket', 'text-preset-3')}
                style={{ color: 'var(--neutral-500)' }}
            >
                #01609
            </div>
        </div>
    )
}

export default Ticket