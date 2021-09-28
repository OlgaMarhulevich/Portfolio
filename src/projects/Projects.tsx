import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/container.module.css'
import styleWrapper from "../common/styles/wrapper.module.css";
import Title from "../common/components/title/Title";
import ProjectElement from "./projectElement/ProjectElement";
import project from '../common/images/project.jpg'

type ProjectType = {
    img: string,
    title: string,
    description: string
}
function Projects() {
    const projectsArray: Array<ProjectType> = [
        {img: `${project}`, title: 'Project', description: 'something'},
        {img: `${project}`, title: 'TodoList', description: 'something'},
        {img: `${project}`, title: 'Social Network', description: 'something'},
    ]
    const projects = projectsArray.map(p =>
        <ProjectElement key={p.title} img={p.img} title={p.title} description={p.description}/>)

    return <div className={`${s.projectsBlock} ${styleWrapper.wrapper}`} id={'projects'}>
        <div className={`${styleContainer.container} ${s.container}`}>
            <Title title={'my projects'}/>
            <div className={s.projects}>
                {projects}
            </div>
        </div>
    </div>
}

export default Projects;
