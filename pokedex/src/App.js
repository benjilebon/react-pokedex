import React from 'react';
import './sass/App.scss';
import Pokedex from './components/Pokedex'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="pokedex">
        <BrowserRouter>
          <Switch>

            <Route path="/pokemon/:name">
              <FullPokedex />
            </Route>

            <Route path="/search/:search">
              <Search />
            </Route>

            <Route path="/">
              <Sidebar />
              <Pokedex />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

function FullPokedex() {
  let { name } = useParams();
  return (
    <>
      <Sidebar />
      <Pokedex name={name} />
    </>
  )
}

function Search() {
  let { search } = useParams();
  return (
    <>
      <Sidebar search={search}/>
      <Pokedex />
    </>
  )
}

export default App;
