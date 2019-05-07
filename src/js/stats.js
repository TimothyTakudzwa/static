
$.ajax({
    url: "https://zb-bot.herokuapp.com/statistics",
    dataType: 'json',
    success: function(data){
        console.log(data["registered_users"]);
        console.log(data["total_transactions"]);
        document.getElementById("total-trans").innerHTML = data["total_transactions"];
        document.getElementById("reg-users").innerHTML = data["registered_users"]
},
error: function(){
    alert("error check url or api key");
}
});