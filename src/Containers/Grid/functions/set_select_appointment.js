const set_selected_appointment = (currentSelectedAppointment, appointment, dispatch, dispatch_set_selected_appointment, rescheduleMode) => {

    if ((currentSelectedAppointment) && currentSelectedAppointment.id === appointment.id) return dispatch(dispatch_set_selected_appointment(null))

    else return dispatch(dispatch_set_selected_appointment(appointment))

}

export default set_selected_appointment