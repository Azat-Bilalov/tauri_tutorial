const validateTodo = (req, res, next) => {
    const body = req.body;

    if (!body.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const content = body.content || '';
    const completed = body.completed || false;

    req.validatedTodo = {
        title: body.title,
        content: content,
        completed: completed
    };

    next();
};

module.exports = validateTodo;