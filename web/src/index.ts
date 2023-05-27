import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Anthony', age: 29 });

user.on('change', () => {
  console.log(user);
});

console.log(user.get('age'));
