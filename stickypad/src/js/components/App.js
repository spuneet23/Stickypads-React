var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddNoteForm = require('./AddNoteForm');
var NoteList = require('./NoteList');

function getAppState() {
    return {
         notes:AppStore.getNotes()
    }
}
var App = React.createClass({
   getInitialState:function(){
       return getAppState();
   },
   componentDidMount:function() {
       AppStore.addChangeListener(this._onChange);
   },
   componentWillUnmount:function() {
   AppStore.removeChangeListener(this._onChange);
   },  
    
    render:function(){
        return(
         <div>
            <div className="col-md-2 sidebar">
             <AddNoteForm />
            </div>
            <div className="col-md-10 main">
              <NoteList notes={this.state.notes} />
            </div>
         </div>

        );
    },
      _onChange: function() {
       this.setState(getAppState());
    }
});

module.exports = App;