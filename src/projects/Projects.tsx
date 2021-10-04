import React from 'react';
import s from './Projects.module.scss'
import Title from "../common/components/title/Title";
import ProjectElement from "./projectElement/ProjectElement";
import project from '../common/images/projects/project.jpg'

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
        {img: `${project}`, title: 'Counter', description: 'something'},
    ]
    const projects = projectsArray.map(p =>
        <ProjectElement key={p.title} img={p.img} title={p.title} description={p.description}/>)

    return <div className={s.projectsBlock} id={'projects'}>
        <div className={s.container}>
            <Title title={'my projects'}/>
            <div className={s.projects}>
                {projects}
            </div>
        </div>
    </div>
}

export default Projects;
