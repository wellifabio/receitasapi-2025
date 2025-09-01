const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (req, res) => {
    const receitas = await prisma.receita.findMany();
    res.json(receitas);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const receita = await prisma.receita.findUnique({
        where: { id: Number(id) }
    });
    res.json(receita);
};

const post = async (req, res) => {
    try {
        const receita = await prisma.receita.create({
            data: req.body
        });
        res.status(201).json(receita);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Verifique os dados enviados' });
    }
};


const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const receita = await prisma.receita.update({
            where: { id: Number(id) },
            data: req.body
        });
        res.status(202).json(receita);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Verifique os dados enviados' });
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.receita.delete({
            where: { id: Number(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Verifique os dados enviados' });
    }
};

module.exports = {
    getAll,
    getById,
    post,
    updateById,
    deleteById
};