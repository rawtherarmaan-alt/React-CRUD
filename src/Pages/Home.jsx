import React,{useState,useEffect,useCallback} from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { NavLink } from "react-router";

const HOST ="https://node-crud-api-0n4d.onrender.com";

function Home(props){
    const [users,setUsers] = useState([])

    //callback useCallback(function[dependency])
    const getUserInfo = useCallback(async function(){
        await axios.get(`${HOST}/api/user`)
        .then(res => {
            //response
            console.log(`output=`,res)
            setUsers(res?.data.users);//store the data into state
        })
        .catch(err => {
            toast.error(err?.response.data.msg)
        })
    },[])

    //effect -LifeCycle
    useEffect(function(){
        getUserInfo()//execution
    },[])
   

    //delete user
    const deleteHandler = async (id) => {
        try{
            if(window.confirm(`Are you sure to delete user?`)){
                await axios.delete(`${HOST}/api/user/delete/${id}`)
                .then(res =>{
                    toast.success(res?.data.msg)
                    getUserInfo()
                })
                .catch(err => {
                    toast.error(err?.response.data.msg)
                })
            }
        }catch(err){
            toast.error(err?.message)
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-6 text-success">User</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>IsActive</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map(function(val,index){
                                    return(
                                        <tr key={index}>
                                            <td>{val?.name}</td>
                                            <td>{val?.email}</td>
                                            <td>{val?.mobile}</td>
                                            <td>{val.isActive ? "Active":"IsActive"}</td>
                                            <td>
                                                <NavLink to={`/edit/${val?._id}`} className={"btn btn-info btn-sm me-3"}>Edit</NavLink>
                                                <button onClick={() =>deleteHandler(val?._id)} className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home