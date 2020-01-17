import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default : return
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}/>
                <hr />
                <button onClick={()=>this.props.onStore(this.props.ctr)}>Store</button>
                <ul>
                    {this.props.storeResult.map(data=>(
                        <li key={data.id} onClick={()=>this.props.onDelete(data.id)}><strong>{data.value}</strong> Click Me to Delete</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr:state.ctr.counter,
        storeResult:state.res.result
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrement: ()=>dispatch({type:'INC'}),
        onDecrement: ()=>dispatch({type:"DEC"}),
        onAdd: ()=>dispatch({type:"ADD",value:5}),
        onSubtract: ()=>dispatch({type:"SUB",value:5}),
        onStore : (count)=>dispatch({type:'STORE',count:count}),
        onDelete : (id)=>dispatch({type:'DELETE',liid:id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);