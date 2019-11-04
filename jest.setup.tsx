import React from 'react';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

jest.mock('react-responsive', () =>
  props => <div>{props.children}</div>);
