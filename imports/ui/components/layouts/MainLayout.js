import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { connect } from 'react-redux';

class Main extends React.Component {
  render(){
    return (
      <main className="main-container">
        <Header />
          {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default connect()(Main)
