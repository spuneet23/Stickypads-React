var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note');

var NoteList = React.createClass({
    render:function(){
  
        return(
         <div className="row">
           <div className="col-md-12">
              {
                this.props.notes.map(function(note, i){
                  return <Note note={note} key={i} />
                })
              }
           </div>
         </div>

        );
    }
});

module.exports = NoteList;