import React, {useState, useEffect} from 'react'
import { useAuthContext } from '../util/AuthContext'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../util/firebase'
import { signOut } from "firebase/auth";
import { auth } from '../util/firebase';
import { useNavigate, } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Admin() {
   const {currentUser} = useAuthContext()
   const [enquires, setEnquiries] = useState([])
   const navigate = useNavigate()
  

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'enquires'));
      const fetchedEnquiries = [];
      querySnapshot.forEach((doc) => {
        fetchedEnquiries.push(doc.data());
      });

      fetchedEnquiries.sort((a, b) => {
        const timeA = a?.time?.toDate() || 0; // Convert to Date object or use 0 if undefined
        const timeB = b?.time?.toDate() || 0; // Convert to Date object or use 0 if undefined
      
        // Sort in descending order (latest first), adjust the comparison for ascending order if needed
        return timeB - timeA;
      });


      setEnquiries(fetchedEnquiries);
    };

    fetchData();
  }, [currentUser]);

  function timeAgo(createdAtTimestamp) {
    // Convert the createdAt timestamp to a Date object
    const createdAt = new Date(createdAtTimestamp);
  
    // Get the current time
    const now = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = now - createdAt;
  
    // Convert the time difference to seconds
    const seconds = Math.floor(timeDifference / 1000);
  
    // Define time intervals in seconds
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
  
    // Determine the appropriate time unit and value
    if (seconds < minute) {
      return seconds + ' seconds ago';
    } else if (seconds < hour) {
      const minutes = Math.floor(seconds / minute);
      return minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
    } else if (seconds < day) {
      const hours = Math.floor(seconds / hour);
      return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
    } else if (seconds < month) {
      const days = Math.floor(seconds / day);
      return days + ' day' + (days > 1 ? 's' : '') + ' ago';
    } else if (seconds < year) {
      const months = Math.floor(seconds / month);
      return months + ' month' + (months > 1 ? 's' : '') + ' ago';
    } else {
      const years = Math.floor(seconds / year);
      return years + ' year' + (years > 1 ? 's' : '') + ' ago';
    }
  }

async function handleSignOut(){
   await signOut(auth)
   navigate('/')      
        
      
}

  return (
    <>
       <Helmet>
      <title>
        Admin
      </title>
      <meta name= 'description' content='This is for administrative use only'/>
     <link rel= 'canonical' href='/admin' />
    </Helmet>
    
    <div className='w-[100vw]   min-h-[100vh]  mission'>
        <div className='w-[80vw] m-[auto]'>
            
            <h1 className='w-[80vw] flex items-center justify-center  font-[600] text-[45px] mb-[30px]'>ADMIN</h1>
          <div className='flex items-center justify-between'> 
            <h1 className ='font-[500] text-[40px] xs:text-[20px]'>
               
                Welcome {currentUser && currentUser.displayName}
                </h1>
                <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px]  font-[600] ' onClick={() => handleSignOut()}>
                    Logout
                </button>
          </div>

          <div>
            <h3 className='font-[500]  text-[40px] flex w-[80vw] items-center justify-center mt-[40px] underline xs:text-[22px]'>
                 Enquiries
            </h3>
            <div>
            {
            enquires.map((doc) => {
            return(
            
            <div key= {doc?.id} className='text-[30px] p-3 border-b border-gray-300 xs:text-[19px]'>

<p>Name: {doc.firstName} {doc.lastName}</p>
<p>Email: {doc.email}</p>
    {doc.number && <p>
        Phone Number: {doc.number}
    </p> }
    <p>Reason for Enquiry: {doc.enquiry}</p>
    <div className='  flex'> <div>Message:</div> <div className='break-words w-[800px]'>{doc.message}</div></div>
    <p>Time: {timeAgo(doc?.time?.toDate())}</p>


            </div>
            
            )
            
            })
            
            
            }

            </div>
          </div>


        </div>
    </div>
  </>
  )
}
