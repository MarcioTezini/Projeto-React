import { Cards } from "../Share/Cards";
import './style.css';

export const Post = ({posts}) => (
    <div className="cardsPost">
        {posts.map(post =>(
            <Cards
              key={post.id} 
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
        ))}
    </div>
)