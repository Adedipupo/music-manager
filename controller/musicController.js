let mongoose = require('mongoose')
const Music = require('../model/Music')


exports.getAllMusics = async (req, res) {
    try {
        let music = await Music.find()
        
        return res.status(200).json(music);
    } catch (error) {
        res.status(500).json(error);
    }
}