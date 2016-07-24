var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddNoteForm = React.createClass({
    render:function(){
  
        return(
         <div>
           <h5>Add A Note</h5>
             <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <label>Note Text</label>
                  <input className="form-control" type="text" ref="text" placeholder="Enter Text..."/>
                  <br />
                  <button className="btn btn-default">Add</button>
                </div>
              </div>
             </form>
         </div>

        );
    },

    onSubmit : function(e) {
       e.preventDefault();
       
       var note = {
         text:this.refs.text.value.trim()
       }

      AppActions.addNote(note);
    }
});

module.exports = AddNoteForm;