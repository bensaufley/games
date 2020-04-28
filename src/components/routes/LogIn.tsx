import React, {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';

import firebase from '../../lib/firebase';
import { FirebaseAuthContext } from '../hocs/FirebaseAuth';
import { useLoading } from '../hocs/Loading';

const LogIn: FunctionComponent<{}> = () => {
  const { loggedIn } = useContext(FirebaseAuthContext);
  const { setLoading } = useLoading();

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<Error>();
  const [success, setSuccess] = useState<true>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: { value } }) => {
    setError(undefined);
    setSubmitted(false);
    setEmail(value);
  }, []);

  const handleSubmit: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);
        setSubmitted(true);
        await firebase.auth().sendSignInLinkToEmail(email, {
          handleCodeInApp: true,
          url: `${window.location.protocol}//${window.location.host}/email-sign-in/`,
        });
        window.localStorage.setItem('emailForSignIn', email);
        setSuccess(true);
      } catch (err) {
        setError(err);
        console.error(err);
      }
      setLoading(false);
    },
    [email, setLoading],
  );

  const renderedContent = useMemo(() => {
    if (submitted && !error) {
      if (success) {
        return <p>A link has been sent to the email you provided.</p>;
      }

      return <p>Please wait…</p>;
    }

    let err: ReactNode;
    if (error) {
      err = (
        <p>
          <strong>{error.name}:</strong> {error.message}
        </p>
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        {err}
        <label htmlFor="email">
          Email:
          <input type="email" name="email" onChange={handleChange} placeholder="user@domain.com" value={email} />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }, [submitted, error, success, handleSubmit, handleChange, email]);

  if (loggedIn) return <Redirect to="/" />;

  return (
    <>
      <h1>Log In</h1>
      {renderedContent}
    </>
  );
};

export default LogIn;
