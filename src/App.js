import React from 'react';
import './App.css';

class ContactCard extends React.Component{
  render(){
    return(
      <div className='contactos'>
        <h1> {this.props.name}</h1>
        <h1>{this.props.num}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.work_phone}</h1>

      </div>
    )
    
    

  }

}

function App() {
  return(
    <div className='App'>
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">TTP-Bootcamp</h1>
    <p class="lead">Contact Card Example</p>
  </div>
</div>
      
      <ContactCard name='Tom'
        num='3470789880'
        email='tom@gmail.com'
        work_phone='781093467'      
      />
      <ContactCard name='Shara'
         num='3470948753'
         email="Shara@hotmail.com"
         work_phone='7810988746'
      
      />
      <ContactCard name='Levian'
        num='3470823890'
        email='levian@yahoo.com'
        work_phone='7815644865'
      />
      <ContactCard name='Claudia'
        num='3477676854'
        email='claudia@lc.cuny.edu'
        work_phone='7815672345'
       />
        </div>
      
       
  )
}

export default App;
