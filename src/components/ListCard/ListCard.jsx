import React from 'react';
import { Link } from 'react-router-dom'

function ListCard({ user, list, handleDeleteList }) {
  return (
      <>
          <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                  <img alt="list" className="activator" src={list.image ? list.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
              </div>
              <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{list.name}<i className="material-icons right">more_vert</i></span>
                  <ul>
                    <li>{list.item1}</li>
                    <li>{list.item2}</li>
                    <li>{list.item3}</li>
                  </ul>
              </div>
              <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{list.name}<i className="material-icons right">close</i></span>
                  <div>Item:  {list.item1}</div>
                  <div>Item:  {list.item2}</div>
                  <div>Item:  {list.item3}</div>
                  <div className='panel-footer'>
                    <Link
                      className='btn btn-xs btn-warning'
                      to={{
                        pathname: '/edit',
                        state: {list}
                      }}
                    >
                    EDIT
                    </Link>
                    <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteList(list._id)}
                    >
                    DELETE
                    </button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ListCard;