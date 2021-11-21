export const getAll = (category = '') => {
    // let queryString = this.props.match.params.category
        // ? category={this.props.match.params.category}
        // : '';

       



        fetch('http://localhost:5000/pets')
        .then(res => res.json())
        .then(res => this.setState({pets: res}))
        


}

export const getOne = (petId) => {
    
}