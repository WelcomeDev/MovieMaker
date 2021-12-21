import { Icon } from '@iconify/react';
import { memo } from 'react';
import { useMailsStore } from '../../hooks/context/mailsProvider';
import { Mail } from '../../model/mail';


export const MailListItem = memo((props: Mail) => {
    const { markAnswered } = useMailsStore();
    return <section
        key={props.id}
        className={'mail-list-item'}
    >
        <p
            className={'mail-list-item__author'}
        >
            {'От: '}
            <span>{props.name}</span>
        </p>
        <p
            className={'mail-list-item__author'}
        >
            {'Email: '}
            <span>{props.email}</span>
        </p>
        <p
            className={''}
        >
            {props.createdDate.format('DD.MM.YYYY')}
        </p>
        <div
            className={''}
        >
            <h3>Сообщение</h3>
            <p

            >
                {props.message}
            </p>
        </div>
        <Icon
            onClick={() => markAnswered(props.id)}
            icon={'mdi:checkbox-marked-circle-outline'}
            className={''}
        />
    </section>;
});

export const MailsList = memo(() => {
    const { mails } = useMailsStore();
    return (
        <div>
            {
                !!mails.length
                    ? <>
                        <h2>Новые сообщения</h2>
                        <p>Уже {mails.length} человек ждут вашего ответа!</p>
                    </>
                    : <p>Новых сообщений нет</p>
            }
            <ul
                className={'mail-list'}
            >
                {
                    mails.map(item => <MailListItem {...item}/>)
                }
            </ul>
        </div>
    );
});