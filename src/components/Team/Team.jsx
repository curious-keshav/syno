/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from 'framer-motion';


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
        <section className="py-16 px-6 ">
            <div className="max-w-5xl px-4 sm:px-6 mx-auto text-center">
                <h2 className=" text-4xl sm:text-5xl font-bold text-white mb-14">
                    Key People
                </h2>

                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-[#111827] rounded-xl shadow-md hover:shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-600"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="text-blue-600 font-medium">{member.position}</p>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">{member.bio}</p>

                            <div className="mt-5">
                                <p className="font-semibold text-gray-900 dark:text-white">Expertise:</p>
                                <ul className="mt-1 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                    {member.expertise.map((skill) => (
                                        <li key={skill}>• {skill}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-5 mt-6">
                                <a
                                    href={member.socialLinks.linkedin}
                                    className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href={member.socialLinks.twitter}
                                    className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Team;
