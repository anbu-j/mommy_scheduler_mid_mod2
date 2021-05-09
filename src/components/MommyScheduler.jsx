import React, { Component } from 'react';

class MommyScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChallengeReady: true,
          isActReady: false,
          isPriorityReady: true,
          isSummaryReady: false,
          isSchedulerReady: true,
          isActivationReady: false
        };
    }

    render() {
        return (
            <div className="Container">
                <h1>Mommy Scheduler</h1>
                <div className="InitialSetup">
                   
                    <label className="labels">
                        <input
                            name="isChallengeReady"
                            type="checkbox"
                            checked={this.state.isChallengeReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Identify Challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                    <label className="labels">
                        <input
                            name="isActReady"
                            type="checkbox"
                            checked={this.state.isActReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Identify activities part of the challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    
                    <label className="labels">
                        <input
                            name="isPriorityReady"
                            type="checkbox"
                            checked={this.state.isPriorityReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Prioritize activities and time">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                    
                    <label className="labels">
                        <input
                            name="isSummaryReady"
                            type="checkbox"
                            checked={this.state.isSummaryReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Prioritize challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    <label className="labels">
                        <input
                            name="isSchedulerReady"
                            type="checkbox"
                            checked={this.state.isSchedulerReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Preview Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    <label className="labels">
                        <input
                            name="isActivationReady"
                            type="checkbox"
                            checked={this.state.isActivationReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            value="Activate Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                </div>
            </div>
        );
    }
}

export default MommyScheduler;