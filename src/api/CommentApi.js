import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const comments = [
    {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false 
  },
   {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
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
                    reject(`Title must be at least ${minPostTitleLength} characters.`)
                }

                if (post.id) {
                    const existingPostIndex = posts.findIndex(p => p.id === post.id)
                    posts.splice(existingPostIndex, 1, post)
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new posts in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    post.id = generateId(post)
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
