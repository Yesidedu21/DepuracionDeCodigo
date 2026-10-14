const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add(): debe agregar un usuario que NO está en la lista', () => {
    let user = new User(1,"Santiago", "santiago@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

test('remove(): intentar eliminar un usuario que NO está en la lista no afecta', () => {
    const userController = new UserController();
    let userExistente = new User(1, "Santiago", "santiago@generation.org");
    let userNoExistente = new User(2, "Yesid", "yesid@generation.org");

    userController.add(userExistente);
    userController.remove(userNoExistente); 

    expect(userController.getUsers().length).toBe(1);
    expect(userController.getUsers()).toContain(userExistente);
});

test('findByEmail(): debe retornar el usuario si el email existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    let resultado = userController.findByEmail("santiago@generation.org");
    expect(resultado).toEqual(user);
});

test('findByEmail(): debe retornar undefined si el email NO existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    const resultado = userController.findByEmail("noexiste@generation.org");
    expect(resultado).toBeUndefined();
});

test('findById(): debe retornar el usuario si el ID existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    const resultado = userController.findById(1234);
    expect(resultado).toEqual(user);
});

test('findById(): debe retornar undefined si el ID NO existe', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    const resultado = userController.findById(999);
    expect(resultado).toBeUndefined();
});