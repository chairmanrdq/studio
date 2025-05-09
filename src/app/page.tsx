import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, Link as LinkIcon, MapPin, Award, Rss, BookOpen } from 'lucide-react'; // Changed Megaphone to Rss for news
import ImageCarousel from '@/components/home/image-carousel'; // Added import for ImageCarousel

// Mock Data - replace with actual data source
const scholarData = {
  name: "Dr. Eleanor Vance", // Replace
  position: "Professor of Computational Linguistics", // Replace
  affiliation: "Department of Computer Science, University of Innovation", // Replace
  avatarUrl: "https://picsum.photos/seed/scholarvance/240/240", // Replace
  dataAiHint: "professional portrait", // AI hint for avatar
  contact: {
    email: "eleanor.vance@university.edu", // Replace
    phone: "+1-234-567-8900", // Replace (optional)
    office: "Room 404, Tech Building, Innovation Drive", // Replace
  },
  academicLinks: [ // Replace with actual links
    { name: "Google Scholar", url: "#", icon: <BookOpen className="h-4 w-4" /> },
    { name: "ORCID", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z"/></svg> },
    { name: "LinkedIn", url: "#", icon: <LinkIcon className="h-4 w-4" /> },
  ],
  researchFocusSummary: "My research focuses on advancing Natural Language Processing and Machine Learning techniques to understand and generate human language, with a particular interest in computational semantics, AI ethics, and applications in healthcare and education. I strive to develop robust, interpretable, and fair AI systems.", // Replace
  researchKeywords: [ // Replace
    "Natural Language Processing",
    "Machine Learning",
    "AI Ethics",
    "Computational Semantics",
  ],
  news: [ // Replace with actual news
    { id: 1, date: "2024-07-15", title: "Received Best Paper Award at ACL 2024", description: "Our work on multilingual transformers was recognized for its innovative approach.", icon: <Award className="h-5 w-5 text-accent flex-shrink-0" /> },
    { id: 2, date: "2024-06-01", title: "Invited Talk at Stanford NLP Seminar", description: "Presented latest research on AI ethics in language models.", icon: <Rss className="h-5 w-5 text-accent flex-shrink-0" /> },
    { id: 3, date: "2024-05-20", title: "Recruiting PhD Students for Fall 2025", description: "Looking for passionate students in NLP and ML. See details on the Research page.", icon: <Rss className="h-5 w-5 text-accent flex-shrink-0" /> },
  ],
};

// Data for the carousel
const carouselImages = [
  { src: "https://picsum.photos/seed/carouselA/1200/500", alt: "Modern Research Facility", dataAiHint: "modern laboratory" },
  { src: "https://picsum.photos/seed/carouselB/1200/500", alt: "AI Neural Network Visualization", dataAiHint: "neural network" },
  { src: "https://picsum.photos/seed/carouselC/1200/500", alt: "Collaborative Team Working", dataAiHint: "team collaboration" },
  { src: "https://picsum.photos/seed/carouselD/1200/500", alt: "Advanced Computing Infrastructure", dataAiHint: "server room" },
];

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Personal Bio Section */}
      <section id="bio" aria-labelledby="bio-title">
        <Card className="shadow-lg overflow-hidden border-primary/20">
          <div className="md:flex">
            <div className="md:shrink-0 bg-secondary/30 flex items-center justify-center p-4 md:p-0">
              <Image
                src={scholarData.avatarUrl}
                alt={`Profile picture of ${scholarData.name}`}
                width={240}
                height={240}
                className="rounded-full object-cover h-48 w-48 md:h-60 md:w-60 border-4 border-background shadow-md"
                data-ai-hint={scholarData.dataAiHint}
                priority
              />
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h1 id="bio-title" className="text-3xl md:text-4xl font-bold text-primary">{scholarData.name}</h1>
              <p className="mt-1 text-lg text-foreground/80">{scholarData.position}</p>
              <p className="mt-1 text-md text-foreground/70">{scholarData.affiliation}</p>
              
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <a href={`mailto:${scholarData.contact.email}`} className="text-foreground/90 hover:text-accent">{scholarData.contact.email}</a>
                </div>
                {scholarData.contact.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                    <span className="text-foreground/90">{scholarData.contact.phone}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                  <span className="text-foreground/90">{scholarData.contact.office}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {scholarData.academicLinks.map(link => (
                  <Button key={link.name} variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Research Focus Section */}
      <section id="research-focus" aria-labelledby="research-focus-title">
        <SectionTitle id="research-focus-title">Research Focus</SectionTitle>
        <Card className="shadow-md border-primary/10">
          <CardContent className="pt-6">
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              {scholarData.researchFocusSummary}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {scholarData.researchKeywords.map((keyword, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                        {keyword}
                    </span>
                ))}
            </div>
            <Button variant="link" asChild className="px-0 text-accent hover:text-accent/80">
              <a href="/research">Explore my research &rarr;</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* News & Updates Section */}
      <section id="news" aria-labelledby="news-title">
        <SectionTitle id="news-title">News & Updates</SectionTitle>
        <div className="space-y-6">
          {scholarData.news.map(item => (
            <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardContent className="pt-6 flex items-start space-x-4">
                {item.icon}
                <div>
                  <h3 className="text-lg font-semibold text-primary/90">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Carousel Section */}
      <section id="image-carousel" aria-labelledby="carousel-title" className="mt-12 md:mt-16">
        <SectionTitle id="carousel-title">Visual Highlights</SectionTitle>
        <ImageCarousel images={carouselImages} interval={5000} />
      </section>
    </div>
  );
}
