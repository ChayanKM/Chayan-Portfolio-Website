import React, { useState,useEffect } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
  const [item, setItem] = useState ({name:'web'})
  const [project, setproject] = useState ([])
  const [active, setActive] = useState (3)
  
  useEffect(()=>{
    if(item.name === "all") {
      setproject(projectsData)
    }
    else {
      const newProjects = projectsData.filter((project)=>{
        return project.category.toLowerCase() ===item.name;
      })
      setproject(newProjects)
    }
  },[item])

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item,index)=>{
          return (
            <span onClick={(e)=>{handleClick(e,index)}} className={`${active === index ? "active__work" : ""} work__item`} key={index}>{item.name}</span>
          )
        })}
      </div>

      <div className="work__container container grid">
        {project.map((item)=>{
          return <WorkItems item={item} key={item.id}/>
        })}
      </div>
      
    </div>
  )
}

export default Works