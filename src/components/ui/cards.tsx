"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

const bgColors = [
  "from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900",
  "from-green-100 to-green-200 dark:from-green-800 dark:to-green-900",
  "from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900",
  "from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900",
];

export function ProjectCards() {
  return (
    <div className="flex items-center justify-center w-full px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl w-full">
        {DATA.projects.map((project, index) => (
          <Card
            key={index}
            className={`w-full max-w-[600px] min-h-[400px] overflow-hidden flex flex-col justify-between border-none bg-gradient-to-br ${
              bgColors[index % bgColors.length]
            } shadow-lg rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl p-6 text-center`}
          >
            {/* Title and Date */}
            <CardHeader className="relative pb-4">
              <CardTitle className="text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white truncate">
                {project.title}
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {project.dates}
              </p>
            </CardHeader>

            {/* Description */}
            <CardContent className="flex flex-col items-center justify-center space-y-4 flex-grow">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-white bg-gray-700 dark:bg-gray-600 rounded-full truncate"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 mt-2">
                {project.links?.map((link, i) => (
                  <Button
                    key={i}
                    asChild
                    className="px-4 py-1.5 text-white bg-blue-600 dark:bg-blue-400 dark:text-gray-900 rounded-md shadow-md hover:bg-blue-500 hover:dark:bg-blue-300 transition-all"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate"
                    >
                      {link.type}
                    </a>
                  </Button>
                ))}
              </div>

              {/* Video Section */}
              {project.video && (
                <div className="w-full flex justify-center">
                  <video
                    src={project.video}
                    controls
                    className="mt-4 w-[350px] h-[220px] rounded-lg object-cover shadow-md border-2 border-blue-400"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
