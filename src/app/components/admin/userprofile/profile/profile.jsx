import React from 'react'
import DetailsCard from './detailsCard'
import InfoSection from './infoSection'
import StatusSection from './statusSection'
import TimeLogSection from './timeLogSection'

const Profile = () => {
  return (
    <div className="grid grid-cols-1 gap-5  md:grid-cols-3">
      <div className="md:col-span-2">
        <InfoSection />
        <StatusSection />
        <TimeLogSection />
      </div>
      <div className="md:col-span-1">
        <DetailsCard />
      </div>
    </div>
  );
}

export default Profile