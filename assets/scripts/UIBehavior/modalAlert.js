let modalAlert = (message, title) => {
  $('#AlertsModal').remove();
  
  $('body').append( /*html*/ `
    <div class="modal fade" id="AlertsModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
  
        <div class="modal-header">
          <h4 class="modal-title">${title}</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <div class="modal-body">
          ${message}
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `)
  $("#AlertsModal").modal('show');
}

export default modalAlert;
