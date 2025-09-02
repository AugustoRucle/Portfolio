import SkillCard from "../skillCard";

export default function Skills() {
    return <section id='skills' className="py-20 bg-neutral-800">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black text-blue-white mb-16 text-center">Skills</h2>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* JavaScript */}
                <SkillCard
                    icon="JS"
                    name="JavaScript"
                    category="Lenguaje • Frontend"
                    percentage={70}
                    color="bg-[#F7DF1E]"
                    textColor="text-black"
                />

                {/* CSS3 */}
                <SkillCard
                    icon="CSS"
                    name="CSS3"
                    category="Lenguaje • Frontend"
                    percentage={70}
                    color="bg-[#1572B6]"
                    textColor="text-white"
                />

                {/* React JS */}
                <SkillCard
                    icon="⚛️"
                    name="React JS"
                    category="Librería • Frontend"
                    percentage={70}
                    color="bg-[#61DAFB]"
                    textColor="text-black"
                />

                {/* Vue JS */}
                <SkillCard
                    icon="V"
                    name="Vue Js"
                    category="Librería • Frontend"
                    percentage={70}
                    color="bg-[#4FC08D]"
                    textColor="text-white"
                />

                {/* PHP */}
                <SkillCard
                    icon="PHP"
                    name="PHP"
                    category="Lenguaje • Backend"
                    percentage={40}
                    color="bg-[#777BB4]"
                    textColor="text-white"
                />

                {/* Golang */}
                <SkillCard
                    icon="Go"
                    name="Golang"
                    category="Lenguaje • Backend"
                    percentage={30}
                    color="bg-[#00ADD8]"
                    textColor="text-white"
                />

                {/* Git */}
                <SkillCard
                    icon="Git"
                    name="Git"
                    category="Dev Tools"
                    percentage={80}
                    color="bg-[#F05032]"
                    textColor="text-white"
                />

                {/* Figma */}
                <SkillCard
                    icon="🎨"
                    name="Figma"
                    category="UX • Design Tools"
                    percentage={50}
                    color="bg-[#F24E1E]"
                    textColor="text-white"
                />
            </div>
        </div>
    </section>

}