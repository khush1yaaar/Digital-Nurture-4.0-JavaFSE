import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return response.json();
            })
            .then(posts => {
                this.setState({ posts });
            })
            .catch(error => {
                this.setState({ error: error.message });
                this.componentDidCatch(error, { componentStack: 'Posts component' });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert(`Error in Posts component: ${error.toString()}`);
        console.error('Error:', error, 'Info:', info);
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!posts.length) {
            return <div>Loading posts...</div>;
        }

        return (
            <div className="posts-container">
                <h1>Blog Posts</h1>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;