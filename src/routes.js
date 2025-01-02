import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Favorito from "./pages/Favorito";
import Erro from "./pages/Erro";

function RoutesApp(){
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/filme/:id" Component={Filme}></Route>
            <Route path="/favoritos" Component={Favorito}></Route>

            <Route path="*" Component={Erro}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;