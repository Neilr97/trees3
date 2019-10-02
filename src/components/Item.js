import React from 'react';
import './stylesheets/item.css'

class Item extends React.Component {
    
    constructor(props) {
            super(props);
        }

       
    render() {
      return (
        <div className="itemBox">
            <p>
                <h1>{this.props.itemName}</h1><br></br>
                {this.props.category}<br></br>
                {this.props.sciencyName}<br></br>
                {this.props.prefEnvironment}<br></br>
                <img className="itemImg" src={this.props.imgLink} alt="treeImage"></img><br></br>
            </p>
        </div>            
        );
    }
}

export default Item;
