import { Icon } from '@iconify/react';
import { memo } from 'react';
import { useMailsStore } from '../../hooks/context/mailsProvider';
import { Mail } from '../../model/mail';
import './mailList.scss';
import { observer } from 'mobx-react';

export const MailListItem = memo((props: Mail) => {
    const { markAnswered } = useMailsStore();
    return (
        <section
            key={props.id}
            className={'mail-list-item'}
        >
            <p
                className={'mail-list-item__author'}
            >
                <span>{'От: '}</span>
                {props.name}
            </p>
            <p
                className={'mail-list-item__email'}
            >
                <span>{'Email: '} </span>
                {props.email}
            </p>
            <p
                className={'mail-list-item__date'}
            >
                {props.createdDate.format('DD.MM.YYYY')}
            </p>
            <div
                className={'mail-list-item__messages'}
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
                className={'mail-list-item__answer'}
            />
        </section>
    );
});

export const MailsList = observer(() => {
        const { mails } = useMailsStore();
        return (
            <div
                className={'mail-list'}
            >
                {
                    !!mails.length
                        ? <>
                            <h2>Новые сообщения</h2>
                            <p>Уже {mails.length} человек ждут вашего ответа!</p>
                        </>
                        : <h2>Новых сообщений нет</h2>
                }
                <ul
                    className={'items'}
                >
                    {
                        mails.map(item => <MailListItem {...item}/>)
                    }
                </ul>
            </div>
        );
    },
);