import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EditForm from './EditForm'
import { connect } from 'react-redux' 
import { deleteBounty, getBounties } from '../redux'
import Divider from '@material-ui/core/Divider';



class BountyCard extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({open: !prevState.open}))
    }

    render(){
        return (
            <div>
                <ListItem dense button>
                    <div className="expand-btn">
                    {this.state.open? <ExpandLess onClick={this.handleClick}/> : <ExpandMore onClick={this.handleClick}/>}
                    </div>
                    <Avatar src={this.props.obj.avatar} onClick={this.handleClick}/>
                    <div className="list-item">
                        <div className="list-item-properties" onClick={this.handleClick}>
                            <div className="list-item-name">
                                <ListItemText primary={`${this.props.obj.first} ${this.props.obj.last}`}/>
                            </div>
                            <div className="list-item-secondary">
                                <ListItemText secondary={`${this.props.obj.type}`}/>
                            </div>
                            <div className="list-item-secondary">
                                <ListItemText secondary={`$${this.props.obj.bounty}`}/>
                            </div>
                        </div>
                        
                        {/* <div className="delete-btn">
                            <Button size="small" color="primary"><EditIcon /></Button>
                        </div> */}
                        <div className="delete-btn">
                            <Button onClick={() => this.props.deleteBounty(this.props.obj._id)} size="small" color="secondary"><DeleteIcon /></Button>
                        </div>
                    </div>
                    
                </ListItem>
                
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <EditForm obj={this.props.obj} handleState={this.handleClick}/>
                </Collapse>
                <Divider light />
            </div>
        )
    }
};

export default connect(state => state, { deleteBounty, getBounties })(BountyCard)