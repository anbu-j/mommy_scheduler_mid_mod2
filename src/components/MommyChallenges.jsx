

import React, { Component } from 'react';
import challenges from '../data/challengedata';
import {Button} from 'react-bootstrap'

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

    handleChange=(eventToBeChanged)=>{
        eventToBeChanged.preventDefault();
        this.setState(
            {
                [eventToBeChanged.target.id]: eventToBeChanged.target.value
            }
        )
    }
    statusUnSelected=(itemInTheList)=>{
            this.setState(
                {
                    [itemInTheList.isSelected.value]:false
                }
            )
        }    
    statusSelected=(itemInTheList)=>{
            this.setState(
                {
                    [itemInTheList.isSelected.value]:true
                }
            )
        }     
        
    
    
    render() {
        return (
            <div>
                <div>
                    <h1> Mommy Challenges </h1> 
                </div>
                <div className="printChallenges">
                <div className="printNonChallenges">
                    <h3> Identify Challenges</h3>
                    {this.state.challenge.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? '':(<label className="labels">
                    <input
                        id="isChallenge"
                        type="checkbox"
                        checked='false'
                      //  onChange={this.onChageAction.bind(this)}
                    > 
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeName"
                        readOnly={true}
                        value={itemInTheList.name}>
                    </input>
                    <input
                        className="labelText"
                        type="textbox"
                        id="challengeDefaultPriority"
                        placeholder={itemInTheList.priority}
                        onChange={this.handleChange}
                        >
                    </input>
                    
                </label>);
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                <Button variant="outline-primary">Select Challenge</Button>
                </div>

                <div className="printSelChallenges">
                    <h3> Selected Challenges</h3>
                    {this.state.challenge.map((itemInTheList,i)=>{
                    return itemInTheList.isSelected? (<label className="labels">
                    <input
                        name="isChallenge"
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
                </label>):'';
                    
                    //itemInTheList.name, itemInTheList. ;
                    
                    }
                    )

                    }
                <Button variant="outline-primary"> Restore Challenge</Button>
                </div>
                </div>
            </div>
            
        );
    }
}

export default MommyChallenges;