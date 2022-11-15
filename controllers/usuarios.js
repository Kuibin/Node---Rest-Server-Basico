const {response, request} = require('express');

const usuariosGet = (req = request, res = response) =>{
    //res.send('Hello World kuibin')

    const {q, nombre = "no name",apikey, page = 1, limit} = req.query;

    //los estados 
    // res.status(403).json({
    res.json({
        ok:true,
        msg:'get Api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
  }
  const usuariosPut = (req, res) =>{
    //res.send('Hello World kuibin')

    const id = req.params.id;

    //los estados 
    // res.status(403).json({
    res.json({
        ok:true,
        msg:'put Api',
        id
    })
  }
  const usuariosPost = (req, res) =>{
    //res.send('Hello World kuibin')

    const body = req.body;

    //los estados 
    // res.status(403).json({
    res.json({
        ok:true,
        msg:'post Api',
        body
    })
  }
  const usuariosDelete = (req, res) =>{
    //res.send('Hello World kuibin')

    //los estados 
    // res.status(403).json({
    res.json({
        ok:true,
        msg:'delete Api'
    })
  }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }