import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';

class SearchGithub extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        this.router = this.props.router;
    }
    handleSubmit() {
        var username = this.usernameRef.value;
        this.usernameRef.value = '';
        this.router.push("/profile/" + username);
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={node => {this.usernameRef= node}}/>
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        );
    }
}

SearchGithub = withRouter(SearchGithub);

export default SearchGithub;