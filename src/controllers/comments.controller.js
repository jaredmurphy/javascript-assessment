class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  // iterates through each comment form and adds an eventlistener
  // to trigger a function on form submit
  // function should grab the imageId + comment and create a new
  // Comment with those arguments
  // execute the render function on that found image object to
  // append the new comment
  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.on('submit', event => {
      event.preventDefault();

      const $form = $(event.target);
      const $input =  $form.children('input.user-text');
      const comment = $input.val();
      const imageId = $form.parent()[0].dataset.id;

      $input.val('');
      this.render(comment, imageId);
    });
  }

  // selects the appropriate ul for this comment to be added to
  // appends the new comment element to this ul
  // Don't try to copy the ImagesController.render function because
  // that is implemented differently
  render(comment, imageId){
    const $ul = $(`#image-${imageId} ul`);
    $ul.append(`<li>${comment}</li>`);
  }
}
