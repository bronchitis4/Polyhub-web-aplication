import UserInfoBlock from "../user-info-block/user-info-block"
import ActionPostBlock from "../action-post-block/action-post-block"
import './comment-block.css'

const CommentBlock = ({user_id, content, date, comment_id}) => {
    return(
        <div className="comment-block-wrapper">
            <UserInfoBlock id={user_id} postCreateDate={date}/>

            <div className="comment-block-content">
                {content}
            </div>
            <ActionPostBlock post_id={null} comment_id={comment_id} className="action-post-block"/>

        </div>
    )
}

export default CommentBlock;