import React, { PropTypes, Component } from 'react';

class AddNote extends Component {
    handleSubmit() {
        let newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    };

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add New Note" ref={this.note}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => this.handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;