import './style.css';

export const Cards = ({title, cover, body, id}) =>  (
    <div className="cards">
        <img src={cover} alt={title}/>
        <div className="post-content">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </div>
);