import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import axios from 'axios'
import {object, string} from 'yup'
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'


function App() {
  
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const x  = await axios.get("http://localhost:3000/posts").then(({data})=>setPosts(data));
          
        };
        fetchData();
      }, []);

    //-------add post
    const schema = object({
      image: string().required(),
      title: string().required(),
      description: string().required(),
      
    })

    const signUpSchema = object({
      firstName: string().required("First Name is required"),
      lastName: string().required("Last Name is required"),
      email: string().email("invalid Email format").required("Email is required"),
      password: string().required("Password is required").min(6)
  })

    const navigate = useNavigate();
    const [currentId, setCurrentId] = useState("");
    const [addPostForm, setAddPostForm]= useState({image:"", title: "", description:"", id:"", username:""});
    const [editPostForm, setEditPostForm]= useState({image:"", title: "", description:""});
    const [errors, setErrors] = useState({image:null, title: null, description:null})

    
    const [loginForm, setLoginForm]= useState({email:"", password: ""});
    const [loginErrors, setLoginErrors] = useState("")

    const [signUpForm, setSignUpForm]= useState({firstName:"", lastName:"" ,email:"", password: "", gender:"male"});
    const [signUpErrors, setSignUpErrors] = useState({firstName:null, lastName:null ,email:null, password:null})

    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")

    const [loginFullName, setLoginFullName]= useState("")
    const [loginEmail, setLoginEmail]= useState("")

    const signUpHandleChange = (e)=>{
        setSignUpForm ({...signUpForm, [e.target.name] : e.target.value});
        
    }

    const signUpHandleSubmit = (e)=>{
        e.preventDefault();
        console.log(signUpForm);
        setSignUpErrors((prevErr)=>({firstName:null, lastName:null ,email:null, password:null}));

        try {
            const signUpValidation = signUpSchema.validateSync(signUpForm, {abortEarly:false})

            
            createUserWithEmailAndPassword(
                auth, 
                signUpForm.email ,
                signUpForm.password 
            )
            .then(
                (userCredential)=>{
                    console.log(userCredential);
                    addUserToDb();
                    setUserFirstName(signUpForm.firstName)
                    setUserLastName(signUpForm.lastName)
                    navigate('/')
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                }
            )
            
        } catch (error) {
            error.inner.forEach(
                (err)=>{
                    setSignUpErrors( (prevErr)=>({
                        ...prevErr, [err.path]: err.message
                    }))
                }
            )
        }
    }


    
    const loginHandleChange = (e)=>{
        setLoginForm ({...loginForm, [e.target.name] : e.target.value});
    }
    const loginHandleSubmit = (e)=>{
        e.preventDefault();
        setLoginErrors(null);
        
            
            signInWithEmailAndPassword(auth, loginForm.email, loginForm.password )
            .then(
                async(userCredential)=>{
                    console.log(userCredential);
                    console.log(userCredential.user.email);
                        const x  = await axios.get("http://localhost:3000/users").then(({data})=>{
                            // console.log(data);
                            const y = data.filter((e)=>e.email == userCredential.user.email)
                            console.log(y[0].email);
                            
                            setLoginEmail(y[0].email)
                            console.log(y[0].firstname,y[0].lastname);
                            setLoginFullName(y[0].firstname+" "+y[0].lastname);
                            console.log(loginFullName);
                            
                        })
                    navigate('/')
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                    setLoginErrors("access denied")
                }
            )
         

    }


    

    const handleEditImage = (e)=>{
      setEditPostForm ({...editPostForm, image : e.target.value});
    }
    const handleEditTitle = (e)=>{
        setEditPostForm ({...editPostForm, title : e.target.value});
    }
    const handleEditDescription = (e)=>{
        setEditPostForm ({...editPostForm, description : e.target.value});
    }

    const handleChange = (e)=>{
      setAddPostForm ({...addPostForm, [e.target.name] : e.target.value , id:uuid()});
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(addPostForm);
      

      setErrors((prevErr)=>({image:null, title: null, desc:null}));
      try {
          const x = schema.validateSync(addPostForm, {abortEarly:false})
          addPostToDb();
      } catch (error) {
          
          error.inner.forEach(
              (err)=>{
                  setErrors( (prevErr)=>({
                      ...prevErr, [err.path]: err.message
                  }))
              }
          )
      }

  }
  const editHandleSubmit = (e)=>{
    e.preventDefault();
    console.log(editPostForm);
    setErrors((prevErr)=>({image:null, title: null, desc:null}));
    
    try {
        const y = schema.validateSync(editPostForm, {abortEarly:false})
        afterEdit(currentId);
        
    } catch (error) {
        error.inner.forEach(
            (err)=>{
                setErrors( (prevErr)=>({
                    ...prevErr, [err.path]: err.message
                }))
            }
        )
    }

}




const [authUser, setAuthUser] = useState(null)

    useEffect(()=>{
        const listen = onAuthStateChanged(
            auth,
            (user)=>{
                if(user){
                    setAuthUser(user)
                    
                    
                }
                else{
                    setAuthUser(null)
                }
            }
        ) 
        return ()=>{
            listen();
            // getUser();
        }
    },[])



    const handleSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log("user signed out");
        }).catch( (err)=>{
            console.log(err);
        }

        )
    }





  const addPostToDb = async ()=>{
      await axios.post("http://localhost:3000/posts",{
          "id": addPostForm.id,
          "username": loginFullName? loginFullName : userFirstName+" " + userLastName,
          "image": addPostForm.image,
          "title": addPostForm.title,
          "desc": addPostForm.description,
          "useremail": authUser.email
          
      })
      .then(({data})=>{setPosts([data, ...posts]) 
          navigate('/')
          console.log(res)
      })
      .catch(err=> console.log(err))
  }

    //-----------------


    //----------- delete-------

    const handleDelete = async(id) => {
      let newPosts = [...posts]
      newPosts = newPosts.filter((e) => e.id !== id);
      await axios.delete(`http://localhost:3000/posts/${id}`)
      .then(res=>setPosts(newPosts))
      .catch(err=> console.log(err))
     
  };
    //----------------
 
    const handleEdit = async(id) => {
      navigate('/editpost')
      await axios.get(`http://localhost:3000/posts/${id}`)
      .then(({data})=>{
        setCurrentId(data.id);
        setEditPostForm({
          image : data.image, 
          title : data.title, 
          description : data.desc
        })
        
      })
      .catch(err=> console.log(err))
     
  };

  

  const afterEdit = async(id)=>{
    let newPosts = [...posts]
    newPosts = newPosts.filter((e) => e.id !=id);
    console.log(newPosts);
    await axios.patch(`http://localhost:3000/posts/${id}`,
      {
      "image" : editPostForm.image,
      "title": editPostForm.title,
      "desc" : editPostForm.description
    }
    )
    .then(({data})=>{setPosts([ data, ...newPosts]) 
      navigate('/')
      console.log(res)
  })
    .catch(err=> console.log(err))
  }

  const addUserToDb = async ()=>{
    await axios.post("http://localhost:3000/users",{
        "firstName" : signUpForm.firstName,
        "lastName" : signUpForm.lastName,
        "email" : signUpForm.email,
        "password" : signUpForm.password,
        "gender" : signUpForm.gender
    })
    
}


  return (
    <>

    

     
      <Routes>
        <Route path='/' element={<Home 
                                  posts={posts} 
                                  key={posts.id} 
                                  handleDelete={handleDelete}
                                  handleEdit={handleEdit}
                                  firstName={userFirstName}
                                  lastName={userLastName}
                                  loginFullName={loginFullName}
                                  loginEmail={loginEmail}
                                  handleSignOut={handleSignOut}
                                  authUser={authUser}
        />}> </Route>
        <Route path='/login' element={
          <Login
            loginErrors={loginErrors}
            loginHandleChange={loginHandleChange}
            loginHandleSubmit={loginHandleSubmit}
            loginForm={loginForm}
          />}>
        </Route>
        <Route path='/signup' element={
          <SignUp 
            signUpForm={signUpForm}
            signUpErrors = {signUpErrors}
            signUpHandleChange = {signUpHandleChange}
            signUpHandleSubmit = {signUpHandleSubmit}
          />}>

          </Route>
        <Route path='/addpost' element={
          <AddPost 
            posts={posts} 
            key={posts.id}
            handleChange={handleChange}
            navigate={navigate}
            errors={errors}
            addPostForm={addPostForm}
            handleSubmit={handleSubmit}
            schema={schema}

          />}></Route>
        <Route path='/editpost' element={<EditPost
            key={posts.id}
            posts={posts}
            handleEditImage={handleEditImage}
            handleEditTitle={handleEditTitle}
            handleEditDescription={handleEditDescription}
            editHandleSubmit={editHandleSubmit}
            errors={errors}
            schema={schema}
            navigate={navigate}
            editPostForm={editPostForm}
        />}></Route>
      </Routes>

    </>
  )
}

export default App
