import User from './model';
import { createToken } from '../../config/createToken';
import { facebookAuth } from '../../config/facebookAuth';
import { googleAuth } from '../../config/googleAuth';


export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { hostedEvents, joinedEvents } = req.body;

  if (!userId) {
    return res.status(400).json({ error: true, message: 'No User Id' });
  }

  try {
    const user = await User.findById(userId);
    await user.update({ hostedEvents, joinedEvents });
      // .populate('hostedEvents')
      // .populate('joinedEvents')
      // .exec(err => {
      //   if (err) {
      //     return handleError(err);
      //   }
      // });
    return res.status(200).json({ user });
  } catch (e) {
    return res.status(404).json({ error: true, message: 'Cannot update user' });
  }
};

export const loginWithAuth0 = async function (req, res) {

  const { provider, token } = req.body;
  let userInfo;

  try {
    if (provider === 'google') {
      userInfo = await googleAuth(token);
    } else {
      userInfo = await facebookAuth(token);
    }

    const user = await User.findOrCreate(userInfo)

    console.log(`logged in or created user: ${user}`);

    return res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        fullName: user.fullName,
        avatar: user.avatar,
        email: user.email,
        hostedEvents: user.hostedEvents,
        joinedEvents: user.joinedEvents
      },
      token: `JWT ${createToken(user)}`,
    });
  } catch (e) {
    return res.status(400).json({ error: true, errorMessage: e.message });
  }
};

// export const seedEvents = (req, res) => {
//
//   try {
//   // create some events
//   const users = [
//     // { fullName: 'Jimmy Fallon', email: 'Throwing into a basket.' },
//     { fullName: 'DAVadsfID', email: 'EMAsadfIL CZU.', avatar: 'Striasdfng',
//     providerData: {
//       uid: 'asdfasdfasdf',
//       provider: 'Stasdfasdfaasdfsdfring',
//     }, },
//     { fullName: 'Stepheasdfasdfasdfasdfn Colbert', email: 'Michasdfael aaPhasdfasdfelps is the fast fish.', avatar: 'Strasdfiasdfng',
//     providerData: {
//       uid: 'Stasdasdffasfring',
//       provider: 'Stasdasdffasdfring',
//     }, }
//
//     // { fullName: 'David Letterman', email: 'Lifting heavy things up' },
//     // { fullName: 'John Oliver', email: 'Super fast paddles' },
//     // { fullName: 'Esteban Gorchoff', email: 'Fish salad' },
//     // { fullName: 'Dog The Bounty Hunter', email: 'Andy salad' }
//
//   ];
//
//   // use the Event model to insert/save
//   users.forEach( user => {
//     const newUser = new User(user);
//     newUser.save();
//   })} catch (e) {
//     return res.status(400).json({ error: true, errorMessage: e.message });
//   }
//
//   // seeded!
//   res.send('Database seeded!');
// }
