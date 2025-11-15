
import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { SparklesIcon } from './icons';

interface QuestionCardProps {
  question: string | null;
  answer: string | null;
  isGeneratingQuestion: boolean;
  isRevealingAnswer: boolean;
  onGenerateQuestion: () => void;
  onRevealAnswer: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  isGeneratingQuestion,
  isRevealingAnswer,
  onGenerateQuestion,
  onRevealAnswer,
}) => {
  const isButtonDisabled = isGeneratingQuestion || isRevealingAnswer;

  return (
    <div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col min-h-[300px]">
      <div className="flex-grow">
        {isGeneratingQuestion && (
          <div className="flex flex-col items-center justify-center h-full">
            <LoadingSpinner />
            <p className="mt-4 text-slate-400">Generating your question...</p>
          </div>
        )}

        {!isGeneratingQuestion && !question && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <SparklesIcon className="h-12 w-12 text-slate-500 mb-4" />
            <h2 className="text-xl font-semibold text-slate-300">Ready to learn?</h2>
            <p className="text-slate-400 mt-2">Select a topic and click the button below to start.</p>
          </div>
        )}
        
        {question && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Question</h3>
              <p className="text-lg text-slate-100">{question}</p>
            </div>
            {isRevealingAnswer ? (
              <div className="flex items-center space-x-3">
                <LoadingSpinner size="sm" />
                <p className="text-slate-400">Revealing answer...</p>
              </div>
            ) : answer ? (
              <div className="border-t border-slate-700 pt-4 animate-fade-in">
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Answer</h3>
                <p className="text-lg text-slate-300">{answer}</p>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row gap-4">
        <button
          onClick={onGenerateQuestion}
          disabled={isButtonDisabled}
          className="w-full sm:w-1/2 flex-1 bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingQuestion ? 'Generating...' : 'New Question'}
        </button>
        <button
          onClick={onRevealAnswer}
          disabled={!question || !!answer || isButtonDisabled}
          className="w-full sm:w-1/2 flex-1 bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRevealingAnswer ? 'Revealing...' : 'Reveal Answer'}
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuestionCard;
