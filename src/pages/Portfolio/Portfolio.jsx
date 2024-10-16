import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    // Fetch the posts from the public folder
    useEffect(() => {
        fetch("/portfolio.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);
    console.log(projects)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-4">Blog Posts</h1>
            <div className="container mx-auto p-4 blog_info overflow-y-auto no-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <Link key={project.id} to={`/portfolio/${project.id}`}>
                            <div

                                className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex items-center p-5 gap-5"
                            >
                                <img
                                    src={project.photo}
                                    alt={project.title}
                                    className="w-48 object-cover rounded-lg"
                                />
                                <div>
                                    <h2 className="text-lg text-white mb-2">
                                        {project.title}
                                    </h2>
                                    
                                    <div className="flex gap-2 mb-4">
                                        {project.technologies.map((technologie, index) => (
                                            <span
                                                key={index}
                                                className="italic text-sm"
                                            >
                                                #{technologie}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;