import Item from '../Item';
import styles from '../.././assets/styles/Types.module.css';

const Libraries = ({ librariesList, deleteData }) => {
  return ( 
    <div className={`${styles.frames} ${styles.textcolor}`}>
      <h2> Libraries: </h2>
      <ul>
        {librariesList.map((item) => {
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
 
export default Libraries;