import EditForm from '@/app/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

const SingleTodoPage = async ({params}) => {
    
  console.log(params);
  
    const task = await getTask(params.id);

    return (
      <>
        <div className="mb-16">
          <Link href="/todo-list" className="btn btn-accent">
            Back
          </Link>
        </div>
          <EditForm task={task} />
      </>
    );
}

export default SingleTodoPage
