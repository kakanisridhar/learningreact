As you can see in TodoList redux toolkit takes an object of reducers and returns actions, reducers
the code in todolist also follows the patterns of container and presentation components

for async processing - use createAsyncThunk and describe aync function along with extra reducers feature to configure what will happen when thunks get fulfiled, aborted, errorred