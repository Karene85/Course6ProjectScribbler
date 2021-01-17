var deletePostModal = document.getElementById('delete-post-modal');

function openDeletePostModal(postId) {

    
    deletePostModal.style.display = "block";
    
    var postToBeDeleted = document.getElementById(postId);

    postToBeDeleted.id = "post-to-be-deleted";

}

function returnToPostslist() {
    deletePostModal.style.display = "none";
    window.location.href = "postslist.html";
}

function deletePost(postId) {
    
    var postToBeDeleted = document.getElementById(postId);

    postToBeDeleted.remove();
    document.getElementById('delete-post-modal').style.display = "none";
}