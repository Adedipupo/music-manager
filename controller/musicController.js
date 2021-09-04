let mongoose = require('mongoose')
const Music = require('../model/Music')


exports.getAllMusics = async (req, res) => {
    try {
        let music = await Music.find()
        
        return res.status(200).json(music);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.addNewMusic = async (req, res) => {
    try {
        const music = new Music({
            title: req.body.title,
            artist: req.body.artist,
            music: req.body.music
        })
        
        let newMusic = await music.save();
        
    } catch (error) {
        res.status(500).json(error);
    }
}