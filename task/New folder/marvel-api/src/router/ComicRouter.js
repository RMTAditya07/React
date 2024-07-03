import React from "react";
import {Route,Switch} from 'react-router-dom'
//import { Comics,ComicsById,Characters, Creators,Events,Stories} from "../components/Fetch/comics";\
import Comics from "../display/comics/Comics";

const ComicRouter = () =>(
    <div>
        <Switch>
            <Route exact path="/comics" component={Comics}/>
            {/* <Route exact path="/comicId" component={ComicsById}/>
            <Route exact path="/comicId/characters" component={Characters}/>
            <Route exact path="/comicId/creators" component={Creators}/>
            <Route exact path="/comicId/events" component={Events}/>
            <Route exact path="/comicId/stories" component={Stories}/> */}
        </Switch>
    </div>

)

export default ComicRouter