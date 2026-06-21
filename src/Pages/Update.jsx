import React, { useState,useEffect } from "react";
import {validationForm} from "../Scripts/Validation";
import {toast} from "react-toastify"
import axios  from "axios";
import { useNavigate,useParams} from "react-router"

const HOST = "https://node-crud-api-0n4d.onrender.com";

//loader component
const Loader = () => {
    return(
        <div className="spinner-border text-success">
       <div className="visually-hidden">Loading...</div>
       </div>
    )
}
const Update = (props) =>{
    //const [state,handler]= userState(value)
    const [name,setName] = useState("")
    const [email,setEmail]= useState("")
    const [mobile,setMobile]= useState("")
    const [loading,setloading]= useState(false)

    //error state
    const[error,setError] = useState({
        nameErr: "",
        emailErr: "",
        mobileErr: ""
    })

    //navigate
    const navigate = useNavigate()
    //to read router parameter
    const params = useParams()

    //reading single user data from an api
    const readUserInfo = async () =>{
        await axios.get(`${HOST}/api/user/single/${params.id}`)
        .then(res => {
            console.log(`single =`,res?.data)
            if(res?.data.user){
                setName(res?.data.user.name)
                setEmail(res?.data.user.name)
                setMobile(res?.data.user.name)

            }
        })
        .catch(err =>{
            toast.error(err?.response.data.msg)
        })
    }

    useEffect(() => {
        readUserInfo()
    },[])

    const submitHandler = async (e) =>{
        try{
            e.preventDefault();//to avoid page reload on submit
            let newUser ={
                name:name,
                email:email,
                mobile:mobile
            }

            if(validationForm(newUser,setError)){
                   console.log(`final output=`,newUser)
                   setloading(true)

                   await axios.post(`${HOST}/api/user/Update/${params.id}`,newUser)
                   .then(res => {
                    toast.success(res?.data.msg)
                    setloading(false)
                    navigate(`/`)
                   })
                   .catch(err => {
                    setloading(false)
                    toast.error(err?.response.data?.msg)
                   })
            }else{
                toast.warning("Error in form validation.")
            }
        }catch(err){
            console.error(err.message)
        }
    }

    //clear handler
    const clearHandler = () =>{
        toast.warning("form data cleared")
        setName("")
        setEmail("")
        setMobile("")
    }
    return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-6 text-success ">Update user</h1>
                        <p>{params.id}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="card-title">Add new user</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler} onReset={clearHandler} method="post" >
                                    <div className="form-group md-2">
                                        <label htmlFor="name">Your name</label>
                                        <input type="text" name="name"  value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control"/>
                                        {
                                            error?.nameErr && <span className="text-danger">{error?.nameErr}</span>
                                        }
                                    </div>
            
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" className="form-control" />
                                           {
                                            error?.emailErr && <span className="text-danger">{error?.emailErr}</span>
                                        }
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="mobile">Your Mobile</label>
                                        <input type="number" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} id="mobile"  className="form-control" />
                                          {
                                            error?.mobileErr && <span className="text-danger">{error?.mobileErr}</span>
                                        }
                                    </div>

                                    <div className="form-group mt-2 d-flex justify-content-between  ">
                                        {
                                          loading ? <span>Submiting..<Loader/></span>:
                                          <button type="submit" className="btn btn-success">Update User</button>
                                        }
                                        <input type="reset" value="Clear" className="btn btn-warning" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default  Update