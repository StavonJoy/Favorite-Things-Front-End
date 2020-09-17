import React from 'react'
import ListCard from '../../components/ListCard/ListCard'


const Lists = (props) => {
  return ( 
    <>
      <div >
        {props.lists.map(list =>
          <ListCard 
            key={list._id}
            list={list}
            handleDeleteList={props.handleDeleteList}
            user={props.user}
          />
        )}
      </div>
    </>
   );
}

export default Lists;