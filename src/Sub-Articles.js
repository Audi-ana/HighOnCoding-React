import React, {Component} from 'react';


export class SubArticles extends Component{

    render(){
        return(
            <div className="subArticleStyling">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <div className="commentStyling">
                <span className="spacing">{this.props.comments}</span>
                <span>{this.props.likes}</span>
                </div>
            </div>
        )
    }
}
