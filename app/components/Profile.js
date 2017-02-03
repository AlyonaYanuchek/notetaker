import React, {Component} from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';
import getGithubInfo from '../utils/helpers';

const base =  Rebase.createClass({
    apiKey: "AIzaSyCXt75XVW6g__Wm_z9u6y2hT04LmG1YZjU",
    authDomain: "https://notetaker-eedca.firebaseapp.com",
    databaseURL: "https://notetaker-eedca.firebaseio.com/"
});

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }

    componentDidMount() {

        this.init(this.props.params.username);
    }

    handleAddNote(newNote) {
        this.setState({
            notes: this.state.notes.concat([newNote])
        })
    }

    componentWillReceiveProps(nextProps) {
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    }

    init(username) {
        this.ref = base.syncState(username, {
            context: this,
            state: 'notes',
            asArray: true
        });
        getGithubInfo(username).then(
            function (data) {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render() {
        const {username} = this.props.params;
        const {bio, repos, notes} = this.state;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={notes}
                        addNote={() => this.handleAddNote}
                    />
                </div>
            </div>
        )
    }
}

export default Profile;