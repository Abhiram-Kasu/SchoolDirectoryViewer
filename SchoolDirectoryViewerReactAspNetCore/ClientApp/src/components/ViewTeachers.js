import React, { Component } from 'react';



const URL = "https://localhost:7047";




export class ViewTeachers extends Component {



    static displayName = ViewTeachers.name;
    constructor(props) {
        super(props);
        this.state = { teachers : [], loading : true};

    }


    static renderAllTeachers(allteachers) {
        console.log(allteachers);
        return (
            <table className="table">
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Phone Number</th>
                        <th>Room Number</th>
                    </tr>
                </thead>
                <tbody>
                    {allteachers.map(teacher => {
                        if (teacher == null)
                            return null;
                        else {
                            return (<tr key={teacher.name}>
                                <td><div>
                                    <img alt="No Picture" className="rounded-circle m-2" src={teacher.profilePicture} height={50} width={50} ></img>{teacher.name}

                                </div>
                                </td>
                                <td>{teacher.email}</td>
                                <td>{teacher.department}</td>
                                <td>{teacher.phoneNumber}</td>
                                <td>{teacher.roomNumber}</td>
                            </tr>)
                        }
                       
                    })}
                </tbody>



            </table>
            )
    }

    async componentDidMount() {
        
        await this.populateTeachers();
    }

    render() {
        return this.state.loading ? <p><strong>Loading...</strong></p> : (
            <div>
                <p><em>Teachers Recieved: {this.state.teachers.length}</em></p>
                {ViewTeachers.renderAllTeachers(this.state.teachers)}
            </div>
            
        )
    }


     async populateTeachers() {

        
         
         const response = await fetch(URL + "/api/teachers")
         const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
         let temp = [];
         while (true) {
             const { value, done } = await reader.read();
             if (done) break;

             const changedValue = value.substring(1).replace('[', '').replace(']', '');
             let ob;
             try {
                 ob = JSON.parse(changedValue)
             } catch (e) {
                 console.log("Error with given json: " + changedValue);
             }
             temp.push(ob);
             this.setState({ teachers: temp, loading: false });
             console.log('Received', changedValue);
         }

         console.log('Response fully received');
        

    }
} fetch(URL + "/api/teachers")