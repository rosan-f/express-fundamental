export const userLogin = (req,res) => {
  res.send("This is Login page")
}

export const signUp = (req, res) => {
  res.send("This is singUp page")
}

export const userPost = (req, res) => {
  const {name, email} = req.body
  res.json({
    message : `user : ${name} email: ${email} creates successfully `
  })
}

export const userPut = (req, res) => {
  const userId = req.params.id
  const {name, email} = req.body
  res.json({
    message:`user : ${userId} updated to ${name}, ${email}`,
  });
}

export const userDelete = (req,res) => {
  const userId = req.params.id;
  res.json({
    message : `user with id : ${userId} has been deleted`
  })
}
