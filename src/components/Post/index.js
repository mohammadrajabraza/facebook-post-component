import './index.css'
import FBImageGRID from 'react-fb-image-grid'
import LikeIcon from '../../assets/images/like.svg'
import LoveIcon from '../../assets/images/love.svg'
import WowIcon from '../../assets/images/wow.svg'

function Post ({postDetails : {createdBy, avatar, description, images, createdAt}}) {
    let postTime = new Date(createdAt).toLocaleTimeString([], {hour : '2-digit', minute: '2-digit'})
//   console.log(day)
    return (
        <div className="post">
            <div className="post-header">
                <div className="avatar">
                    <img src={avatar} alt={createdBy}/>
                </div>
                <div className="author-time">
                    <div className="author">
                        <a>
                            {createdBy}
                        </a>
                    </div>
                    <div className="time">
                        <a href="#">
                            10:13 AM
                        </a>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <div className="description">{description}</div>
                {images.length > 0 && <FBImageGRID images={images}/>}
            </div>
            <div className="post-engagements">
                <div className="post-reactions">
                    <div className="like-reaction">
                        <img src={LikeIcon} alt='Like reaction'/>
                    </div>
                    <div className="love-reaction">
                        <img src={LoveIcon} alt='Love reaction'/>
                    </div>
                    <div className="wow-reaction">
                        <img src={WowIcon} alt='Wow reaction'/>
                    </div>
                    <a href="#">
                        Ahmed Raza and 10 others
                    </a>

                </div>
                <div className="post-comments-list">
                    <a href="#">2 Comments</a>
                </div>
            </div>
        </div>       
    )
}
export default Post