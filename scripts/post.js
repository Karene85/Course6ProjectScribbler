function showPost(authorId, titleId, contentId) {
    console.log(authorId);
    var author = document.getElementById(authorId).innerHTML;
    var title = document.getElementById(titleId).innerHTML;
    var content = document.getElementById(content).innerHTML;
    console.log(author);
    console.log(title);
    console.log(content);

    var template = '<div id="post-heading">'+
                '<h1>Title</h1>'+
            '</div>'+
            
            '<div id="sub-heading">'+
                '<h2 id="post-author">Author</h2>'+
                '<button id="edit-btn" onclick="editPost()">Edit  <i class="fa fa-edit"></i></button>'+
            '</div>'+

            '<div id="post-content">'+
                '<p>Post content comes here.</p>'+
            '</div>';
}

function editPost() {
    
    document.getElementById('post-heading').setAttribute("contenteditable", "true");
    document.getElementById('post-heading').style.border = "3px solid pink";

    document.getElementById('post-content').setAttribute("contenteditable", "true");
    document.getElementById('post-content').style.border = "3px solid pink";

    document.getElementById('edit-btn').innerHTML = "Save " + "<i class='fa fa-save'></i>";
    document.getElementById('edit-btn').setAttribute('onclick', 'savePost()');
}

function savePost() {
    
    document.getElementById('post-heading').setAttribute("contenteditable", "false");
    document.getElementById('post-heading').style.border = "none";

    document.getElementById('post-content').setAttribute("contenteditable", "false");
    document.getElementById('post-content').style.border = "none";

    document.getElementById('edit-btn').innerHTML = "Edit " + "<i class='fa fa-edit'></i>";
    document.getElementById('edit-btn').setAttribute('onclick', 'editPost()');
}

var numLikes = 0;
function likePost() {
    numLikes++;

    if(numLikes==1) {
        document.getElementById('like-counter').innerHTML = "1 person likes this!";
    }
    if(numLikes>1) {
        document.getElementById('like-counter').innerHTML = numLikes + " people like this!";
    }
}

function addComment(id) {
    var commentInputField = document.getElementById(id);
    var newComment = '<p class="new-comment">' + commentInputField.value + '</p>';
    
    document.getElementById('comment-list').innerHTML = newComment + document.getElementById('comment-list').innerHTML;

    commentInputField.value = "";
}