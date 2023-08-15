const validateTodo = (req, res, next) => {
    const body = req.body;

    let error = {};
    if (!body.id) {
        error.id = "ID is required"
    }
    if (!body.title) {
        error.title = "Title is required"
    }
    if (error.id || error.title) {
        return res.status(400).json({ error })
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