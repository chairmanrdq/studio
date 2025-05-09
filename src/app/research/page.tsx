import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Detailed research interests and focus areas of Dr. Eleanor Vance.', // Replace
};

// Mock Data - Replace with actual data
const researchData = {
  introduction: "My research program is dedicated to advancing the frontiers of Natural Language Processing (NLP) and Machine Learning (ML). I focus on developing intelligent systems that can understand, interpret, and generate human language with greater accuracy, fairness, and efficiency. Key themes in my work include enhancing model robustness, ensuring ethical AI practices, and applying NLP/ML to solve real-world problems in domains such as healthcare, education, and social sciences.", // Replace
  detailedFocus: [
    {
      title: "Advanced Natural Language Understanding",
      description: "Developing novel deep learning architectures (e.g., advanced Transformer models, graph neural networks) for complex NLU tasks such as nuanced question answering, multi-document summarization, and fine-grained sentiment analysis. Emphasis is placed on improving model interpretability and few-shot learning capabilities.",
      keywords: ["Deep Learning", "Transformers", "Interpretability", "NLU", "Question Answering", "Summarization"]
    },
    {
      title: "Machine Learning for Semantic Technologies",
      description: "Applying machine learning techniques to extract, represent, and reason with knowledge graphs and semantic web data. This includes research on automated knowledge base construction, link prediction, ontology alignment, and integrating symbolic reasoning with neural approaches for more robust AI.",
      keywords: ["Knowledge Graphs", "Semantic Web", "Link Prediction", "Ontology Learning", "Neuro-Symbolic AI"]
    },
    {
      title: "Ethical AI and Fairness in NLP",
      description: "Investigating and mitigating biases in language models and NLP applications across various demographic groups. Developing novel frameworks and metrics for fairness, accountability, and transparency in AI systems, particularly in sensitive domains such as healthcare, legal tech, and hiring.",
      keywords: ["AI Ethics", "Fairness", "Bias Mitigation", "Transparency", "Accountability", "Responsible AI"]
    },
    {
      title: "Computational Pragmatics and Dialogue Systems",
      description: "Exploring how computational models can capture the nuances of human communication, including implicature, common ground, and context. Building more natural, engaging, and goal-oriented dialogue systems that can handle complex conversational flows and user intents.",
      keywords: ["Dialogue Systems", "Conversational AI", "Pragmatics", "Reinforcement Learning for Dialogue"]
    },
  ],
};

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      <section id="research-overview" aria-labelledby="research-overview-title">
        <SectionTitle id="research-overview-title">Research Overview</SectionTitle>
        <Card className="shadow-md border-primary/10">
          <CardContent className="pt-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {researchData.introduction}
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="research-areas" aria-labelledby="research-areas-title">
        <SectionTitle id="research-areas-title">Key Research Areas</SectionTitle>
        <div className="space-y-8">
          {researchData.detailedFocus.map((area, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary/90">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map(keyword => (
                    <Badge key={keyword} variant="secondary" className="font-normal bg-secondary hover:bg-secondary/80">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
