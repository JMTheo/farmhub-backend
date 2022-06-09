exports.get = (req, res, next) => {
  res.render('sensores', { title: 'home', message: 'Hello world', menuOpt: 'Home' })
}

exports.post = (req, res, next) => {
  res.status(201).send('Requisição POST recebida com sucesso!')
}

exports.put = (req, res, next) => {
  const id = req.params.id
  res.status(201).send(`Requisição PUT  recebida com sucesso! ${id}`)
}

exports.delete = (req, res, next) => {
  const id = req.params.id
  res.status(200).send(`Requisição DEL recebida com sucesso! ${id}`)
}
