// app/[locale]/team-details/[name]/page.js

import Layout from "@/components/layout/Layout";
import Subscribe from "@/components/sections/home1/Subscribe";
import { notFound } from "next/navigation";

// Team members data
const teamMembers = {
    "olivia-quinn": {
        name: "Olivia Quinn",
        role: "Forex Trader",
        image: "/assets/images/team/team-1.jpg",
        bio: "Olivia has over a decade of experience in forex trading, specializing in market analysis and risk management strategies. She helps traders navigate the complexities of the forex market.",
        expertise: "Foreign exchange trading, risk analysis, market trends",
        skills: [
            { name: "Market Analysis", level: "92%" },
            { name: "Risk Management", level: "87%" },
            { name: "Trading Psychology", level: "80%" },
        ],
    },
    "nathan-hayes": {
        name: "Nathan Hayes",
        role: "Consultant",
        image: "/assets/images/team/team-2.jpg",
        bio: "Nathan is a seasoned business consultant with expertise in financial strategy and operational efficiency. He has worked with startups and Fortune 500 companies alike.",
        expertise: "Business growth strategies, financial consulting, leadership training",
        skills: [
            { name: "Business Strategy", level: "95%" },
            { name: "Financial Consulting", level: "88%" },
            { name: "Leadership Development", level: "85%" },
        ],
    },
    "ava-jensen": {
        name: "Ava Jensen",
        role: "Trading Assistant",
        image: "/assets/images/team/team-3.jpg",
        bio: "Ava supports top traders with real-time data analysis and algorithmic trading strategies, helping clients optimize their investment approaches.",
        expertise: "Algorithmic trading, financial modeling, investment strategies",
        skills: [
            { name: "Data Analysis", level: "90%" },
            { name: "Algorithmic Trading", level: "85%" },
            { name: "Portfolio Management", level: "80%" },
        ],
    },
    "sophia-knight": {
        name: "Sophia Knight",
        role: "President of Trade",
        image: "/assets/images/team/team-4.jpg",
        bio: "With a career spanning 15 years, Sophia leads trading operations and has successfully developed trading models that maximize ROI.",
        expertise: "Corporate trading, high-frequency trading, strategic investment",
        skills: [
            { name: "Corporate Finance", level: "97%" },
            { name: "Strategic Planning", level: "90%" },
            { name: "Investment Banking", level: "85%" },
        ],
    },
    "ethan-brooks": {
        name: "Ethan Brooks",
        role: "Marketing Coordinator",
        image: "/assets/images/team/team-7.jpg",
        bio: "Ethan is an expert in digital marketing, social media strategy, and brand growth. He specializes in driving customer engagement and maximizing digital ROI.",
        expertise: "Digital marketing, content strategy, audience growth",
        skills: [
            { name: "Social Media Marketing", level: "90%" },
            { name: "Content Strategy", level: "85%" },
            { name: "SEO & Analytics", level: "80%" },
        ],
    },
    "aronic-kehan": {
        name: "Aronic Kehan",
        role: "Business Assistant",
        image: "/assets/images/team/team-6.jpg",
        bio: "Aronic helps businesses streamline their operations and improve overall efficiency with smart workflow automation and innovative business solutions.",
        expertise: "Process automation, business operations, workflow optimization",
        skills: [
            { name: "Process Optimization", level: "89%" },
            { name: "Business Analysis", level: "87%" },
            { name: "Project Management", level: "85%" },
        ],
    },
};

export default function TeamMemberDetails({ params, searchParams }) {
    // Destructure the dynamic route parameter
    const { name } = params;

    // If the team member isn't found, trigger a 404
    if (!name || !teamMembers[name]) {
        notFound();
    }

    const member = teamMembers[name];

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Team Details">
                <section className="team-details pt_90 pb_90">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/* Content Section */}
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="content-one mb_40">
                                        <h2>{member.name}</h2>
                                        <span className="designation">{member.role}</span>
                                        <p>{member.bio}</p>
                                    </div>
                                    <div className="content-two mb_40">
                                        <h3>My Expertise & Skills</h3>
                                        <p>{member.expertise}</p>
                                    </div>
                                    <div className="content-three">
                                        <div className="progress-box">
                                            {member.skills.map((skill, index) => (
                                                <div key={index} className="single-progress-box">
                                                    <p>{skill.name}</p>
                                                    <div className="bar">
                                                        <div
                                                            className="bar-inner count-bar"
                                                            style={{ width: skill.level }}
                                                        >
                                                            <span>{skill.level}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-box mt_20">
                                            <p>
                                                Dedicated to delivering outstanding results and continuously
                                                learning new strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Image Section */}
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box ml_40">
                                    <figure className="image">
                                        <img src={member.image} alt={member.name} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </Layout>
        </div>
    );
}
