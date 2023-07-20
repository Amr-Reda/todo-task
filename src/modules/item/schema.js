module.exports = {

	createItemShema: {
        "id": "POST/items",
        "type": "object",
        "properties": {
            "task": {"type": "string"},
            "description": {"type": "string"},
        },
        "required": ["task"]
    },

	updateItemShema: {
        "id": "POST/items",
        "type": "object",
        "properties": {
            "task": {"type": "string"},
            "description": {"type": "string"},
            "completed": {"type": "boolean"},
        },
    },

};
