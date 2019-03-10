import React from 'react'

class SearchBar extends React.Component{
  state = { term : '' }

  onInputChange = (newTerm) => {
    this.setState({term : newTerm});
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render(){
    return(
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={e => this.onSearchSubmit(e)}>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' 
              onChange={({target : {value}}) => this.onInputChange(value)}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;