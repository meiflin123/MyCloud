import React from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class MyCloud extends React.Component {


  

  render() {
    console.log(this.props.data)
    return (
      <div className='container'>
        {this.props.children}
        <div className='inner-container'>

         <TagCloud 
          style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
          }}>
          <div style={{fontSize: 50}}>react</div>
          <div style={{color: 'green'}}>tag</div>
          <div rotate={90}>cloud</div>
        
         </TagCloud>

        </div>
      </div>
    );
  }
}

export default MyCloud;