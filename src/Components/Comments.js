import React from 'react'
import {commentList} from "../Data"
function Comments() {
    return (
        <div className="row d-flex justify-content-center "id="comment">
            {commentList.map(el => 
                <div classeName="card p-3">
                <div classeName="d-flex justify-content-between align-items-center">
                    <div classeName="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/hczKIze.jpg" width="30" classeName="user-img rounded-circle mr-2" alt="taswira" /> <span><small classeName="font-weight-bold text-primary"><b>{el.name}</b></small> <small>{el.period +" ago"}</small><br /><small classeName="font-weight-bold">{el.body}</small></span> </div> 
                </div>
                <div id="mini"><i class="fas fa-thumbs-up"> {" " +el.like}</i>  <i class="fas fa-thumbs-down"></i> <i class="fas fa-reply">Reply</i></div>
                <br />
            </div>
            )}
        </div>
    )
}

export default Comments