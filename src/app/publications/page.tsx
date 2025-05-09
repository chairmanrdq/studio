import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Link as LinkIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'A comprehensive list of publications by Dr. Eleanor Vance, including journal articles, conference papers, and books.', // Replace
};

// Mock Data - Replace with actual data
interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "Conference Paper" | "Journal Article" | "Book" | "Preprint" | "Book Chapter" | "Workshop Paper";
  doi?: string;
  pdfUrl?: string;
  arxivUrl?: string;
  bibtex?: string; // Optional BibTeX string
  abstract?: string; // Optional abstract
  keywords?: string[]; // Optional keywords
}

const publicationsData: Publication[] = [
  { 
    id: "p1", 
    title: "Advanced Techniques in Neural Machine Translation with Low-Resource Languages", 
    authors: "Eleanor Vance, John Smith, Jane Doe", 
    venue: "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024)", 
    year: 2024, 
    type: "Conference Paper", 
    doi: "10.1234/acl.2024.001", 
    pdfUrl: "#", 
    arxivUrl: "#",
    abstract: "This paper explores novel attention mechanisms and transfer learning strategies to significantly improve neural machine translation performance for language pairs with limited parallel data.",
    keywords: ["NMT", "Low-Resource Languages", "Attention Mechanisms", "Transfer Learning"],
  },
  { 
    id: "p2", 
    title: "Ethical Considerations in the Deployment of Large Language Models for Healthcare", 
    authors: "Eleanor Vance, Alice Chen", 
    venue: "Journal of AI Ethics and Governance, Vol. 5, Issue 2", 
    year: 2023, 
    type: "Journal Article", 
    doi: "10.5678/jaie.2023.002", 
    pdfUrl: "#",
    abstract: "We discuss the critical ethical challenges, including bias, privacy, and accountability, associated with using large language models in clinical decision support and patient interaction.",
    keywords: ["AI Ethics", "LLMs", "Healthcare AI", "Bias in AI", "Privacy"],
  },
  { 
    id: "p3", 
    title: "A Comprehensive Survey of Knowledge Graph Embedding Techniques for Biomedical Applications", 
    authors: "Bob Lee, Eleanor Vance, David Kim", 
    venue: "ACM Computing Surveys, Vol. 55, Issue 9", 
    year: 2023, 
    type: "Journal Article", 
    doi: "10.1145/1234567", 
    pdfUrl: "#",
    keywords: ["Knowledge Graphs", "Embeddings", "Biomedical NLP", "Survey"],
  },
  { 
    id: "p4", 
    title: "Multimodal Learning for Enhanced Sentiment Analysis in Social Media Content", 
    authors: "Carol Davis, Eleanor Vance, David Green", 
    venue: "Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP 2022)", 
    year: 2022, 
    type: "Conference Paper", 
    doi: "10.1234/emnlp.2022.003", 
    pdfUrl: "#",
    keywords: ["Multimodal Learning", "Sentiment Analysis", "Social Media", "Deep Learning"],
  },
  { 
    id: "p5", 
    title: "Foundations of Computational Linguistics: A Practical Guide", 
    authors: "Eleanor Vance", 
    venue: "Innovation University Press", 
    year: 2021, 
    type: "Book",
    abstract: "A textbook covering fundamental concepts and practical applications in computational linguistics, designed for undergraduate and early graduate students.",
    keywords: ["Computational Linguistics", "Textbook", "NLP Fundamentals"],
  },
  { 
    id: "p6", 
    title: "Fairness-aware Text Classification using Adversarial Debiasing", 
    authors: "Eleanor Vance, Maria Rodriguez", 
    venue: "Workshop on Fairness, Accountability, and Transparency in Machine Learning (FAT/ML 2022)", 
    year: 2022, 
    type: "Workshop Paper", 
    pdfUrl: "#",
    arxivUrl: "#",
    keywords: ["Fairness", "Text Classification", "Adversarial Learning", "Bias Mitigation"],
  },
];

const categories: Publication["type"][] = ["Journal Article", "Conference Paper", "Workshop Paper", "Book", "Preprint"];

const filterPublications = (type: string) => {
  if (type === "All") return publicationsData;
  return publicationsData.filter(p => p.type === type);
};

export default function PublicationsPage() {
  const allCategories = ["All", ...categories];

  return (
    <div className="space-y-12">
      <SectionTitle>Publications</SectionTitle>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mb-6 gap-2">
          {allCategories.map(category => (
            <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">{category}</TabsTrigger>
          ))}
        </TabsList>

        {allCategories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="space-y-6">
              {filterPublications(category).length > 0 ? (
                filterPublications(category).sort((a,b) => b.year - a.year).map(pub => (
                  <Card key={pub.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl text-primary/90">{pub.title}</CardTitle>
                      <CardDescription className="text-sm text-foreground/70 italic">
                        {pub.authors}
                      </CardDescription>
                      <CardDescription className="text-sm text-muted-foreground">
                        {pub.venue}, {pub.year}. <span className="font-medium">({pub.type})</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {pub.abstract && <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{pub.abstract}</p>}
                      <div className="flex flex-wrap gap-2 items-center">
                        {pub.doi && (
                          <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-1.5 h-4 w-4" /> DOI
                            </a>
                          </Button>
                        )}
                        {pub.pdfUrl && pub.pdfUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="mr-1.5 h-4 w-4" /> PDF
                            </a>
                          </Button>
                        )}
                        {pub.arxivUrl && pub.arxivUrl !== "#" && (
                           <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-1.5 h-4 w-4" /> arXiv
                            </a>
                          </Button>
                        )}
                        {/* Placeholder for BibTeX - could be a modal or copy to clipboard */}
                        {pub.bibtex && (
                           <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                             BibTeX
                           </Button>
                        )}
                      </div>
                      {pub.keywords && pub.keywords.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <h4 className="text-xs font-semibold text-muted-foreground mb-1">Keywords:</h4>
                          <div className="flex flex-wrap gap-1">
                            {pub.keywords.map(kw => (
                              <span key={kw} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">{kw}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-8">No publications in this category for {new Date().getFullYear()} or earlier.</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
