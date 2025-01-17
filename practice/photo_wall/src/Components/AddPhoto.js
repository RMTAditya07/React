import React,{Component} from "react";

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.link.value
        const description=event.target.elements.description.value
        const post={
            id:0,
            description:description,
            link:imageLink
        }
        if(description&&imageLink){
            this.props.onAddPhoto(post)
        }
    }

    render(){
        return (
            <div>
        <h1>add photos</h1>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link"/>
            <input type="text" placeholder="description" name="description"/>
            <button>Post</button>
        </form>
        </div>
        </div>
        )
    }
}

export default AddPhoto