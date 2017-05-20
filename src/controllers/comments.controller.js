class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();

    const $form = $(event.target);
    const $input =  $form.children('input.user-text');
    const comment = $input.val();
    const imageId = $form.parent()[0].dataset.id;
    const newComment = new Comment(comment, imageId);

    $input.val('');
    this.render(newComment);
  }

  render(newComment) {
    const $ul = $(`#image-${newComment.findImage.id} ul`);
    const htmlString = newComment.commentEl();
    $ul.append(htmlString);
  }
}
