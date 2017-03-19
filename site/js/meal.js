var calorie;
var price;

class Meals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calorie: 0,
      price: 0,
	  recipes: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

     
	var calorie = this.state.calorie;
	var price = this.state.price;
     
	 
	$.ajax({
      url: "/meals", // change this url to the url being sent to 
      dataType: 'json',
      type: 'POST',
      data: {calorie , price}, // array of information
      success: function(data) {
        this.setState({recipes: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
     });
	 
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
	<div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Calorie:
          <input
            name="calorie"
            type="number"
            ref="calorie"
            value={this.state.calorie}
            onChange={this.handleInputChange} />
        </label>
        <br /><br/>
        <label>
          Price:
          <input
            name="price"
            type="number"
            ref="price"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
	  <div id="results">
	  {
		  this.state.recipes.map(recipe => <div key={recipe.id}>Recipe: {recipe.text}</div>)
	  }
	  </div>
	 </div>
    );
  }
}

ReactDOM.render(
  <Meals />,
  document.getElementById('root')
);
