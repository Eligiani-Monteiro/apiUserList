import { Users } from "phosphor-react";
import {CardUser} from "./components/CardUser/"
import {Header} from "./components/Header"
import { List } from "./components/List";
import { GlobalStyle } from "./GlobalStyle"


function App() {

 
  const logo = <Users size={60} color="#f5f5f5" weight="duotone" />
  return (
    
    <div className="App">
      <GlobalStyle />
      <Header title="Lista de Usuários" logo={logo}/>
      
       <List />
    </div>
  )
}

export default App
