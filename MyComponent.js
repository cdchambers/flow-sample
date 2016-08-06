import React from 'react';

type MyComponentProps: {
  name: string,
}

class MyComponent extends React.Component<MyComponentProps> {
  render() {
    return (<div>this.props.name</div>);
  }
}
