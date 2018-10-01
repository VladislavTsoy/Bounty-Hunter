import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { updateBounty } from '../redux'


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

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: this.props.obj.first,
            last: this.props.obj.last,
            isAlive: this.props.obj.isAlive,
            bounty: this.props.obj.bounty,
            type: this.props.obj.type,
            avatar: this.props.obj.avatar
        }
    }

    handleChange = name => e => {
        this.setState({[name]: e.target.value})
    }

    handleSubmit = e => {
        this.props.handleState()
        
        this.props.updateBounty(this.state, this.props.obj._id)
    }

    render() {
        const { classes } = this.props
        return (
            <div className="edit-form-container">
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
                        label="Price on head"
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
                    <Button onClick={this.handleSubmit}>Apply Changes</Button>
                </form>
            </div>
        );
    }
}

EditForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(state=>state, { updateBounty })(withStyles(styles)(EditForm))