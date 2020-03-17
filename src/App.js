import React,{ Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Third from './components/Third'
import State from './components/State'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import Bind from './components/Bind'
import Parent from './components/Parent'
import Conditional from './components/Conditional'
import NameList from './components/NameList'
import Form from './components/Form'
import LifeA from './components/LifeA'
import Fragment from './components/Fragment'
import PureComponents from './components/PureComponents'
import Memo from './components/Memo'
import Refs from './components/RefsDemo'
import Portal from './components/PortalsDemo'
import Hero from './components/Hero'
import Error from './components/Error'
import Hover from './components/Hover'
import User from './components/User'
import A from './components/A'
import Post from './Httpreact/PostForm'
//import UserContext, { UserProvider } from './components/UserContext'
import Hookcounter from './Hooks/Hookcounter'
import HookTwo from './Hooks/HookTwo'
import HookThree from './Hooks/HookThree'
import HookFour from './Hooks/HookFour'
import HookMouse from './Hooks/HookMouse'
import MouseContainer from './Hooks/MouseContainer'
import DataFetching from './Hooks/DataFetching'
import C from './Hooks/C'
import Counter1 from './Hooks/Counter'
import Focus from './Hooks/Focus'
import DocumentTitle from './Hooks/DocumentTitle'

import  { BrowserRouter as Routers,Switch,Route} from 'react-router-dom';


import Users from './Hooks/User'
import About from './Routes/About'
import List from './Routes/List'
import News from './Routes/News'
import Nav from './Routes/Nav'

export const UserContext = React.createContext()
class App extends Component {
  render(){
     return(


      <Routers>
      <div className="App">
      <Nav></Nav>
      <Switch>
        <Route path='/' exact  component={About}></Route>
        <Route path='/List' exact component={List} ></Route>
        <Route  path='/News'exact component={News}></Route>

     </Switch>

       {/*<UserContext.Provider value={'Kyle'}>
       <Users></Users>
        <C></C>
        </UserContext.Provider>
           <UserProvider vlue="kyle">
          <A></A>
         </UserProvider>


          <User render ={ (count,incrementCount)=> <Counter count={count} incrementCount={incrementCount} ></Counter> }></User>

        <Counter ></Counter>
         <Hover></Hover>
          
         <Error><Hero heroName="Batman"></Hero>
        </Error>
        <Counter ></Counter>
         <Hover></Hover>
        <Error>
        <Hero heroName="Superman"></Hero>
        </Error>

        <Error>
        <Hero heroName="Joker"></Hero>
        </Error>

         <Portal> </Portal>
         <Refs></Refs>

       <Memo></Memo>
          <PureComponents></PureComponents>
          <Fragment></Fragment>
        <LifeA></LifeA>
        <Form></Form>
        <NameList></NameList>
        <Counter></Counter>
       <FunctionClick></FunctionClick>
       <Third name ="aa"> <p> this child of b </p></Third>
       <Bind> </Bind>
       <Parent> </Parent>
       <Conditional>  </Conditional>
     
       <Third name ="bb">
         <p> this child of bb </p>
       </Third>
       <Third name ="cc"></Third>
       <Welcome name = "a"></Welcome>
       <Welcome name = "b">
       <p> this child of b </p>
       </Welcome>
       <Welcome name = "c">
         <a>kyle</a>
       </Welcome>*/}

     </div>
      </Routers> 
     );
  }
}



export default App;
