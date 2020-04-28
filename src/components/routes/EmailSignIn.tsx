import React, {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../lib/firebase';
import { FirebaseAuthContext } from '../hocs/FirebaseAuth';
import { useLoading } from '../hocs/Loading';

const EmailSignIn: FunctionComponent<{}> = () => {
  const url = useMemo(() => window.location.href, []);
  const { loggedIn } = useContext(FirebaseAuthContext);

  const { setLoading } = useLoading();

  const email = useMemo(() => {
    try {
      const e = window.localStorage.getItem('emailForSignIn');
      window.localStorage.removeItem('emailForSignIn');
      return e || '';
    } catch {
      return '';
    }
  }, []);

  const isValidSignInLink = useMemo(() => firebase.auth().isSignInWithEmailLink(url), [url]);

  const signIn = useCallback(async () => {
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailLink(email, url);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [email, url, setLoading]);

  useEffect(() => {
    if (!loggedIn && (!email || !isValidSignInLink)) return;

    signIn();
  }, [loggedIn, email, isValidSignInLink, signIn]);

  const [inputEmail, updateInputEmail] = useState(email);

  const handleSubmit: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      signIn();
    },
    [signIn],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      updateInputEmail(value);
    },
    [updateInputEmail],
  );

  if (loggedIn) return <Redirect to="/" />;

  if (!isValidSignInLink) {
    return (
      <>
        <h2>Error</h2>
        <p>
          This is not a valid email sign-in link. Please try to <Link to="/login/">Log In</Link> again.
        </p>
      </>
    );
  }

  if (email) {
    return <h2>Please Wait…</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Confirm Email Address:
        <input type="email" name="email" value={inputEmail} onChange={handleChange} />
      </label>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EmailSignIn;
