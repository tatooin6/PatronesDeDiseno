class User {
  constructor(
    name, birthYear
  )
}

const user = new User();

const init = () => {
  user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
  // usuario inicio sesion
}

app.init()

// en algun lugar de nuestra app...
const login = () => {
  // logica de inicion de sesion...
    // ...
    //
    // Luego:
  user.trigger('login')
}

login();
