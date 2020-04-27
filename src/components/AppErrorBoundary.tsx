import React, { ErrorInfo, PureComponent } from 'react';

interface State {
  error?: Error;
}

export default class AppErrorBoundary extends PureComponent<{}, State> {
  public readonly state: State = {
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  public render() {
    const { error } = this.state;

    if (error) {
      return (
        <>
          <h2>Error</h2>
          <pre>{error.toString()}</pre>
        </>
      );
    }

    const { children } = this.props;

    return children;
  }
}
