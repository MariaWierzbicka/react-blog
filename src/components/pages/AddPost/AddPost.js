import AddPostForm from '../../features/AddPostForm/AddPostForm'
import styles from './AddPost.module.scss';

const AddPost = () => {

  return (
    <div className={styles.formContainer}>
      <h2>Add post</h2>
      <AddPostForm />
    </div>
  )
};

export default AddPost;