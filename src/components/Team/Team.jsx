import React from "react";

const teamMembers = [
    {
        name: "Mohammad Arif Azam",
        position: "Director",
        image: "https://placehold.co/600x400",
        bio: "Mohammad Arif Azam has over 15 years of experience in the electrotechnical industry, leading business operations and driving innovation.",
        expertise: ["Project Management", "Business Strategy"],
        socialLinks: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Birender Singh",
        position: "Director",
        image: "https://placehold.co/600x400",
        bio: "Birender Singh specializes in sales and marketing strategy and has successfully led product launches that have enhanced market presence.",
        expertise: ["Sales Strategy", "Team Leadership"],
        socialLinks: {
            linkedin: "#",
            twitter: "#",
        },
    },
];

const Team = () => {
    return (
        <section className="py-12 px-6  ">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold tracking-wider text-white dark:text-white mb-8">
                    Key People
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white dark:bg-[#111827] rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300">{member.position}</p>
                            <p className="text-gray-400 dark:text-gray-500 mt-2">{member.bio}</p>
                            <div className="mt-4">
                                <p className="font-semibold text-gray-800 dark:text-white">Expertise:</p>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    {member.expertise.map((skill) => (
                                        <li key={skill} className="text-sm">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a href={member.socialLinks.linkedin} className="text-xl text-primary hover:text-gray-700">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href={member.socialLinks.twitter} className="text-xl text-primary hover:text-gray-700">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
