import { Icon } from '@iconify/react';
import { useState } from 'react';
import './password.scss';
import { UseFormHookInputProps } from '../../../../lib/interfaces/props/useFormHookInputProps';
import classNames from 'classnames';

export interface PasswordProps extends UseFormHookInputProps {
    className?: string;
}

export function Password(props: PasswordProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register, placeholder, className } = props;

    return (
        <label
            className={classNames('password-wrapper', className)}>
            <input
                placeholder={placeholder}
                type={showPassword ? 'text' : 'password'}
                {...register}
            />
            <Icon
                icon={showPassword ? 'mdi:eye' : 'mdi:eye-off'}
                className={'toggle-visibility-icon'}
                onClick={() => setShowPassword(!showPassword)}
            />
        </label>
    );
}