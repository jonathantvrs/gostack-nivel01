import { Request, Response } from 'express';
import { createUser2 } from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
  const userCreated = createUser2({
    email: 'jontvrs@gmail.com',
    password: '123',
    techs: [
      'Node',
      'React',
      'ReactNative',
      {
        title: 'Java',
        xp: 2000,
      },
    ],
  });

  return response.json({ message: userCreated });
}
