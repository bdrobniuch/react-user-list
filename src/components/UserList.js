import React, {Component} from "react";
class UserList extends Component {

     deleteItem(key) {
        this.props.deleteName(key);
    }

    constructor(props) {
        super(props);
        this.filter = React.createRef();
      }



render() {
    return(<div className="user-list">
        <input class ="search" type="text" placeholder="Search" ref={this.filter} onChange={(e)=>{this.setState({ });}}/>
        <ul>
            {
                this.props.names.map((name,i)=> {
                  console.log(name, i);
                  let temp = <li onClick={()=>this.deleteItem(i)}  key={i}>{name}</li>;
                    let temp2;
                    let sv = "";
                    if (this.filter.current!=null) sv = this.filter.current.value;
                    console.log('teeeeeest', sv);
                    if (name.toLowerCase().search(
                        sv.toLowerCase()) !== -1) temp2 = temp;
                  return temp2;
                })
              }
        </ul>
    </div>)
}
}
export default UserList;