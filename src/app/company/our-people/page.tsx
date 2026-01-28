import { MarketingHeader } from "@/components/MarketingHeader";
import { MarketingFooter } from "@/components/MarketingFooter";
import { Users, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Our People | CloudInteract',
    description: 'Meet the team behind CloudInteract.',
};

const team = [
    {
        name: "Simon Leyland",
        role: "CEO and Co-Founder",
        bio: "Simon is responsible for shaping the company's strategic vision and overseeing its day-to-day operations. With over 20 years of experience in the IT industry, he has worked across system integrators, consulting services, and end clients in Telecoms and Digital Workplace Services. Simon has led large-scale digital transformations for global enterprises such as Jaguar LandRover, AstraZeneca, Sony, and Burberry.",
        image: "/images/team/simon-leyland.png"
    },
    {
        name: "Nick Seagrave",
        role: "CTO and Co-Founder",
        bio: "Nick is committed to delivering service transformation, identifying and bringing to market the technology that meets strategic needs. With over 25 years of communications experience, Nick built a market-leading unified communications company that became the go-to solution for some of the world’s largest enterprises across three continents.",
        image: "/images/team/nick-seagrave.png"
    },
    {
        name: "Nancy Van Delist",
        role: "Head of Business, North America",
        bio: "Nancy plays a key role in driving the company's growth and expansion into the US market. With over 15 years of experience, Nancy has a proven track record of transforming businesses and technology across organisations ranging from nonprofits to large enterprises, with a background in data analytics.",
        image: "/images/team/nancy-van-delist.png"
    }
];

export default function OurPeoplePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
            <MarketingHeader />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 mb-8">
                            <Users className="mr-2 h-4 w-4" />
                            Our Team
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            At the Heart of <span className="text-purple-400">CloudInteract</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Our culture is built on authenticity, trust, and the belief that real success comes from being true to who we are—both individually and as a team.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500/30 transition-colors group">
                                <div className="h-48 bg-gradient-to-br from-purple-900/20 to-slate-900 relative">
                                    <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-950 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 pt-16">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <div className="text-purple-400 font-medium mb-4">{member.role}</div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>
                                    <div className="flex gap-3">
                                        <Link href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
