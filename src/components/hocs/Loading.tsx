import React, { createContext, FunctionComponent, useContext, useState } from 'react';

export interface LoadingContext {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContext>({
  loading: false,
  setLoading: () => {
    /* noop */
  },
});

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider: FunctionComponent<{ value?: boolean }> = ({ children, value = false }) => {
  const [loading, setLoading] = useState(value);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <div>…</div>}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
