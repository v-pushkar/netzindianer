import React, { PureComponent } from "react";
import RSSParser from "rss-parser";
import RssList from "./_rsslist";
import "./Rssblock.scss";

class Rssblock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      hasError: false,
      rssobj: null,
    };
  }

  componentWillMount = () => {
    console.log("RsSblock will mount");
  };

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    let url = this.props.rssurl;
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

    const psrsDataToState = (data) => {
      this.setState({
        rssobj: data,
        loading: false,
      });
    };
    let parser = new RSSParser();
    parser.parseURL(CORS_PROXY + url, function (err, feed) {
      if (err) {
        throw err;
      }
      console.log("Feed : ", feed)
      psrsDataToState(feed);
    });
  };



  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    } else if (this.state.loading) {
      return <h3>loading RSS...</h3>;
    } else
      return (
        <div className="Rssblock-wrap">
          <div className="container-lg">
          <div class="alert alert-success" role="alert">
 <h2>RSS list</h2>
</div>
            {this.state.rssobj ? (
              <RssList data={this.state.rssobj.items}></RssList>
            ) : null}
          </div>
        </div>
      );
  }
}

export default Rssblock;
