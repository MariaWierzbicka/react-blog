import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';


const EditPost = () => {

  const { postId } = useParams();
  const postData = useSelector(state => getPostById(state, postId))

  return (
    <h1>EditPost</h1>
  )
};

export default EditPost;