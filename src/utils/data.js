import bcrypt from 'bcryptjs';

const data={
users: [

{
    name: 'Aniket',
    email: 'aniketkajal88@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
},

{
    name: 'Aman',
    email: 'amankajalabc@gmail.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
},

],
};

export default data;