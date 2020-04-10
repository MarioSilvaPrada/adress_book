import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Components
import NavBar from 'components/NavBar/NavBar';

// Pages
import Settings from 'routes/Settings/Settings';
import Home from 'routes/Home/Home';
import PageNotFound from 'routes/PageNotFound/PageNotFound';

// actions
import * as actions from 'state/actions';


const App = ({ usersData, users, isLoading, setLoading, filteredName }) => {

  const getUserData = async () => {
    await usersData();
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home users={users} isLoading={isLoading} filteredName={filteredName} />} />
        <Route exact path="/settings" component={Settings} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ users, loading }) => ({
  users: users.users,
  filteredName: users.searchFilter,
  isLoading: loading.loading,
});

const mapDispatchToProps = {
  usersData: actions.getUsers,
  setLoading: actions.setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
