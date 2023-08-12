const validateTodo = (req, res, next) => {
    const body = req.body;

    if (!body.id) {
        return res.status(400).json({ error: 'Id is required' });
    }
    if (!body.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const content = body.content || '';
    const completed = body.completed || false;

    req.validatedTodo = {
        id: body.id,
        title: body.title,
        content: content,
        completed: completed
    };

    next();
};

module.exports = validateTodo;