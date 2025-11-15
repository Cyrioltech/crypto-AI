
import React from 'react';

interface TopicSelectorProps {
  topics: string[];
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
  disabled: boolean;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, selectedTopic, onSelectTopic, disabled }) => {
  return (
    <div className="w-full mb-8">
      <label htmlFor="topic-select" className="block text-center text-slate-300 mb-3 font-medium text-lg">
        Choose a Topic
      </label>
      <div className="relative">
        <select
          id="topic-select"
          value={selectedTopic}
          onChange={(e) => onSelectTopic(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none bg-slate-800 border border-slate-700 text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-slate-700 focus:border-cyan-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopicSelector;
