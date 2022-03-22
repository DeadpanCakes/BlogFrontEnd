import {useParams} from "react-router-dom";
import sampleComments from "../../datasets/comments";

const Comment = () => {
    const {commentid} = useParams();
    const comment = sampleComments.find((comment) => {
        return comment._id.toString() === commentid
    })
    return <li>
        <h3>{comment.author.username}</h3>
        <p>{comment.content}</p>
    </li>
}

export default Comment