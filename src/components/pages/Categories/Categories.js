import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import styles from './Categories.module.scss';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const Categories = () => {


  const categories = useSelector(state => getAllCategories(state));


  return (
    <div className={styles.container}>
    <h2 className={styles.pageTitle}>Categories</h2>
    <Stack >
      {categories.map(category =>
        <div key={shortid()} className="border p-3">
          <Link to={'/category/' + category.name}>{category.name}</Link>
        </div>
      )}
    </Stack>
    </div>
  )
}

export default Categories;