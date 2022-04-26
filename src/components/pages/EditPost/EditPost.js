import styles from './EditPost.module.scss';
import EditPostForm from '../../features/EditPostForm/EditPostForm';
import { useParams } from 'react-router';

const EditPost = () => {

  const { postId } = useParams();

  return (
  <div className={styles.formContainer}>
      <h2>Edit post</h2>
      <EditPostForm id={postId}/>
    </div>
  )
};

export default EditPost;