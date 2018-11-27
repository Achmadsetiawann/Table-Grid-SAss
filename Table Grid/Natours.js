import React, { Component } from 'react';
import './Natours.scss';
import logowhite from './img/logowhite.png';


  
class Grid-Test extends Component {
    render() {
        return (
            <div>

                <div className="Section">
                    <div className="Grid-Test">
                        <div className="Row">
                            <div className="Col-1-of-2">
                                Col 1 Of 2
                            </div>
                            <div className="Col-1-of-2">
                                Col 1 Of 2
                            </div>
                        </div>

                        <div className="Row">
                            <div className="Col-1-of-3">
                                Col 1 Of 3
                            </div>
                            <div className="Col-1-of-3">
                                Col 1 Of 3
                            </div>
                            <div className="Col-1-of-3">
                                Col 1 Of 3
                            </div>
                        </div>

                        <div className="Row">
                            <div className="Col-1-of-3">
                                Col 1 Of 3
                            </div>
                            <div className="Col-2-of-3">
                                Col 2 Of 3
                            </div>
                        </div>

                        <div className="Row">
                            <div className="Col-1-of-4">
                                Col 1 Of 4
                            </div>
                            <div className="Col-1-of-4">
                                Col 1 Of 4
                            </div>
                            <div className="Col-2-of-4">
                                Col 2 Of 4
                            </div>
                        </div>

                        <div className="Row">
                            <div className="Col-1-of-4">
                                Col 1 Of 4
                            </div>
                            <div className="Col-3-of-4">
                                Col 3 Of 4
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Grid-Test;