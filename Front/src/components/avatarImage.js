import '../css/Avatar.css'
import userPhoto from '../image/userPhoto.jpg'

function AvatarImage(props) {

    return (
        <div className="profile">
            <img src={userPhoto} alt='foto avatar' />
        </div>
    )
}

export default AvatarImage