import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  useEffect(() => {
    fetch("/Profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setUsername(data.username);
        setEmail(data.email);
        setProfilePicture(data.profilePicture);
        setTwoFactorAuth(data.twoFactorAuth);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedProfile = {
      username,
      email,
      password,
      profilePicture,
      twoFactorAuth,
    };

    console.log(updatedProfile);
  };



  if (!profile) {
    return <div >Loading . . .</div>;
  }

  return (
    <div className='text-white p-8 rounded-md m-10'  style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className='text-3xl mb-2.5 font-medium text-center'>Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <div className='lg:flex grid lg:grid-cols-2 lg:space-x-5'>
          <div>
            <div className='flex justify-center'>
              <div>
                <label className='font-medium'>Username:</label>
                <br />
                <input
                  className='my-3 p-2.5 rounded-md bg-black'
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center'>
              <div>
                <label className='font-medium'>Email:</label>
                <br />
                <input
                  className='my-3 p-2.5 rounded-md bg-black'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>

            <div className='flex justify-center'>
              <div>
                <label className='font-medium'>Password:</label> <br />
                <input
                  className='my-3 p-2.5 rounded-md bg-black'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center'>
              <div>
                <label className='font-medium'>Profile Picture URL:</label>
                <br />
                <input
                  className='my-3 p-2.5 rounded-md bg-black'
                  type="url"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>


        <div className='text-center'>
          <label>Two-Factor Authentication:</label>
          <input
            className='my-3'
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            className="m-3 p-2.5 px-10 rounded-md bg-black transition-all duration-200"
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}