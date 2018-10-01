import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBounties } from '../redux'
import BountyCard from './BountyCard'
import List from '@material-ui/core/List';

class Main extends Component {
    constructor() {
        super()
        
        this.state = {
            bountyArr: []
        }
    }
    componentDidMount() {
        this.props.getBounties()
    }

    render() {
        const displayBounties = this.props.bounties.map((bounty, i) => {
            return <BountyCard key={ i } obj={ bounty } />
        })

        return (
            <div className="list-container">
                <List>
                    {displayBounties}
                </List>
            </div>
        );  
    }
}

export default connect(state=>state, { getBounties } )( Main );