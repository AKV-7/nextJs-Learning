import { EditTask } from '@/utils/actions';
import React from 'react'

const EditForm = ({task}) => {

    const {id, content ,completed} = task;
    console.log(task);

  return (
 <form action={EditTask}
 className=" max-w-sm p-12 border border-base-300 rounded-md">

    <input type="hidden" name= "id" value={id}/>
    <input type="text" name= "content" value={content} required className="input input-border w-full"/>



 </form>
 
  )
}

export default EditForm
