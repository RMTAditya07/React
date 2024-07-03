import React,{Component} from "react";
import Title from './Title'
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom'

class Main extends Component{
    constructor(){
        super()
        this.state={
            posts: [{
                id:"0",
                description: "BTS",
                link: "https://cdn.wallpapersafari.com/89/41/MnpCfe.jpg"
            },{
                id:"1",
                description: "BTS Rookie",
                link: "https://cdn.wallpapersafari.com/5/13/06cMVX.jpg"
            },{
                id:"2",
                description: "BTS Grammy",
                link: "https://cdn.wallpapersafari.com/59/43/LK5ynd.jpg"
            }]
        }
        this.removePhoto=this.removePhoto.bind(this);
        
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state)=> ({
            posts:state.posts.filter(post => post!==postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }
   
    componentDidMount(){
          
    }

    componentDidUpdate(prevProps,prevState){
        
        console.log(prevState.posts)
        console.log(this.state)
    }

    render(){
       
        return (<div>
                <Route exact path="/" render={() =>(
                    <div>
                        <Title title={'Photo Wall'}/>
                        <Photowall posts={this.state.posts} onRemovePhoto= {this.removePhoto} onNavigate = {this.navigate}/>
                    </div>
                )}/>
                <Route path="/AddPhoto" render = {({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')
                    }}/>
                )}/>
                
        
        </div>
        )
    }
}



export default Main