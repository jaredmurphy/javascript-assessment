// create Comment class here
class Comment {
  // should initialize with an id, image object (findImage) and
  // commentContent (the actual text of the comment)
  // should save new comment to Comment.all property
  constructor(comment, imageId) {
    this.commentContent = comment;
    this.imageId = imageId;
    this.id = Comment.all.length;
    this.findImage = this.findImage(this.imageId);
    Comment.all.push(this);
  }

  // given an int for an image id, returns the image object with that id
  // before return - adds current comment to image's comments property
  findImage(imageId) {
    const image = Image.all[imageId];
    image.comments.push(this);
    return image;
  }

  // returns a string of html
  // html has an li tag with an id field and shows the comment
  commentEl() {
    return `<li id='${this.id}'>${this.commentContent}</li>`;
  }
}

// should return all of the comment objects in an array
// a property of the Comment class
Comment.all = [];

