this.setState({
  addressInfo: {
    ...this.state.addressInfo,
    city: 'New York City'
  }
});

handleClick = () => {
  this.setState({
    hasBeenClicked: true
  })
  console.log(this.state.hasBeenClicked); // prints false
}
