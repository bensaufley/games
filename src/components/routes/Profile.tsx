import React, {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from 'react';
import { RouteComponentProps } from 'react-router-dom';

import firebase from '../../lib/firebase';
import { FirebaseAuthContext } from '../hocs/FirebaseAuth';

const Profile: FunctionComponent<RouteComponentProps<{}, { statusCode?: number }, { message?: string }>> = ({
  location: { state },
}) => {
  const { user } = useContext(FirebaseAuthContext);

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<Error>();
  const [success, setSuccess] = useState(false);

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      if (error) setError(undefined);
      if (success) setSuccess(false);
      setDisplayName(value);
    },
    [error, success, setError, setSuccess, setDisplayName],
  );

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      if (error) setError(undefined);
      if (success) setSuccess(false);
      setEmail(value);
    },
    [error, success, setError, setSuccess, setEmail],
  );

  const handleSubmit: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();

      setError(undefined);
      setSuccess(false);
      setSubmitting(true);
      const currentUser = firebase.auth().currentUser!;

      try {
        if (user?.displayName !== displayName) await currentUser.updateProfile({ displayName });
        if (user?.email !== email) {
          await currentUser.updateEmail(email);
          await currentUser.sendEmailVerification();
        }
        setSuccess(true);
      } catch (err) {
        setError(err);
      }
      setSubmitting(false);
    },
    [user, displayName, email],
  );

  return (
    <>
      {state && state.message && <strong>{state.message}</strong>}
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        {error && <strong>Error: {error}</strong>}
        {success && <strong>Your information has been successfully updated.</strong>}
        <label htmlFor="displayName">
          Display Name:
          <input disabled={submitting} onChange={handleNameChange} required type="text" value={displayName} />
        </label>
        <label htmlFor="email">
          Email:
          <input disabled={submitting} onChange={handleEmailChange} required type="email" value={email} />
        </label>
        <button disabled={submitting} type="submit">
          Update
        </button>
      </form>
    </>
  );
};

export default Profile;
