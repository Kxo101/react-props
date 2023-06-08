import React from 'react';

class App extends React.Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://example.com/profile.jpg",
      profession: "Web Developer"
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateTimeSinceMount, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
