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