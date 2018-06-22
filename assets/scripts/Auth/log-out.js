
let logOut = () => {
    $("#log-Out").on("submit", event => {
        let serialization = $("#log-In").serializeArray();
        event.preventDefault();
        $.ajax({
            url:"http://tic-tac-toe.wdibos.com/sign-out",
            method: 'DELETE',
            headers: {
                Authorization: 'Token token=' + store.user.token
            }
        }).then(() => {
            alert("user loged out");
            }).catch(() => {
          console.log("error loging out user");
            
        })
    });
};