import axios from 'axios';

const getAll = async () => {
    let res = await axios.get("http://localhost:3001/api/persons");
    return res.data;
}

const create = async (newPerson) => {
    let res = await axios.post("http://localhost:3001/api/persons", newPerson);
    return res.data;
}

const destroy = async (id) => {
    let res = await axios.delete(`http://localhost:3001/api/persons/${id}`);
    return res.data;
}

const replace = async (id, newPerson) => {
    let res = await axios.put(`http://localhost:3001/api/persons/${id}`, newPerson);
    return res.data;
}
export { getAll, create, destroy, replace };