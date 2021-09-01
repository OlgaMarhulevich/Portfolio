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
        {img: 'yellow', title: 'Project', description: 'something'},
        {img: 'grey', title: 'TodoList', description: 'something'},
        {img: 'green', title: 'Social Network', description: 'something'},
    ]
    const projects = projectsArray.map(s =>
        <ProjectElement img={s.img} title={s.title} description={s.description}/>)

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
