import React, {useState, useEffect} from 'react'
import { createUser, updateUser} from './../services/UserService'


const CreateUser = ({onChangeForm, onUpdate, editUser, onCreate }) => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [isCreated, setisCreated] = useState(true); 
    const [id, setId] = useState(''); 
    var user = {}; 
    user.firstName = firstName; 
    user.lastName = lastName; 
    user.email = email; 
    if (!isCreated) user.id = id; 
    useEffect(() => {
        if (editUser.email) {
            setFirstName(editUser.firstName); 
            setLastName(editUser.lastName); 
            setEmail(editUser.email);
            setisCreated(false); 
            setId(editUser.id); 
        }
        
    }, [editUser.email]); 

    onChangeForm = (e) => {
        if (e.target.name == "firstname") 
            setFirstName(e.target.value);
        else if (e.target.name == "lastname")
            setLastName(e.target.value);
        else if (e.target.name == "email")
            setEmail(e.target.value);
        user = {
            firstName: firstName, 
            lastName: lastName, 
            email: email,
            id: id, 
        }
    }
    const handleUpdate = async () => {
        const res = await updateUser(user);
        if (res) {
            onUpdate();
            alert("Updated"); 
            setFirstName(""); 
            setLastName(""); 
            setEmail(""); 
        }
    }
    const handleCreate = async () => {
        const res = await createUser(user);
        if (res) {
            onCreate();
            alert("A new data is added"); 
            setFirstName(""); 
            setLastName(""); 
            setEmail(""); 
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" 
                            onChange={onChangeForm}  className="form-control" 
                            name="firstname" id="firstname" 
                            aria-describedby="emailHelp" placeholder="First Name" value={firstName}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={onChangeForm} className="form-control" name="lastname" id="lastname" placeholder="Last Name" value={lastName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={onChangeForm} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" value={email}/>
                        </div>
                    </div>
                    <button type="button" onClick= {handleCreate} className="btn btn-danger" disabled = { isCreated ? "" : true }>Create</button>
                    <button type="button" onClick= {handleUpdate} className="btn btn-danger" disabled = { isCreated ? true : "" }>Update</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser