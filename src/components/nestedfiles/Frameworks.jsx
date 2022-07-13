import Item from '../Item';
import styles from '../.././assets/styles/Types.module.css';

const Frameworks = ({ frameworkList, deleteData }) => {
  return (  
    <div className={`${styles.frames} ${styles.textcolor}`}>
      <h2> Frameworks: </h2>
      <ul>
        {frameworkList.map((item) => {
          return (
            <Item 
              key={item.id}
              item={item}
              deleteData={deleteData}
            />
          )
        })}
      </ul>
    </div>
  );
}
 
export default Frameworks;