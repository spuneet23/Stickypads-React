var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note) {
       $.ajax({
       	url:'https://api.mongolab.com/api/1/databases/stickypads/collections/notes?apiKey=N5sLpX00nL2w90ciQbH6AMdaRGtaiupj',
       	data:JSON.stringify(note),
       	type:'POST',
        contentType:'application/json'
       })
	},

	getNotes: function() {
		$.ajax({
		 url:'https://api.mongolab.com/api/1/databases/stickypads/collections/notes?apiKey=N5sLpX00nL2w90ciQbH6AMdaRGtaiupj',
		 type:'GET',
		 dataType:'json',
         cache:false,
         success:function(data) {
         	console.log(data);
           AppActions.receiveNotes(data);
         }.bind(this),
         error:function(xhr,status,error) {
           console.log(error);
         }.bind(this)

		})
	},

		removeNote: function(noteId) {
		 $.ajax({
       	url:'https://api.mongolab.com/api/1/databases/stickypads/collections/notes/'+noteId+'?apiKey=N5sLpX00nL2w90ciQbH6AMdaRGtaiupj',
       	type:'DELETE',
        async:true,
        timeout:300000,
        success:function(data){
          console.log('Node deleted...');
        }.bind(this),
        error:function(xhr,status,error){
        	console.log(error);
        }.bind(this)
       })
	}
}