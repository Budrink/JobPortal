import { SubmissionError } from 'redux-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.searchString)) {
      window.alert(`You submitted:2)}`);
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (values.searchtype !== 'freelancer') {
      window.alert(`You submitted:1)}`);
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
}

export default submit;
