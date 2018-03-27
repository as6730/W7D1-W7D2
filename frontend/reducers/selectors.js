const allTodos = ({state}) => {
  const keys = Object.keys(state.todos);

  const todos = keys.map(todoKey => {
    const todosResult = [];
    todosResult[todoKey.key] = todoKey.value;
    return todosResult;
  });
};

export default allTodos;
