import classes from './Post.module.css';
// const names = ['Stoyan', 'Ivan'];
function Post (props){
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    
    
return (
<li className={classes.post}>
    <p>{props.author}</p>
    <p>{props.body}</p>
</li>
)}

export default Post;