import React from 'react';
import Item from './Item.js';
import TreeJSON from '../treeList.json';

class Browse extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <div>
        <div className="browseBox">
        
        {TreeJSON.map((tree,index)=>{
          let ID = tree.ID;
          let itemName=tree.itemName;
          let category=tree.category;
          let sciencyName=tree.sciencyname;
          let prefEnvironment=tree.prefEnvironment;
          let imgLink=tree.imgLink;
          let version=tree.version;
          return(
            <div>
              <Item ID={ID} itemName={itemName} category={category} sciencyName={sciencyName} prefEnvironment={prefEnvironment} imgLink={imgLink} version={version} ></Item>
            </div>
          );
        })}
      

        </div>
      </div>
    );
  }
}

export default Browse;