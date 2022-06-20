

const Item = ({ title, url, author, num_comments }) => {
  return ( 
    <>
      <li> {title} 
        <span>
          <a href={url} target="_blank" rel="noreferrer"> {title} </a>
        </span>
        <span>
          <h3> {author} </h3>
        </span>
        <span>
          <p> No. of comments: {num_comments} </p>
        </span>
      </li>
    </>
  );
}
 
export default Item;