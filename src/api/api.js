import axios from 'axios'

axios.defaults.baseURL = 'https://653777a1bb226bb85dd34772.mockapi.io/';

export const getContacts = async () => {
    const {data} = await axios.get('contacts')
    return data
};

export const fetchAddContact = async (contact) => {
    const {data} = await axios.post('contacts', contact)
    return data
};

export const fetchDeleteContact = async (id) => {
    const {data} = await axios.delete(`contacts/${id}`)
    return data
};

