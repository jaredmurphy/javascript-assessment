// create Comment class here
class Comment {
  constructor(comment, imageId) {
    this.commentContent = comment;
    this.imageId = imageId;
    this.id = Comment.all.length;
    this.findImage = this.findImage(this.imageId);
    Comment.all.push(this);
  }

  findImage(imageId) {
    const image = Image.all[imageId];
    image.comments.push(this);
    return image;
  }

  commentEl() {
    return `<li id='comment-${this.id}'>${this.commentContent}</li>`;
  }
}

Comment.all = [];
