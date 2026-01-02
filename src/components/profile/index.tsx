import ProfileHeader from './profile-header'
import ProfileStack from './profile-stack'
import ProfileContributions from './profile-contributions'
import ProfileActions from './profile-actions'

function Profile() {
  return (
    <div className="flex flex-col justify-between gap-7  h-full mx-auto  py-6">
      <ProfileHeader />
      <ProfileStack />
      <ProfileContributions />

      <ProfileActions />
    </div>
  )
}

export default Profile
