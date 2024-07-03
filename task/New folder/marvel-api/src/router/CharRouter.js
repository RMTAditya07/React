import React from "react";
import {Route,Switch} from 'react-router-dom'
//import { Character,CharacterById,Comics, Events,Series,Stories} from "../components/Fetch/characters";
import Character from "../display/character/Character";
import Option from "../display/character/Option";
const CharRouter = () =>(
    <div>
        <Switch>
            <Route exact path="/character" component={Character}/>
            <Route exact path="/option" component={Option}/>
            {/* <Route exact path="/charaterById" component={CharacterById}/>
            <Route exact path="/charaterById/comics" component={Comics}/>
            <Route exact path="/charaterById/events" component={Events}/>
            <Route exact path="/charaterById/series" component={Series}/>
            <Route exact path="/charaterById/stories" component={Stories}/> */}

        </Switch>
    </div>

)

export default CharRouter