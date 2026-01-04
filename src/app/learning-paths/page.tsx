
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Edit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderImages from '@/app/lib/placeholder-images.json';


export default function LearningPathsPage() {
    return (
        <div className="bg-black text-white">
            {/* Hero */}
            <section className="text-center py-20 md:py-32">
                <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk">SCS Learning Paths</h1>
                <p className="text-xl md:text-2xl mt-4" style={{ color: '#FFD700' }}>
                    A Product-First Approach to Computer Science Education.
                </p>
            </section>

            {/* Design Logic */}
            <section className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-center mb-6">Built to Prevent Burnout.</h2>
                    <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                        We use a model called "Progressive Disclosure." Instead of overwhelming you with information, we reveal complex topics in simple, bite-sized layers. This builds intuition, not frustration, ensuring you master concepts without getting stuck.
                    </p>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={placeholderImages.learningPathRoadmap.src}
                            alt="Interactive Roadmap"
                            fill
                            className="object-cover"
                            data-ai-hint={placeholderImages.learningPathRoadmap.hint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                         <div className="absolute bottom-4 left-4 p-4 bg-black/50 rounded-lg backdrop-blur-sm">
                            <p className="font-bold text-white">Each node on your path is a visual analogy, making abstract concepts tangible.</p>
                         </div>
                    </div>
                </div>
            </section>

            {/* Bento Box */}
             <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-center mb-12">Features Designed for Clarity</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Visual UX Card */}
                        <Card className="col-span-1 lg:col-span-2 bg-gray-900 border-gray-700">
                             <CardHeader>
                                <CardTitle className="text-2xl font-space-grotesk flex items-center gap-2" style={{ color: '#FFD700' }}>
                                    <Zap size={24} />
                                    Visual-First Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-6">We transform complex diagrams into simplified, intuitive visuals. See the difference for yourself.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-sm font-bold mb-2 text-gray-400">TYPICAL DIAGRAM</p>
                                        <div className="border border-gray-600 rounded-lg p-2 aspect-square flex items-center justify-center bg-gray-800">
                                            <Image src={placeholderImages.complexDiagram.src} alt="Complex Diagram" width={200} height={200} className="rounded-md" data-ai-hint={placeholderImages.complexDiagram.hint}/>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold mb-2" style={{ color: '#FFD700' }}>SCS VISUAL</p>
                                        <div className="border rounded-lg p-2 aspect-square flex items-center justify-center bg-gray-800" style={{ borderColor: '#FFD700' }}>
                                            <Image src={placeholderImages.simpleDiagram.src} alt="Simplified Diagram" width={200} height={200} className="rounded-md" data-ai-hint={placeholderImages.simpleDiagram.hint}/>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/* Practice Hub Card */}
                        <Card className="bg-gray-900 border-gray-700">
                             <CardHeader>
                                <CardTitle className="text-2xl font-space-grotesk flex items-center gap-2" style={{ color: '#FFD700' }}>
                                    <Edit2 size={24} />
                                    The Practice Hub
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 mb-4">Knowledge isn't enough. Apply what you learn with hands-on worksheets designed to solidify your skills.</p>
                                <div className="border border-gray-600 rounded-lg p-4 bg-gray-800">
                                    <h4 className="font-semibold mb-2">Worksheet: Python Loops</h4>
                                    <ul className="text-sm text-gray-400 space-y-2">
                                        <li className="flex items-center gap-2"><Check size={16} /> Exercise 1: Sum of a list</li>
                                        <li className="flex items-center gap-2"><Check size={16} /> Exercise 2: Find the maximum</li>
                                        <li className="flex items-center gap-2"><Check size={16} /> Exercise 3: Pattern printing</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            {/* Floating CTA */}
            <div className="fixed bottom-8 right-8 z-50">
                <Link href="/courses-live">
                    <Button
                        size="lg"
                        className="rounded-full h-14 px-8 text-lg font-bold shadow-lg transition-transform hover:scale-105"
                        style={{ backgroundColor: '#FFD700', color: '#000000' }}
                    >
                        Join Path
                    </Button>
                </Link>
            </div>
        </div>
    );
}
