import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/container.module.css'
import ProjectElement from "./skillElement/ProjectElement";
import styleWrapper from "../common/styles/wrapper.module.css";

type ProjectType = {
    img: string,
    title: string,
    description: string
}
function Projects() {
    const projectsArray: Array<ProjectType> = [
        {img: '', title: 'Project', description: 'something'},
        {img: '', title: 'TodoList', description: 'something'},
        {img: '', title: 'Social Network', description: 'something'},
    ]
    const projects = projectsArray.map(p =>
        <ProjectElement key={p.title} img={p.img} title={p.title} description={p.description}/>)

    return <div className={`${s.projectsBlock} ${styleWrapper.wrapper}`} id={'projects'}>
        <div className={`${styleContainer.container} ${s.container}`}>
            <div>
                <h2>My projects</h2>
            </div>
            <div className={s.projects}>
                {projects}
            </div>
        </div>
    </div>
}

export default Projects;
