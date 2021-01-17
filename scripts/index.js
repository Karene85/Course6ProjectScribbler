var createPostModal = document.getElementById('create-post-modal');

function openPostList() {

    window.location.href = "html/postslist.html";
}

function openCreatePostModal() {
    var createPostModal = document.getElementById('create-post-modal');
    createPostModal.style.display = 'block';
}

function closeCreatePostModal() {
    var createPostModal = document.getElementById("create-post-modal");
    createPostModal.style.display = "none";
  }  

