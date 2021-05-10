

import React, { Component } from 'react';
import challenges from '../data/challengedata';

class MommyChallenges extends Component {
    constructor(props){
        super(props)
        this.state={
           challenge:challenges,
           name:"",
           priority:'',
           isSelected:false
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h1> Identify Challenges </h1> 
                </div>
                <div className="printChallenges">
                    {this.state.challenge.map((itemInTheList,i)=>{
                    return (<label className="labels">
                    <input
                        name="isChallengeReady"
                        type="checkbox"
                    > 
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.priority}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        readOnly={true}
                        value={itemInTheList.isSelected }>
                    </input>
                </label>)
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                </div>
            </div>
            
        );
    }
}

export default MommyChallenges;