import { getTeamMembers } from "@/lib/cms";
import AboutPageClient from "./about-client";

export default async function AboutPage() {
    const teamMembers = await getTeamMembers();

    return <AboutPageClient teamMembers={teamMembers} />;
}
