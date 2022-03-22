import {useParams} from "react-router-dom";

const Comment = () => {
    const {postid, commentid} = useParams();
    return <div>This is comment {commentid} of post {postid}</div>
}

export default Comment