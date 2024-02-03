import React from 'react'
import Image from 'next/image'
const ProfilesArray = ({ profiles, showadd=true, css, lastIcon }) => {


  const profilesList = profiles.map((profile, index) => {
    return (
      <Image key={index} alt='abc' src={profile.img} width={50} height={50} className={'rounded-full aspect-square object-cover border-2 border-white ' + (index > 0 ? " -ml-3 " : " ") + css} />
    )
  })
  return (
    <div className="flex">
      {profilesList}
      {showadd ? (
        <div
          className={
            "-ml-3 aspect-square rounded-full border-2 border-white p-1 text-center text-white flex items-center justify-center" +
            css
          }
        >
          {lastIcon}
        </div>
      ) : null}
    </div>
  );
}

export default ProfilesArray;