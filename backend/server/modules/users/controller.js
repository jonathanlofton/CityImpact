import User from './model';
import { createToken } from '../../config/createToken';
import { facebookAuth } from '../../config/facebookAuth';
import { googleAuth } from '../../config/googleAuth';

export const createUser = async (req, res) => {
  const { username, email, passwordDigest } = req.body;
  const newUser = new User({ username, email, passwordDigest });

  try {
    return res.status(201).json({ user: await newUser.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with User Sign Up' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(200).json({ users: await User.find({})});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Users Fetch' });
  }
};

export const loginWithAuth0 = async function (req, res) {

  const { provider, token } = req.body;
  console.log(provider);
  let userInfo;

  try {
    if (provider === 'google') {
      userInfo = await googleAuth(token);
    } else {
      userInfo = await facebookAuth(token);
    }

    const user = await User.findOrCreate(userInfo);

    console.log(`logged in or created user: ${user}`);

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
      },
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res.status(400).json({ error: true, errorMessage: e.message });
  }
};

export const seedEvents = (req, res) => {

  try {
  // create some events
  const users = [
    // { fullName: 'Jimmy Fallon', email: 'Throwing into a basket.' },
    { fullName: 'DAVadsfID', email: 'EMAsadfIL CZU.', avatar: 'Striasdfng',
    providerData: {
      uid: 'asdfasdfasdf',
      provider: 'Stasdfasdfaasdfsdfring',
    }, },
    { fullName: 'Stepheasdfasdfasdfasdfn Colbert', email: 'Michasdfael aaPhasdfasdfelps is the fast fish.', avatar: 'Strasdfiasdfng',
    providerData: {
      uid: 'Stasdasdffasfring',
      provider: 'Stasdasdffasdfring',
    }, }

    // { fullName: 'David Letterman', email: 'Lifting heavy things up' },
    // { fullName: 'John Oliver', email: 'Super fast paddles' },
    // { fullName: 'Esteban Gorchoff', email: 'Fish salad' },
    // { fullName: 'Dog The Bounty Hunter', email: 'Andy salad' }

  ];

  // use the Event model to insert/save
  users.forEach( user => {
    const newUser = new User(user);
    newUser.save();
  })} catch (e) {
    return res.status(400).json({ error: true, errorMessage: e.message });
  }

  // seeded!
  res.send('Database seeded!');
}
