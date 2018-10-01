const express = require('express')
const bountyRoutes = express.Router()
const Bounty = require('../models/bounties')

bountyRoutes.route('/')
    .get((req, res) => {
        Bounty.find((err, allBounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(allBounties)
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, newSavedBounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newSavedBounty)
        })
    })

bountyRoutes.route('/:id')
    .get((req, res) => {
        Bounty.findById((err, foundBounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(foundBounty)
        })
    })
    .put((req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, updatedBounty) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedBounty)
            }
        )
    })
    .delete((req, res) => {
        Bounty.findOneAndRemove(
            {_id: req.params.id},
            (err, deletedBounty) => {
                if(err) return res.status(500).send(err)
                return res.status(202).send({deletedBounty, msg: "Bounty successfully deleted."})
            }
        )
    })

module.exports = bountyRoutes