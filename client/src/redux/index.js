import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const state = {
    bounties: []
}

export const getBounties = () => {
    return function(dispatch) {
        axios.get('/bounty').then(res => {
            dispatch({
                type: "GET_BOUNTIES",
                data: res.data
            })
        })
    }
}

export const postBounty = obj => {
    return function(dispatch) {
        axios.post('/bounty', obj).then(res => {
            dispatch({
                type: "POST_BOUNTY",
                data: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const updateBounty = (obj, key) => {
    return function(dispatch) {
        axios.put(`/bounty/${key}`, obj).then(res=> {
            dispatch({
                type: "UPDATE_BOUNTY",
                data: res.data
            })
        })
    }
}

export const deleteBounty = id => {
    return function(dispatch){
        axios.delete(`/bounty/${id}`).then(res => {
            dispatch({
                type: "DELETE_BOUNTY",
                data: res.data
            })
        })
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "GET_BOUNTIES": 
            return {
                bounties: [...action.data]
            }
        case "POST_BOUNTY":
            return {
                bounties: [...prevState.bounties, action.data]
            }
        case "UPDATE_BOUNTY":
            return {
                bounties: prevState.bounties.map(bounty => {
                    if(bounty._id === action.data._id) return action.data
                    return bounty
                })
            }
        case "DELETE_BOUNTY":
            return {
                bounties: prevState.bounties.filter(bounty => bounty._id !== action.data.deletedBounty._id)
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))