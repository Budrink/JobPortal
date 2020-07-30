export const requiredInput = (input) => (input ? undefined : `Требуется ввод`);

var pattern = '/^[a-z0-9_-]+@[a-z0-9-]+.[a-z]{2,6}$/i';
export const correctInput = (input) =>
  input.match(pattern) ? 'Incorrect email' : undefined;

export const matchInput = (input, allInputs) =>
  input === allInputs.password ? undefined : 'Incorrect password';

export const validate = (inputs) => {
  const errors = {};

  if (!inputs.email) {
    errors.email = 'Input email';
  } else if (inputs.username !== 'Юрчик') {
    errors.username = 'Имя пользователя неверно';
  }

  if (!inputs.username) {
    errors.username = 'Введите имя пользователя';
  } else if (inputs.username !== 'Юрчик') {
    errors.username = 'Имя пользователя неверно';
  }

  if (!inputs.password) {
    errors.password = 'Введите ваш пароль';
  }

  return errors;
};
