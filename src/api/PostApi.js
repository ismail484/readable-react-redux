import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = [
    {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
   // authorId: "cory-house",
   // voteScore: 6,
    //deleted: false 
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
  //  authorId: "cory-house",
   // voteScore: -5,
   // deleted: false
  }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (post) => {
    return replaceAll(post.title, ' ', '-');
};

class PostApi {
    static getAllPosts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], posts));
            }, delay);
        });
    }

    static savePost(post) {
        post = Object.assign({}, post); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minPostTitleLength = 1;
                if (post.title.length < minPostTitleLength) {
                    reject(`Title must be at least ${minPostTitleLength} characters.`);
                }

                if (post.id) {
                    const existingPostIndex = posts.findIndex(p => p.id === post.id);
                    posts.splice(existingPostIndex, 1, post);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new posts in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    post.id = generateId(post);
                    post.watchHref = `http://www.pluralsight.com/posts/${post.id}`;
                    posts.push(post);
                }

                resolve(post);
            }, delay);
        });
    }

    static deletePost(postId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfPostToDelete = posts.findIndex(post => post.id === postId);
                posts.splice(indexOfPostToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getPost(postId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingPostIndex = posts.findIndex(post => post.id === postId);
                
                const postFound = Object.assign({}, posts[existingPostIndex]);

                resolve(postFound);

            }, delay);
        });
    }

}

export default PostApi;
