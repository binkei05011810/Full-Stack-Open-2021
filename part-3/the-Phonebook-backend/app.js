const express = require('express');
const date = require('date-and-time');
const cors = require('cors');
const morgan = require('morgan');
const { urlencoded } = require('express');

//Create app
const app = express();

let persons = [
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    },
    {
        name: "Henry Wozniak",
        number: "39-23-6423123",
        id: 5
    },
    {
        name: "Melina Hiuu",
        number: "39-23-6423142",
        id: 7
    },
    {
        name: "Fiona Fiara",
        number: "39-23-6423442",
        id: 8
    },
    {
        name: "Leny Revo",
        number: "39-23-6423122",
        id: 9
    }
]

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

//Get json phonebook
app.get('/api/persons', (req, res) => {
    res.json(persons);
})


app.get('/info', (req, res) => {
    const reqDate = `${date.format(new Date(), 'ddd MMM D Y HH:mm:ss [GMT]Z')} (Eastern Europe Standard Time)`;
    res.send(`<p>Phonebook has info for ${persons.length}</p>
   <p>${reqDate}</p>`);
})

app.get('/api/persons/:id', (req, res) => {
    const { id } = req.params;
    const person = persons.find(person => person.id === Number(id));
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
})

//Delete
app.delete('/api/persons/:id', (req, res) => {
    const { id } = req.params;
    const delPerson = persons.find(person => person.id === person);
    persons = persons.filter(person => person.id !== Number(id));
    res.json(delPerson);
})

const generateRandomNum = () => {
    return Math.floor(Math.random() * 5000)
}

//Add people to phonebook
app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;

    if (name && number) {
        if (persons.find(person => person.name === name)) {
            return res.status(400).json({ error: 'name must be unique' });
        }
        const newPerson = { name, number, id: generateRandomNum() }
        persons.push(newPerson);
        console.log(newPerson);
        res.json(newPerson);
    } else {
        return res.status(400).json({ error: "The name or number is missing" })
    }
})

//App listen on port 3000
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
});
