export function selectProject(project) {
    //selectBook is an ActionCreater, it needs to return an action
    //an object with a type property
    return{
        type: 'PROJECT_SELECTED',
        payload: project
    }
}