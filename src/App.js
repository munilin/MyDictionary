import React from 'react';
import styled from "styled-components";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAdd } from "./redux/modules/add";
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

import Home from './Home';
import Add from './Add';

function App() {

  //firestore추가
//   React.useEffect(async() => {
// const docRef = await addDoc(collection(db, 'mydictionary'), {
//      completed: false,
//      text: "new"
//    })
//   }, []);


  return (
    <div className="App">
      <Switch>
        <Container>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/add' exact>
            <Add />
          </Route>
        </Container>
      </Switch>
    </div>
  );
}

const Container = styled.div`
max-width: 230px;
min-height: 550px;
background-color: #f4fff8;
padding: 16px;
margin: 20px auto;
border: 2px solid #ddd;
`


export default App;
