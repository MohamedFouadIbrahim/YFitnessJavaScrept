import Axios from 'axios';

export const HowIsMe = (token, onSuccess, onFailure) => {
    Axios.get(`${MainUrl}/Api/Gyms/me`, { headers: { Authorization: token } })
        .then((value) => {
            if (value.data.Age && value.data.Email !== 'yfitness@yfitness.com') {
                onSuccess && onSuccess('User')
                return
            } else if (value.data.Email == 'yfitness@yfitness.com') {
                onSuccess && onSuccess('Admin')
                return
            }
            else {
                onSuccess && onSuccess('Gym')
            }
        })
        .catch(() => {
            onFailure && onFailure()
        })
}