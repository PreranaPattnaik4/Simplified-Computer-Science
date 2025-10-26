
'use client'

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { marked } from 'marked';
import { cn } from '@/lib/utils';

type Option = {
    id: string;
    text: string;
}

type Lesson = {
    title: string;
    content: string;
    options?: Option[];
    correctAnswer?: string;
    explanation?: string;
}

type QuizProps = {
    lesson: Lesson;
    onCorrect: () => void;
}

export default function Quiz({ lesson, onCorrect }: QuizProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const isCorrect = selectedAnswer === lesson.correctAnswer;

    const handleCheckAnswer = () => {
        if (selectedAnswer) {
            setShowFeedback(true);
            if (selectedAnswer === lesson.correctAnswer) {
                onCorrect();
            }
        }
    };
    
    const handleTryAgain = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    const parsedQuestion = useMemo(() => {
        if (lesson.content) {
            try {
                return marked(lesson.content);
            } catch (error) {
                console.error("Error parsing markdown:", error);
                return "<p>Error rendering question.</p>";
            }
        }
        return '';
    }, [lesson.content]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-space-grotesk">{lesson.title}</CardTitle>
                <CardDescription>Select the correct answer below.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose lg:prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: parsedQuestion }} />

                <div className="space-y-4">
                    {lesson.options?.map((option) => {
                        const isSelected = selectedAnswer === option.id;
                        let borderColor = 'border-gray-300';
                        if (showFeedback) {
                            if (option.id === lesson.correctAnswer) {
                                borderColor = 'border-green-500';
                            } else if (isSelected && option.id !== lesson.correctAnswer) {
                                borderColor = 'border-red-500';
                            }
                        } else if (isSelected) {
                            borderColor = 'border-accent';
                        }
                        
                        return (
                            <div
                                key={option.id}
                                className={cn(
                                    "flex items-center space-x-4 rounded-md border p-4 cursor-pointer transition-all",
                                    borderColor,
                                    showFeedback ? 'cursor-not-allowed' : 'hover:bg-accent/10',
                                    isSelected && !showFeedback ? 'bg-accent/10' : ''
                                )}
                                onClick={() => !showFeedback && setSelectedAnswer(option.id)}
                            >
                                <div className={cn(
                                    "flex h-6 w-6 items-center justify-center rounded-full border text-sm font-semibold",
                                    isSelected || (showFeedback && option.id === lesson.correctAnswer) ? "bg-accent text-accent-foreground border-accent" : ""
                                )}>
                                    {option.id}
                                </div>
                                <p className="flex-1">{option.text}</p>
                                {showFeedback && option.id === lesson.correctAnswer && <CheckCircle className="text-green-500" />}
                                {showFeedback && isSelected && option.id !== lesson.correctAnswer && <XCircle className="text-red-500" />}
                            </div>
                        )
                    })}
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-6">
                {!showFeedback ? (
                    <Button onClick={handleCheckAnswer} disabled={!selectedAnswer}>
                        Check Answer
                    </Button>
                ) : (
                    <div className="w-full">
                        <div className={cn("p-4 rounded-md mb-4", isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')}>
                            <h4 className="font-bold text-lg flex items-center gap-2">
                                {isCorrect ? <><CheckCircle /> Correct! Great job.</> : <><XCircle /> Not quite</>}
                            </h4>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Explanation</h4>
                            <p className="text-muted-foreground">{lesson.explanation}</p>
                        </div>
                        {!isCorrect && (
                            <Button onClick={handleTryAgain} className="mt-6">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Try Again
                            </Button>
                        )}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
