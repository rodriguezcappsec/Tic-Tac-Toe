let changePassModal = () => {
  $('body').append( /*html*/ `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">Change Password</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="change-password" >
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Old Password:</label>
                <input type="password" name="passwords[old]" class="form-control" id="oldPass" placeholder="Old Password">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">New Password:</label>
                <input type="password" name="passwords[new]" class="form-control" id="newPass" placeholder="New Password">
              </div>
              <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="closeModal" data-dismiss="modal">Close</button>
            <button id="changePassword" type="submit" class="btn btn-primary">Change Password</button>
              </div>
          </form>
        </div>
      </div>
    </div>
    `)
}

export default changePassModal;
