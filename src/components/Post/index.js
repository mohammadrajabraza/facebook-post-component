import './index.css'
import FBImageGRID from 'react-fb-image-grid'

function Post ({postDetails : {createdBy, avatar, description, images, createdAt}}) {

    return (
        <div className="post">
            <div className="post-header">
                <div className="avatar">
                    <img src={avatar} alt={createdBy}/>
                </div>
                <div className="author-time">
                    <div className="author">{createdBy}</div>
                    <div className="time">{createdAt}</div>
                </div>
            </div>
            <div className="post-content">
                <div className="description">{description}</div>
                {images.length > 0 && <FBImageGRID images={images}/>}

            </div>
        </div>       
    )
}
export default Post