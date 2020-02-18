import sendPost from "../util/sendPostReq"

export const APPOINTMENTS_FOUND = "APPOINTMENTS_FOUND"
export const NO_APPOINTMENTS_FOUND = "NO_APPOINTMENTS_FOUND"
export const GENERIC = "GENERIC"

export const fetchAppointments = (customerDetails) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("fetchAppointments", {date: customerDetails}, state().auth.token, state().auth.refreshToken)
            if (response.data.success) return dispatch({ type: APPOINTMENTS_FOUND, appointments: response.data.appointments })

        }

        catch (error) {

            if (error.response.status === 404) return dispatch({ type: NO_APPOINTMENTS_FOUND })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}
