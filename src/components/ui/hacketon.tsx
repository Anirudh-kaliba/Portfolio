import Image from "next/image";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

export default function HackathonSection() {
  return (
    <div className="z-10 w-full max-w-6xl mb-16 px-4">
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 text-sm font-medium shadow-lg">
                Hackathons
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                I like building things
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university, I attended{" "}
                <span className="font-bold text-indigo-500">
                  {DATA.hackathons.length}+
                </span>{" "}
                hackathons. People from around the country would come together
                and build incredible things in 2-3 days. It was eye-opening to
                see the endless possibilities brought to life by a group of
                motivated and passionate individuals.
              </p>
            </div>
          </div>

          {/* Hackathon Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.hackathons.map((project, id) => (
              <div
                key={project.title + project.dates}
                className={cn(
                  "rounded-xl overflow-hidden shadow-xl transition-transform transform hover:scale-105 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold text-indigo-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {project.dates} - {project.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Links Section */}
                  {project.links?.length > 0 && (
                    <div className="flex gap-2 mt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-600 transition duration-300"
                        >
                          {link.icon}
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
