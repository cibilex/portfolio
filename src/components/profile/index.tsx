import ProfileHeader from './profile-header'
import ProfileStack from './profile-stack'
import ProfileContributions from './profile-contributions'
import ProfileActions from './profile-actions'

function Profile() {
  return (
    <div className="flex flex-col  justify-between w-full  pb-6 gap-4  md:gap-7 md:py-6 h-full mx-auto">
      <ProfileHeader />
      <ProfileStack />
      <ProfileContributions />
      <ProfileActions />
    </div>
  )
}

export default Profile
