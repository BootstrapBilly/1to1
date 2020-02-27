import React from "react"

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const confirmDelete = (currentSelectedAppointment, dispatchDelete) => {

    return confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <h1>Are you sure?</h1>
              <p>Delete this appointment?</p>

            <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>

            <button onClick={onClose}>NO</button>
              <button test-handle="yes-button"
                onClick={() => {

                dispatchDelete()
                  onClose();
                }}
              >
                YES
              </button>

            </div>

            </div>
          );
        }
      });

}