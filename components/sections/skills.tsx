import { FormattedMessage } from "react-intl";
import SkillCard from "../skillCard";
import JSIcon from "../icons/JSIcon";
import CSS3Icon from "../icons/CSS3Icon";
import ReactIcon from "../icons/ReactIcon";
import VueIcon from "../icons/VueIcon";
import GithubIcon from "../icons/GithubIcon";
import FigmaIcon from "../icons/FigmaIcon";
import ThreeJSIcon from "../icons/ThreeJSIcon";
import AWSIcon from "../icons/AWSIcon";
import CloudFlareIcon from "../icons/CloudFlareIcon";
import FrameworkIcon from "../icons/FrameworkIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import PythonIcon from "../icons/PythonIcon";
import GolangIcon from "../icons/GolangIcon";
import PHPIcon from "../icons/PHPIcon";

export default function Skills() {
    return <section id='skills' className="py-60">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black text-blue-white mb-16 text-center">
                <FormattedMessage id="skills" />
            </h2>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mx-auto">

                {/* React JS */}
                <SkillCard
                    Icon={ReactIcon}
                    name="React JS"
                    category="Librería • Frontend"
                    percentage={100}
                    color="bg-[#61DAFB]"
                />

                {/* Vue JS */}
                <SkillCard
                    Icon={VueIcon}
                    name="Vue Js"
                    category="Librería • Frontend"
                    percentage={80}
                    color="bg-[#4FC08D]"
                />

                {/* Three JS */}
                <SkillCard
                    Icon={ThreeJSIcon}
                    name="Three Js"
                    category="Librería • Frontend"
                    percentage={60}
                    color="bg-[#4FC08D]"
                />

                {/* JavaScript */}
                <SkillCard
                    Icon={JSIcon}
                    name="JavaScript"
                    category="Lenguaje • Frontend"
                    percentage={100}
                    color="bg-[#F7DF1E]"
                />

                {/* Typescript */}
                <SkillCard
                    Icon={TypeScriptIcon}
                    name="Typescript"
                    category="Lenguaje • Frontend"
                    percentage={80}
                    color="bg-[#F7DF1E]"
                />

                {/* CSS3 */}
                <SkillCard
                    Icon={CSS3Icon}
                    name="CSS3"
                    category="Lenguaje • Frontend"
                    percentage={100}
                    color="bg-[#1572B6]"
                />

                {/* PHP */}
                <SkillCard
                    Icon={PHPIcon}
                    name="PHP"
                    category="Lenguaje • Backend"
                    percentage={40}
                    color="bg-[#777BB4]"
                />

                {/* Python */}
                <SkillCard
                    Icon={PythonIcon}
                    name="Python"
                    category="Lenguaje • Backend"
                    percentage={30}
                    color="bg-[#777BB4]"
                />


                {/* Golang */}
                <SkillCard
                    Icon={GolangIcon}
                    name="Golang"
                    category="Lenguaje • Backend"
                    percentage={30}
                    color="bg-[#00ADD8]"
                />

                {/* Git */}
                <SkillCard
                    Icon={GithubIcon}
                    name="Git & Github"
                    category="Devops Tools"
                    percentage={50}
                    color="bg-[#F05032]"
                />

                {/* AWS */}
                <SkillCard
                    Icon={AWSIcon}
                    name="AWS"
                    category="Devops Tools"
                    percentage={10}
                    color="bg-[#F05032]"
                />

                {/* Cloudflare */}
                <SkillCard
                    Icon={CloudFlareIcon}
                    name="Cloudflare"
                    category="Devops Tools"
                    percentage={30}
                    color="bg-[#F05032]"
                />

                {/* NextsJS */}
                <SkillCard
                    Icon={FrameworkIcon}
                    name="Next JS"
                    category="Framework • Frontend"
                    percentage={60}
                    color="bg-[#F05032]"
                />

                {/* NuxtJS */}
                <SkillCard
                    Icon={FrameworkIcon}
                    name="Nuxt JS"
                    category="Framework • Frontend"
                    percentage={40}
                    color="bg-[#F05032]"
                />

                {/* Figma */}
                <SkillCard
                    Icon={FigmaIcon}
                    name="Figma"
                    category="UX • Design Tools"
                    percentage={90}
                    color="bg-[#F24E1E]"
                />
            </div>
        </div>
    </section>

}