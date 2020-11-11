import React, { useState } from 'react';
import './App.css';
import Todos from 'Todos/Todos';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps,
  Redirect,
  RouteProps, withRouter, useLocation, useHistory, useRouteMatch
} from 'react-router-dom';

const Collection = (props: RouteComponentProps<{id: string}>) => {
  return (
    <>
      <h1>{props.match.params.id}</h1>
      <ComponentWithoutRouteProps />
    </>
  )
};

const ComponentWithoutRouteProps = withRouter((props) => {
  return (
    <div>
      <h2>ComponentWithoutRouteProps</h2>
      <span>{props.match.params.id}</span>
    </div>
  );
});

const Collections = (props: RouteComponentProps) => {
  // const location = useLocation();
  // const history = useHistory();
  // const math = useRouteMatch();
  
  const collectionIds = [1,2,3,4,5];
  return (
    <div>
      <h1>Collections</h1>
      {collectionIds.map(id => (
        <li>
          <Link to={`${props.match.url}/${id}`}>Collection {id}</Link>
        </li>
      ))}
      
      <Route path={`${props.match.path}/:id`} component={Collection}/>
    </div>
  )
};

const PrivateRoute = ({ isLogged, children, ...routeProps }: RouteProps & { isLogged: boolean }) => isLogged ?
  <Route {...routeProps}>{children}</Route> :
  <Redirect to="/" />;

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Router>
  
        <label htmlFor="isLogged">Logged</label>
        <input name="isLogged" type="checkbox" checked={isLogged} onChange={(e) => setIsLogged(e.target.checked)}/>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            {/*<li>*/}
            {/*  Use <Link> instead of <a> because of prevent default */}
            {/*  <a href="/todo">Todo with A</a>*/}
            {/*</li>*/}
          </ul>
        </nav>
       
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <PrivateRoute path="/todo" isLogged={isLogged}>
            {/*
             If you want to use route props, you have to wrap component in withRouter HOC or you can use hooks
             */}
            <Todos />
          </PrivateRoute>
          {/*
           If you pass component as "component" prop, you will receive router props in props
           */}
          <Route path="/collections" component={Collections} />
         {/*
          You can pass component in render prop
          Might be helpful if you want, as an example, render component depending on some condition
          */}
          <Route path="/new-path" render={(props: RouteComponentProps) => {
            // if (someCondition) {
            //   return <SomeComponent>
            // }
            return <Collections {...props} />
            }}
            
          />
          {/*
           accepts all of the paths
           Add it as the last route to render 404 page
           */}
          <Route path="*">
            <h1>404 page</h1>
          </Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
