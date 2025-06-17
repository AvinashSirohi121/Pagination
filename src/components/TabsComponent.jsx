import React, { useState,} from 'react'
import { tab } from '../config/Tabs'
import { validations } from '../config/Validations';
const TabsComponent = () => {
    const [activeTab,setActiveTab] = useState(0);
    const [errors,setErrors]= useState({});
    const  ActivetabComponent=tab[activeTab].component
    const activeTabName = tab[activeTab].name;

    const [formData,setFormData] = useState({
        name:"",
        age:18,
        gender:null,
        email:"",
        language:null,
        theme:"light",
        interests:[],
        condingLanguage:[]

    })

    const handleFormData =(e)=>{
        const {id,value}= e.target;
        console.log("E =>",e)
        console.log("Field =>",id," , Value =>",value)
        setFormData((prevData)=>({
            ...prevData,
            [id]: value.trim(),
        }))

        let error = validations({...formData,[id]:value},activeTabName)
       console.log("Error =>",error)
        setErrors(error)

    }

    const handleTabClick =(index)=>{
        
         let error =validations(formData,activeTabName)
         Object.keys(error).length <=0? (setActiveTab(index), setErrors({})) :setErrors(error)          
    }

    const handleNext =()=>handleTabClick(activeTab+1);
    const handlePrev =()=>setActiveTab((prev)=>prev-1);



    
   

  return (
    <div>
        <div className='flex gap-4 p-3 border-2 '>
        {tab && tab.length> 0 &&
        tab.map((t,index)=>(
            <div key={index} 
                
                className={`${index==activeTab ? "bg-blue-600": "bg-blue-400"} p-2 text-2xl text-white cursor-pointer`}
                onClick={()=>handleTabClick(index)}>{t.name}</div>
        ))}
        </div>

        <div className='p-3 h-auto border-2 '>
            <ActivetabComponent 
            formData={formData} setFormData={setFormData}
             handleFormData={ handleFormData} errors={errors}/>


            <div className='flex gap-3 mt-5'>
            {activeTab !=0 &&
                <button  
                className='bg-gray-200 p-2 '
               
                onClick={()=> handlePrev()}>Prev</button>}
            {activeTab != tab.length-1 && 
            <button 
                className='bg-gray-200 p-2 '
                 
            onClick={()=>handleNext()}>Next</button> }
            </div>
            {activeTabName=="Settings" &&
           <button className='bg-green-300 p-2 flex justify-center items-center  mt-4'>Sumbit</button> }
        </div>
    </div>
  )
}

export default TabsComponent