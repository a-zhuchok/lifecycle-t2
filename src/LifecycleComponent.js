import React from 'react'
import LifecycleFunctionComponent from './LifecycleFunctionComponent';

class LifecycleComponent extends React.Component {
  constructor (props) {
      super (props);
      this.state = {
          count:0,
      }
      this.increment = this.increment.bind(this)
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 })}

   componentDidMount () {
    const dataFetch =async ()=>{
      let response = await fetch ('https://todo-redev.herokuapp.com/api-docs/')
        if(response.ok===true) {console.log('componentDidMount')} }
        dataFetch() 
      }
  componentDidUpdate () {
      console.log(this.state.count)
      }
  componentWillUnmount (){
      console.log('componentWillUnmount')
      }
  shouldComponentUpdate() {
      if (this.state.count%2!==0){
          return true}
        }
        
  render () {
      return (
          <div>
            <p>Количество: {this.state.count}</p>
            <button onClick={this.increment}>+++</button>
          </div>
        )}
}
export default LifecycleComponent