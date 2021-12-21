import { RegisterOptions, ValidationRule } from 'react-hook-form';

const requiredOption: ValidationRule<boolean> = {
    value: true,
    message: 'Это поле обязательно для заполнения',
};

export const nameValidator: RegisterOptions = {
    required: requiredOption,
    pattern: {
        value: /^(?![\s.]+$)[а-яА-Я\s.]*$/,
        message: 'Вас правда так зовут?',
    },
    maxLength: {
        value: 30,
        message: 'Какое у вас замечательное имя, а можно покороче?',
    },
};

export const emailValidator: RegisterOptions = {
    required: requiredOption,
    pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: 'Ошибка в адресе! Мы не сможем с вами связаться',
    },
};

export const messageValidator: RegisterOptions = {
    required: requiredOption,
    minLength: {
        value: 25,
        message: 'Расскажите подробнее о свое идее!',
    },
    maxLength: {
        value: 512,
        message: 'Вы рассказываете слишком подробно',
    },
};
