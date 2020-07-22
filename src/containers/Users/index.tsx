import * as React from 'react';
import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';


import { fetch } from './actions';
import { selectUsers, selectIsLoading, selectIsFetched } from './selectors';
import { User } from './model';

import Container from '../../Component/Container';
import Header from '../../Component/Header';
import Preloader from '../../Component/Preloader';
import List from '../../Component/List';
import Card from '../../Component/Card';
import Button from '../../Component/Button';


const connect = require('react-redux').connect;



interface UsersPageProps extends React.Props<Users> {
  users: Array<User>;
  isLoading: boolean;
  isFetched: boolean;
  onUsersFetch: () => void;
};

class Users extends React.Component<UsersPageProps, void> {
  public render(): React.ReactElement<{}> {

    const { users, isLoading, isFetched, onUsersFetch } = this.props;

    return (
      <Container>
        <Header>US Presidents List</Header>
        {isLoading && <Preloader />}
        <List>
          {console.log(users)}
          {users.map((item) => {
            return (
              <Card
                key={item.ID}
                title={item.FullName}
                label={item.Terms}
                description={item.Party}
                />
            );
          })}
        </List>
        {!isFetched && <Button onClick={onUsersFetch}>Fetch</Button>}
      </Container>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    users: selectUsers(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched()
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onUsersFetch: (): void => {
      dispatch(fetch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);