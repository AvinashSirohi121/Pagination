import React from 'react'

const Profile = ({formData, handleFormData,errors}) => {
  return (
    <>
    <div>Profile</div>
    <div className='p-3'>

        <div className=' flex flex-col '>
        <label className='text-sm text-gray-800' htmlFor={formData?.name} >Name</label>
        <input id="name" className='border-2 border-black w-[200px] p-2' type="text" placeholder="Enter Name" value={formData.name}
        onChange={(e)=>handleFormData(e)} />
        {errors?.name && <span className='text-xs text-red-600'>{errors?.name}</span>}
        </div>

        <div className=' flex flex-col '>
        <label className='text-sm text-gray-800' htmlFor={formData?.age} >Age</label>
        <input id="age" className='border-2 border-black w-[200px] p-2' type="number" placeholder="Enter Age" value={formData.age}  onChange={(e)=>handleFormData(e)}/>
        {errors?.age && <span className='text-xs text-red-600'>{errors?.age}</span>}
        </div>

        <div className=' flex flex-col '>
        <label className='text-sm text-gray-800' htmlFor={formData?.email} >Email</label>
        <input id="email" className='border-2 border-black w-[200px] p-2' type="email" placeholder="Enter Email" value={formData.email}  onChange={(e)=>handleFormData(e)}/>
        {errors?.email && <span className='text-xs text-red-600'>{errors?.email}</span>}
        </div>

        <div className=' flex flex-col '>
        <label className='text-sm text-gray-800' htmlFor={formData?.gender} >Gender</label>
       <select
       className='w-[200px] border-2'
        value={formData.gender|| ""}
        id="gender"
        onChange={(e)=>handleFormData(e)}>
        <option  value="" disabled>Select Option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        
       </select>
       {errors?.gender && <span className='text-xs text-red-600'>{errors?.gender}</span>}
        </div>
    </div>
    </>
  )
}

export default Profile