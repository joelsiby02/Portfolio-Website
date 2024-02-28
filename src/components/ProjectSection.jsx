import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: 'Project 1',
    category: 'web',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/your-username/project-1',
    demoUrl: 'https://example.com/project-1-demo',
    description: 'Description of Project 1',
    previewUrl: 'https://example.com/project-1-preview',
    underConstruction: true,
    latest: false,
  },
  {
    id: 2,
    title: 'Project 2',
    category: 'mobile',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/your-username/project-2',
    demoUrl: 'https://example.com/project-2-demo',
    description: 'Description of Project 2',
    previewUrl: 'https://example.com/project-2-preview',
    underConstruction: false,
    latest: true,
  },
  {
    id: 3,
    title: 'Project 3',
    category: 'web',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/your-username/project-3',
    demoUrl: 'https://example.com/project-3-demo',
    description: 'Description of Project 3',
    previewUrl: 'https://example.com/project-3-preview',
    underConstruction: false,
    latest: false,
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProject(null); // Reset active project when changing category
  };

  const openPreview = (previewUrl) => {
    window.open(previewUrl, '_blank');
  };

  const openCode = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  const openDemo = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory || project.category === 'web');

  return (
    <div id="projects" className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex justify-center space-x-4 my-8">
        <button
          className={`border px-4 py-2 rounded-md ${activeCategory === 'all' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activeCategory === 'web' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('web')}
        >
          Web
        </button>
        <button
          className={`border px-4 py-2 rounded-md ${activeCategory === 'mobile' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('mobile')}
        >
          Mobile
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-lg overflow-hidden shadow-md relative transition-transform transform hover:scale-105`}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-end space-x-2">
                <button onClick={() => openPreview(project.previewUrl)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 hover:text-blue-700 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Eye icon */}
                  </svg>
                </button>
                <button onClick={() => openCode(project.githubUrl)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Code
                </button>
                <button onClick={() => openDemo(project.demoUrl)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Demo
                </button>
              </div>
              {activeProject === project.id && (
                <div className="absolute flex space-x-2 bottom-2 left-2">
                  {project.underConstruction && (
                    <span className="bg-red-400 text-yellow-900 rounded-full h-4 w-4 flex justify-center items-center animate-pulse font-semibold">
                      U
                    </span>
                  )}
                  {project.latest && (
                    <span className="bg-green-400 text-yellow-900 rounded-full h-4 w-4 flex justify-center items-center animate-pulse font-semibold">
                      L
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
