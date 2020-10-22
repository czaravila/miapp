import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Julio´s App',
      act: 0,
      index: '',
      datas:[]
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let km = this.refs.km.value;

    if(km > 4){
      alert("Felicidades!")
      let data = {
        name, email, km
      }
  
      datas.push(data);
    }else{ alert('Necesitas Caminar Mas!!')}

    this.setState({
      data: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Nombre" className="formField"/>
          <input type="text" ref="email" placeholder="Email" className="formField"/>
          <input type="number" ref="km" placeholder="Km" className="formField"/>
          <button onClick={this.fSubmit} className="myButton">Enviar</button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}.{data.name},{data.email},{data.km}
              <button onClick={()=>this.fRemove(i)} className="myButton2">eliminar</button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;
