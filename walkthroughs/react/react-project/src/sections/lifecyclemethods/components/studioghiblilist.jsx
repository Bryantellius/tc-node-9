import { Component } from "react";
import { getData } from "../../helpers/data";

class SGList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
      category: "films",
    };
  }

  async getList() {
    let list = await getData(this.state.category);
    this.setState({ list, isLoading: false });
  }

  onCategoryChange(category) {
    this.setState({ category });
  }

  componentDidMount() {
    // get data
    this.getList();
  }

  componentDidUpdate(_, prevState) {
    console.log(_, prevState.category, this.state.category);
    if (this.state.category != prevState.category) this.getList();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <select
            name="category"
            id="category"
            value={this.state.category}
            onChange={(event) => this.onCategoryChange(event.target.value)}
          >
            <option value="films">Films</option>
            <option value="people">People</option>
            <option value="locations">Locations</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
          </select>
          <ul>
            {this.state.list.map((item) => (
              <li key={item.id}>{item.title || item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default SGList;
