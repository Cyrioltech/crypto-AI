
import React, { useState, useCallback } from 'react';
import { generateQuestion, generateAnswer } from './services/geminiService';
import { CRYPTO_TOPICS } from './constants';
import TopicSelector from './components/TopicSelector';
import QuestionCard from './components/QuestionCard';
import { LogoIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(CRYPTO_TOPICS[0]);
  const [question, setQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState<boolean>(false);
  const [isRevealingAnswer, setIsRevealingAnswer] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuestion = useCallback(async () => {
    setIsGeneratingQuestion(true);
    setQuestion(null);
    setAnswer(null);
    setError(null);
    try {
      const newQuestion = await generateQuestion(selectedTopic);
      setQuestion(newQuestion);
    } catch (err) {
      setError('Failed to generate a question. Please try again.');
      console.error(err);
    } finally {
      setIsGeneratingQuestion(false);
    }
  }, [selectedTopic]);

  const handleRevealAnswer = useCallback(async () => {
    if (!question) return;
    setIsRevealingAnswer(true);
    setError(null);
    try {
      const newAnswer = await generateAnswer(question);
      setAnswer(newAnswer);
    } catch (err) {
      setError('Failed to generate the answer. Please try again.');
      console.error(err);
    } finally {
      setIsRevealingAnswer(false);
    }
  }, [question]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <LogoIcon className="h-10 w-10 text-cyan-400" />
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            CryptoLearn AI
          </h1>
        </div>
        <p className="text-slate-400 text-lg">Your AI-powered guide to the world of crypto.</p>
      </header>
      
      <main className="w-full max-w-2xl flex-grow flex flex-col items-center">
        <TopicSelector
          topics={CRYPTO_TOPICS}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
          disabled={isGeneratingQuestion || isRevealingAnswer}
        />
        
        {error && <div className="mt-4 text-red-400 bg-red-900/50 p-3 rounded-lg w-full text-center">{error}</div>}

        <QuestionCard
          question={question}
          answer={answer}
          isGeneratingQuestion={isGeneratingQuestion}
          isRevealingAnswer={isRevealingAnswer}
          onGenerateQuestion={handleGenerateQuestion}
          onRevealAnswer={handleRevealAnswer}
        />
      </main>
      
      <footer className="w-full max-w-4xl text-center mt-8 text-slate-500 text-sm">
        <p>Powered by Gemini API. Content is for educational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
