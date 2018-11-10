import React, {Component} from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
class Users extends Component {


    constructor(props) {
        super(props);
            this.state = {
                names: [
                    'Anna',
                    'Marta',
                    'Kasia',
                    "Jakub",
"Jan",
"Szymon",
"Franciszek",
"Filip",
"Aleksander",
"Mikołaj",
"Wojciech",
"Kacper",
"Adam",
"Michał",
"Marcel",
"Stanisław",
"Wiktor",
"Piotr",
"Igor",
"Leon"

                ]
            }
           //this.addName = this.addName.bind(this); 
    }

    addName = (name)  => {

        // let currentNames = this.state.names;


        //     currentNames.push(name);


        //     this.setState({
        //         names: currentNames
        //     });
        //     console.log(currentNames);

        this.setState( (prevState) => {
            return({
                names: prevState.names.concat([name])
            })
        });

            console.log(this.state.names);
    }

    deleteName = (key) => {
        console.log(key);

        this.setState( (prevState) => {
            prevState.names.splice(key,1);
            return({
                names: prevState.names
            })
        });
    }


    


render() {
    return(<div className="users">
    <h1>User Form</h1>
        <UserForm addName = {this.addName}/>
        <UserList names = {this.state.names} deleteName = {this.deleteName}/>
    </div>)
}
}
export default Users;