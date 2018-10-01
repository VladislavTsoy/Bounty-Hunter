import React, { Component }from 'react';
import { connect } from 'react-redux'
import { postBounty, getBounties } from '../redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });


class Form extends Component{
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            isAlive: true,
            bounty: 0,
            avatar: '',
            type: ''
        }
    }

    handleChange = name => e => {
        this.setState({[name]: e.target.value})
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     let newBounty = this.state
    //     this.props.postBounty(newBounty)
    // }

    render() {
        const { classes } = this.props
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                        id="first"
                        label="First Name"
                        className={classes.textField}
                        value={this.state.first}
                        onChange={this.handleChange('first')}
                        margin="normal"
                        />
                <TextField
                        id="last"
                        label="Last Name"
                        className={classes.textField}
                        value={this.state.last}
                        onChange={this.handleChange('last')}
                        margin="normal"
                        />

                <TextField
                    id="isAlive"
                    select
                    label="Select"
                    className={classes.textField}
                    value={this.state.isAlive}
                    onChange={this.handleChange('isAlive')}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="is alive?"
                    margin="normal"
                    >
                        <MenuItem key={true} value={true} selected="true">True</MenuItem>
                        <MenuItem key={false} value={false}>False</MenuItem>
                   
                    </TextField>

                <TextField
                    id="bounty"
                    label="Price of head"
                    value={this.state.bounty}
                    onChange={this.handleChange('bounty')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    />
                <TextField
                        id="avatar"
                        label="Image Source URL"
                        className={classes.textField}
                        value={this.state.avatar}
                        onChange={this.handleChange('avatar')}
                        margin="normal"
                        />

                <TextField
                    id="type"
                    select
                    label="Select"
                    className={classes.textField}
                    value={this.state.type}
                    onChange={this.handleChange('type')}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="Jedi, Sith, or A.I."
                    margin="normal"
                    >
                        <MenuItem key="Jedi" value="Jedi" selected="true">Jedi</MenuItem>
                        <MenuItem key="Sith" value="Sith">Sith</MenuItem>
                        <MenuItem key="A.I." value="A.I.">A.I.</MenuItem>
                   
                    </TextField>
                    <Button onClick={() => this.props.postBounty(this.state) }>Add Bounty</Button>
            </form>
        );
    }
};

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, { postBounty, getBounties })(withStyles(styles)(Form));