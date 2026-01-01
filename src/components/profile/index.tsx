import ProfileHeader from './profile-header'
import ProfileStack from './profile-stack'
import ProfileContributions from './profile-contributions'
import ProfileActions from './profile-actions'

function Profile() {
  return (
    <div className="flex flex-col gap-20 pt-12">
      <ProfileHeader />
      <ProfileStack />
      <ProfileContributions />

      <ProfileActions />
    </div>
  )
}

export default Profile
