import { error } from './notifications';

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateTask = (task) => {
    const errors = {};

    if (task.name === '') {
        errors.name = 'You must enter a name for your task.';
    }

    if (task.description === '') {
        errors.description = 'You must enter a description for your task.';
    }

    if (task.date === '') {
        errors.date = 'You must enter a valid date.';
    }

    console.log(task);
    return errors;
}

export const handleAjaxError = (err) => {
    error('Something went wrong; please try again.');
    console.warn(err);
}