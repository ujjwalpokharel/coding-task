import React,{useState} from 'react'
import'./Form.css'

const FormInput = () => {
    const[Inputs,setInputs]=useState({
        Name:"",
        Email:"",
        PhoneNumber:"",
        DOB:"",
        City:"",
         District:"",
         Province:"",
         Country:"Nepal"
    });
    const[Records,setRecords]=useState([]);

    const handler=(e) => {
          const name=e.target.name;
          const value=e.target.value;
          setInputs({...Inputs,[name]:value})
    }
    const handleSubmit= (e) => {
     e.preventDefault();
     const storedata = {...Inputs,id:new Date().getTime().toString()}
     setRecords([...Records,storedata]);
     console.log(Records)
     setInputs({ 
     Name:"",
     Email:"",
     PhoneNumber:"",
     DOB:"",
     District:"",
    City:"",
     Province:"",
     Country:"Nepal"});
    }
    
     return (
    <>
    <div className="form">
    
    <form onSubmit={handleSubmit}>
        <label >
            Name
            <input 
                type="text"
                autoComplete='off'
                placeholder='Name'
                value={Inputs.Name }
                onChange={handler } 
                name="Name"/>
        </label>
        
   
        
    
        <label >
                Email
            <input 
                    type="text"
                    autoComplete='off'
                    placeholder='Email'
                    value={Inputs.Email}
                    onChange={handler }
                    name="Email" />
        </label>
        
    

    
        <label >
            PhoneNumber
            <input 
                    type="number"
                    autoComplete='off'
                    placeholder='PhoneNumber'
                    value={Inputs.PhoneNumber}
                    onChange={handler }
                    name="PhoneNumber" />
        </label>
        
        <label >
            DOB
            <input 
                    type="date"
                    autoComplete='off'
                    placeholder='Date of Birth'
                    value={Inputs.DOB}
                    onChange={handler }
                    name="DOB" />
        </label>
         
        <label >
            Address
            City
            <input 
                    type="text"
                    autoComplete='off'
                    placeholder='City'
                    value={Inputs.City}
                    onChange={handler }
                    name="City" />
            
        </label>
        <label >
        District
            <input 
                    type="text"
                    autoComplete='off'
                    placeholder='District'
                    value={Inputs.District}
                    onChange={handler }
                    name="District" />
            
        </label>
         <label >
            Province

            <select >
            <option value="Province no .1"  >Province no .1</option>
            <option value="Province no .2">Province no .2</option>
             <option value="Bagmati pradesh">Bagmati pradesh</option>
            <option value="Gandaki Pradesh">Gandaki Pradesh</option>
            <option value="Province No. 5">Province No. 5</option>
            <option value="Karnali Pradesh">Karnali Pradesh</option>
            <option value="Sudurpashchim Pradesh">Sudurpashchim Pradesh</option>
            
             </select>
           
        </label>
        <label >
            Country
            <input 
                    type="text"
                    autoComplete='off'
                    value={Inputs.Country}
                    onChange={handler }
                    name="Country" />
           
        </label>


        <input type="submit" className="submit"/>
    </form>
   
    </div>
     <div className='tablestyle'>
        
       <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>DOB</th>
            <th>District</th>
            <th>City</th>
            <th>Country</th>
            </tr>
       

        { Records.map((curvalue) => {
            return(
                    <tr>
                 <td>{curvalue.Name}</td>
                 <td>{curvalue.Email}</td>
                 <td>{curvalue.PhoneNumber}</td>
                 <td>{curvalue.DOB}</td>
                 <td>{curvalue.District}</td>
                 <td>{curvalue.City}</td>
                 <td>{curvalue.Country}</td>

                    </tr>)

        }) }
        </table>
     </div>
     </>
  )
}

export default FormInput;