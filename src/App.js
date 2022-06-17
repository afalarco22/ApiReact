import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    //useRouteMatch,
    //useParams,
    Redirect
  } from 'react-router-dom';

import { Header } from "./components/ui/Header";
import {InventarioView} from './components/inventario/InventarioView';
import { UsuarioView } from './components/usuario/UsuarioView';
import { MarcaView } from './components/marca/MarcaView';
import { TipoView } from './components/tipo/TipoView';
import { EstadoView } from './components/estado/EstadoView';
import { InventarioUpdate } from './components/inventario/InventarioUpdate'
import { InventarioDelete } from './components/inventario/InventarioDelete'
import { EstadoUpdate } from './components/estado/EstadoUpdate'
import { EstadoBorrar } from './components/estado/EstadoBorrar'
import { MarcaUpdate } from './components/marca/MarcaUpdate'
import { MarcaBorrar } from './components/marca/MarcaBorrar'
import { TipoUpdate } from './components/tipo/TipoUpdate'
import { TipoBorrar } from './components/tipo/TipoBorrar'

import { UsuarioUpdate } from './components/usuario/UsuarioUpdate'
import { UsuarioBorrar } from './components/usuario/UsuarioBorrar'



const App = () => {
    return <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={ InventarioView }/>
                
                <Route exact path="/usuarios" component={ UsuarioView }/>
                
                <Route exact path="/marcas" component={ MarcaView }/>

                <Route exact path="/tipos" component={ TipoView }/>

                <Route exact path="/estados" component={ EstadoView }/>

                <Route exact path="/inventarios/edit/:inventarioId" component={ InventarioUpdate }/>

                <Route exact path="/inventarios/delete/:inventarioId" component={ InventarioDelete }/>

                <Route exact path="/estados/edit/:estadoId" component={ EstadoUpdate }/>

                <Route exact path="/estados/delete/:estadoId" component={ EstadoBorrar }/>

                <Route exact path="/marcas/edit/:marcaId" component={ MarcaUpdate }/>

                <Route exact path="/marcas/delete/:marcaId" component={ MarcaBorrar }/>

                <Route exact path="/equipos/edit/:tipoId" component={ TipoUpdate }/>

                <Route exact path="/equipos/delete/:tipoId" component={ TipoBorrar }/>

                <Route exact path="/usuarios/edit/:userId" component={ UsuarioUpdate }/>

                <Route exact path="/usuarios/delete/:userId" component={ UsuarioBorrar }/>

                <Redirect to="/"/>
                
              </Switch>
    
    
    </Router>
}

export {App,}