import './post-list-item.css';
import ActionPostBlock from '../action-post-block/action-post-block'
import UserInfoBlock from '../user-info-block/user-info-block'
const PostListItem = ({header, urlImage, content, id, date}) => {
    return(
        <div className="post-list-item">
            <UserInfoBlock postCreateDate={date} id={78}/>
            <div className="post-list-item-content">
                <h1>{header}</h1>
                <div className='post-list-item-image'>
                    {urlImage ? <img src={'http://localhost:3000' + urlImage} alt="Post" className='post-image' /> : null}
                </div>
                <div className="post-list-item-text" align="justify">
                    {content}                
                </div>
            </div>
            <br/>
            <br/>
            <ActionPostBlock post_id={id} className="action-post-block"/>
        </div>
    );
}

export default PostListItem;