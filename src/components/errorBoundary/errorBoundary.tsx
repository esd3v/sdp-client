import * as React from 'react';
import {State} from './types';

export class ErrorBoundary extends React.Component<{}, State> {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  public state = {
    hasError: false,
  };

  public componentDidCatch(error: Error | null, info: object) {
    console.log(error, info);
    return {
      hasError: true,
    };
  }

  public render() {
    return (this.state.hasError)
      ? <h1>Something went wrong.</h1> : this.props.children;
  }
}
