const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'Welcome!'});
});

//GET All
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorador', async(req, res) =>{
    const todosExploradores = await prisma.explorador.findMany({});
    res.json(todosExploradores);
});


//GET by id
app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.get('/explorador/:id', async (req, res) =>{
    const id = req.params.id;
    const explorador = await prisma.explorador.findUnique({where: {id: parseInt(id)}});
    res.json(explorador);
})

//Create new explorer
app.post('/explorers', async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
        };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.post('/explorador', async (req, res) =>{
    const explorador = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander, 
        enrollments: req.body.enrollments,
        hasCertifications: req.body.hasCertifications 
    }

    await prisma.explorador.create({data: explorador});

    return res.json({message: "Explorador creado de manera satisfactoria"});
});


//UPDATE Explorer by id
app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })

    return res.json({message: "Actualizado correctamente"});
});

app.put('/explorador/:id', async (req, res) =>{
    const id = parseInt(req.params.id);
    
    await prisma.explorador.update({
        where:{
            id:id
        },
        data:{
            name: req.body.name,
            lang: req.body.lang,
            missionCommander: req.body.missionCommander,
            enrollments: req.body.enrollments,
            hasCertifications: req.body.hasCertifications
        }
    });
    return res.json({message: "Actualizado correctamente"});
})

//DELETE Explorer by id
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.delete('/explorador/:id', async (req, res) =>{
    const id = parseInt(req.params.id);
    await prisma.explorador.delete({where: {id: id}});

    return res.json({message: "Eliminado correctamente"})
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});