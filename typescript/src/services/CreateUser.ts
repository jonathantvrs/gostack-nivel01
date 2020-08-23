interface TechObject {
  title: string;
  xp: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  // techs: string[];
}

function createUser(name = '', email: string, password: string) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}

function createUser2({ name = '', email, password }: CreateUserData) {
  const user = {
    email,
    password,
  };

  return user;
}

export { createUser, createUser2 };
