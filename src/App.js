import './App.css';
import { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Slide } from './components/Slide';
import {loadPosts} from './utils/load-posts'
import { Post } from './components/Posts';
import { Buttom } from './components/Share/Buttom';
import { TextInput } from './components/Share/Input';

class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: ''
  }

 async componentDidMount() {
  await this.loadPosts();
}

loadPosts = async () => {
  const { page, postsPerPage} = this.state;

  const postsAndPhotos = await loadPosts();
  this.setState({ 
    posts: postsAndPhotos.slice(page, postsPerPage),
    allPosts: postsAndPhotos,
  });
}

loadMorePosts = () => {
  const {
    page,
    postsPerPage,
    allPosts,
    posts
  } = this.state;
  const nextPage = page + postsPerPage;
  const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
  posts.push(...nextPosts);

  this.setState({ posts, page: nextPage});
}


handleChange = (e) => {
  const { value } = e.target;
  this.setState({ searchValue: value});
}

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
    allPosts.filter(post =>{
      return post.title.toLowerCase().includes(
        searchValue.toLocaleLowerCase()
      );
    })
    :posts;
    return (
      <div className="App">
        <header className='header'>
          <Navbar/>
          <div className='inputSearch'>
          <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
          </div>
        </header>
        <section>
          <Slide/>
        </section>
        <section>
          {filteredPosts.length > 0 &&(
          <Post posts={filteredPosts}/>
          )}

          {filteredPosts.length === 0 && (
            <p>Item Nâo encontrado!!!</p>
          )}

          {!searchValue && ( 
            <Buttom
              text="Mais Cards"
              onClick={this.loadMorePosts}
              disabled={noMorePost}
            />
          )}
        </section>
      </div>
    );
  }
}
export default App;
