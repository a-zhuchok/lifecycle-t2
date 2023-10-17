import React from 'react'
import LifecycleFunctionComponent from './LifecycleFunctionComponent';

class LifecycleComponent extends React.Component {
  constructor (props) {
      super (props);
      this.state = {
          count:0,
      }
  }
  increment = () => {
      this.setState({ count: this.state.count + 1 })}

  async componentDidMount () {
      let response = await fetch ('https://todo-redev.herokuapp.com/api-docs/')
        if(response.ok===true) {console.log('componentDidMount')}
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