import { useState } from 'react';
import './App.css';
import NewProject from './components/NewProject';
import NoSelectedProject from './components/NoSelectedProject';
import SideBar from './components/SideBar';

function App() {
  const[projectState, setProjectState]=useState({
    selectedProjectId: undefined,
    projects:[]
  })

  function handelStartAddProject (){
    setProjectState((pervState) => {
      return{
        ...pervState,
        selectedProjectId: null
      }
    })
  }

  function handelAddProject(projectData){
    setProjectState((pervState) => {
      const newProject = {
        ...projectData,
        projectId: Math.random()
      }
      return{
        ...pervState,
        selectedProjectId: undefined,
        projects: [...pervState.projects, newProject]
      }
    })
  }

  console.log(projectState.projects);

  let content;
  
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handelAddProject}/>
  }else if (projectState.selectedProjectId === undefined){
    content = <NoSelectedProject onStartAdd={handelStartAddProject}/>
  }

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
      <SideBar onStartAdd={handelStartAddProject}/>
      {content}
      </main>
    </>
  );
}

export default App;
