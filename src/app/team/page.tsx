import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Mail, Linkedin, Globe, BookUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Team',
  description: 'Meet the talented research team members working with Dr. Eleanor Vance.', // Replace
};

// Mock Data - Replace with actual data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Alice Chen",
    role: "Postdoctoral Fellow",
    avatarUrl: "https://picsum.photos/seed/alicechen/200/200",
    dataAiHint: "professional headshot woman",
    researchInterests: ["Machine Translation", "Low-Resource NLP", "Cross-lingual Transfer"],
    bio: "Alice is exploring novel techniques for improving translation quality for languages with limited data resources. Her work focuses on transfer learning, multilingual models, and incorporating linguistic typology into neural architectures.",
    email: "alice.chen@university.edu", // Replace
    linkedin: "#", // Replace
    website: "#", // Replace
    googleScholar: "#" // Replace
  },
  {
    id: 2,
    name: "Bob G. Lee",
    role: "PhD Candidate",
    avatarUrl: "https://picsum.photos/seed/boblee/200/200",
    dataAiHint: "professional headshot man",
    researchInterests: ["Dialogue Systems", "Reinforcement Learning", "Commonsense Reasoning"],
    bio: "Bob's research aims to build more engaging, coherent, and knowledgeable conversational AI agents. He is currently working on applying deep reinforcement learning and integrating commonsense knowledge for open-domain dialogue.",
    email: "bob.lee@university.edu", // Replace
    linkedin: "#", // Replace
  },
  {
    id: 3,
    name: "Carol Davis, M.Sc.",
    role: "PhD Student",
    avatarUrl: "https://picsum.photos/seed/caroldavis/200/200",
    dataAiHint: "professional headshot person",
    researchInterests: ["Computational Social Science", "NLP for Healthcare", "Ethical AI"],
    bio: "Carol is passionate about using NLP to understand and address societal challenges. Her current projects involve analyzing social media data for public health insights and developing fair and interpretable NLP tools for clinical text.",
    email: "carol.davis@university.edu", // Replace
    website: "#", // Replace
    googleScholar: "#" // Replace
  },
  {
    id: 4,
    name: "David Green",
    role: "Masters Student",
    avatarUrl: "https://picsum.photos/seed/davidgreen/200/200",
    dataAiHint: "student headshot",
    researchInterests: ["Fairness in ML", "Interpretability", "NLP Applications"],
    bio: "David is investigating fairness metrics and bias mitigation techniques in machine learning models, with a specific focus on their impact in natural language processing applications such as text classification and generation.",
    email: "david.green@university.edu", // Replace
  },
];

const alumni = [
 {
    id: 5,
    name: "Dr. Samuel Cho",
    role: "Former Postdoc (2020-2022)",
    currentPosition: "Research Scientist @ BigTech AI",
    avatarUrl: "https://picsum.photos/seed/samuelcho/150/150",
    dataAiHint: "professional headshot",
    researchFocus: "Deep Learning for NLP",
    website: "#" // Replace
  },
  {
    id: 6,
    name: "Eva Rodriguez, PhD",
    role: "Former PhD Student (Graduated 2021)",
    currentPosition: "Assistant Professor @ State University",
    avatarUrl: "https://picsum.photos/seed/evarodriguez/150/150",
    dataAiHint: "academic headshot",
    researchFocus: "Computational Semantics",
    website: "#" // Replace
  }
];


export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section id="current-team" aria-labelledby="current-team-title">
        <SectionTitle id="current-team-title">Current Team Members</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border-primary/10">
              <div className="sm:shrink-0 sm:w-1/3 bg-secondary/30 flex items-center justify-center p-4">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-background shadow-md object-cover aspect-square"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6 flex-grow sm:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{member.name}</h3>
                <p className="text-md text-accent font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Interests: {member.researchInterests.join(', ')}
                </p>
                <p className="text-sm text-foreground/80 mt-3 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                  <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <Mail size={18} className="mr-1" /> Email
                    </a>
                  </Button>
                  {member.linkedin && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin size={18} className="mr-1" /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {member.website && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label={`Website of ${member.name}`}>
                        <Globe size={18} className="mr-1" /> Website
                      </a>
                    </Button>
                  )}
                   {member.googleScholar && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.googleScholar} target="_blank" rel="noopener noreferrer" aria-label={`Google Scholar of ${member.name}`}>
                        <BookUser size={18} className="mr-1" /> Scholar
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="alumni" aria-labelledby="alumni-title">
        <SectionTitle id="alumni-title">Lab Alumni</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map(member => (
             <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
               <CardContent className="pt-6 flex flex-col items-center text-center">
                <Image
                    src={member.avatarUrl}
                    alt={`Photo of ${member.name}`}
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-background shadow-sm object-cover aspect-square mb-3"
                    data-ai-hint={member.dataAiHint}
                  />
                  <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                  <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                  <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                   {member.website && (
                    <Button variant="link" size="sm" asChild className="mt-2 text-accent px-0 h-auto">
                      <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label={`Website of ${member.name}`}>
                        <Globe size={14} className="mr-1" /> Profile
                      </a>
                    </Button>
                  )}
               </CardContent>
             </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
