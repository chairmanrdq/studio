import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teaching & Courses',
  description: 'Information on courses taught by Dr. Eleanor Vance, including syllabi and resources.', // Replace
};

// Mock Data - Replace with actual data
const coursesData = [
  {
    id: "cs501",
    title: "CS 501: Advanced Natural Language Processing",
    term: "Fall 2024",
    level: "Graduate",
    description: "This course delves into state-of-the-art techniques in natural language processing, including advanced deep learning models (Transformers, GNNs) for various NLP tasks, ethical considerations in language technology, and current research frontiers. Students will engage in a semester-long research project.",
    syllabusUrl: "#", // Replace with actual URL or path to PDF
    coursePageUrl: "#", // Replace with actual URL to Canvas/Moodle/etc.
    resources: [
      { name: "Lecture Slides (Topic 1)", url: "#" },
      { name: "Core Reading List", url: "#" },
    ]
  },
  {
    id: "cs305",
    title: "CS 305: Introduction to Artificial Intelligence",
    term: "Spring 2024",
    level: "Undergraduate",
    description: "A foundational course in Artificial Intelligence, covering core concepts such as search algorithms, knowledge representation and reasoning, machine learning fundamentals, and an introduction to specialized AI areas like NLP and computer vision. Includes hands-on programming assignments.",
    syllabusUrl: "#", // Replace
    coursePageUrl: "#", // Replace
    resources: [
      { name: "Full Course Notes (PDF)", url: "#" },
      { name: "Assignment Guidelines", url: "#" },
    ]
  },
  {
    id: "ds101",
    title: "DS 101: Data Science Fundamentals (Guest Lectures)",
    term: "Fall 2023",
    level: "Undergraduate Seminar",
    description: "Contributed guest lectures on 'Text as Data: NLP for Data Scientists' and 'Ethical Challenges in Algorithmic Decision Making' as part of this interdisciplinary data science seminar.",
    resources: [
      { name: "Guest Lecture Slides: NLP", url: "#" },
      { name: "Guest Lecture Slides: Ethics", url: "#" },
    ]
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-12">
      <SectionTitle>Teaching & Courses</SectionTitle>
      <div className="space-y-8">
        {coursesData.map(course => (
          <Card key={course.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                <CardTitle className="text-xl md:text-2xl text-primary/90">{course.title}</CardTitle>
                <span className="text-sm text-muted-foreground font-medium bg-secondary px-2 py-1 rounded-md w-fit mt-1 sm:mt-0">{course.level}</span>
              </div>
              <CardDescription className="text-md font-medium text-accent pt-1">{course.term}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-3 items-center mb-4">
                {course.syllabusUrl && course.syllabusUrl !== "#" && (
                  <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={course.syllabusUrl} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" /> View Syllabus
                    </a>
                  </Button>
                )}
                {course.coursePageUrl && course.coursePageUrl !== "#" && (
                  <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={course.coursePageUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Course Page
                    </a>
                  </Button>
                )}
              </div>
              {course.resources.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground/90 mb-2">Course Resources:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {course.resources.map(resource => (
                       <li key={resource.name} className="text-sm">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                           {resource.name} <Download className="inline-block h-3 w-3 ml-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
