/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  LayoutDashboard, 
  Coins, 
  Timer, 
  ChevronRight, 
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  XCircle,
  UserCircle2,
  UserPlus,
  Network,
  Trophy,
  Plus,
  ChevronDown,
  User
} from 'lucide-react';

import { BIBLE_BOWL_QUESTIONS } from './data/questions';
import { TABERNACLE_DATA, TRAP_NUMBERS, PLAGUES } from './data/trackerData';
import { EXODUS_GENEALOGY } from './data/genealogy';
import { LeaderboardEntry, GenealogyNode } from './types';

// --- Dashboard Component ---
const Dashboard = ({ 
  currentUser, 
  onLogout,
  leaderboard 
}: { 
  currentUser: string | null; 
  onLogout: () => void;
  leaderboard: LeaderboardEntry[];
}) => {
  return (
    <div id="dashboard-view" className="flex flex-col gap-6 p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bento-highlight rounded-xl flex items-center justify-center font-bold text-lg">
              EX
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Exodus Bible Bowl 2026</h1>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">Study Team Terminal</p>
            </div>
          </div>
          {currentUser && (
            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 pl-4 rounded-2xl">
              <span className="text-[10px] font-black uppercase text-amber-500">{currentUser} Logged In</span>
              <button 
                onClick={onLogout}
                className="text-[10px] font-black uppercase bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-500 px-3 py-1.5 rounded-xl transition-all"
              >
                Switch User
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Leaderboard Section */}
          <section id="leaderboard-section" className="bento-card bg-slate-900/40">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-2">
              <Trophy size={14} className="text-amber-500" />
              Team Leaderboard
            </h2>
            <div className="space-y-2">
              {leaderboard.length === 0 ? (
                <div className="text-center py-8 bg-slate-950/50 rounded-2xl border border-slate-800 border-dashed">
                  <p className="text-xs text-slate-600 uppercase font-black tracking-widest">No drill data yet</p>
                </div>
              ) : (
                leaderboard
                  .sort((a, b) => b.correct - a.correct)
                  .map((entry, idx) => (
                    <div key={entry.name} className="flex items-center justify-between p-4 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-amber-500/30 transition-all">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-black w-6 h-6 rounded-lg flex items-center justify-center ${
                          idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white uppercase tracking-tight">{entry.name}</p>
                          <p className="text-[10px] text-slate-600 font-bold uppercase">
                            Last Played: {new Date(entry.lastPlayed).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-serif font-black text-amber-500">{entry.correct}</div>
                        <div className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">Correct Answers</div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </section>

          <section id="trap-numbers-section" className="bento-card">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-6 flex items-center gap-2">
              <AlertCircle size={14} />
              The 'Trap Numbers' Legend
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TRAP_NUMBERS.map((trap) => (
                <div key={trap.value} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
                  <div className="text-4xl font-serif font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{trap.value}</div>
                  <div className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-1">{trap.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{trap.description}</div>
                  <div className="text-slate-600 text-[9px] mt-4 font-bold border-t border-slate-800 pt-3 italic">{trap.reference}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4">
          <section id="target-scope-section" className="bento-card bg-slate-900/50">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Target Chapters (OSB)</h2>
            <div className="grid grid-cols-1 gap-2">
              {[
                { ch: '1–20', label: 'Israel in Egypt & Deserts' },
                { ch: '32–34', label: 'The Golden Calf & Covenant' },
                { ch: '38–40', label: 'Tabernacle Construction' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-amber-500 font-bold text-sm">Ch. {item.ch}</span>
                  <span className="text-slate-500 text-[10px] font-medium uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="quote-section" className="bento-card flex flex-col justify-center border-l-4 border-l-amber-500">
            <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Memory Verse</div>
            <p className="text-lg font-serif text-slate-200 italic leading-relaxed">
              "Be of good courage, for God is come to test you, that His fear may be among you so you may not sin." 
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
               <span className="text-amber-500 font-bold text-xs">Exodus 20:20</span>
               <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-[8px] font-black text-blue-400">NA</div>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-[8px] font-black text-emerald-400">NO</div>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- Daily Drill Component ---
const DailyDrill = ({ 
  currentUser, 
  onRecordScore 
}: { 
  currentUser: string | null; 
  onRecordScore: (correct: boolean) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [drillMode, setDrillMode] = useState<'fitb' | 'mc' | 'tf' | 'short' | 'all'>('all');
  const [feedback, setFeedback] = useState<{ id: string, status: 'correct' | 'incorrect', userValue?: string } | null>(null);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const [userInput, setUserInput] = useState('');

  const filteredQuestions = useMemo(() => {
    if (drillMode === 'all') return BIBLE_BOWL_QUESTIONS;
    return BIBLE_BOWL_QUESTIONS.filter(q => q.type === drillMode);
  }, [drillMode]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setFeedback(null);
    setUserInput('');
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setFeedback(null);
    setUserInput('');
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const handleScore = (isCorrect: boolean, userValue?: string) => {
    if (!currentUser || feedback) return;
    
    setFeedback({ id: currentQuestion.id, status: isCorrect ? 'correct' : 'incorrect', userValue });
    setSessionScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    onRecordScore(isCorrect);
    
    // Auto-reveal the card to show reference
    setShowAnswer(true);
    
    if (isCorrect) {
      setTimeout(handleNext, 2000);
    }
  };

  const checkTextAnswer = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const cleanUser = userInput.toLowerCase().trim();
    const cleanTarget = currentQuestion.answer.toLowerCase().trim();
    
    // Basic fuzzy match for multi-word answers
    const isCorrect = cleanUser === cleanTarget || (cleanTarget.length > 3 && cleanTarget.includes(cleanUser) && cleanUser.length > 2);
    handleScore(isCorrect, userInput);
  };

  if (!currentUser) {
    return (
      <div className="p-6 flex flex-col items-center justify-center animate-in fade-in duration-500">
        <div className="bento-card max-w-sm w-full text-center">
          <UserCircle2 size={48} className="mx-auto mb-4 text-amber-500" />
          <h2 className="text-xl font-bold mb-2">Identify Yourself</h2>
          <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-6">Choose user to track scores</p>
          <div className="space-y-4">
             <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Select Team Member</div>
             <p className="text-xs text-slate-400 italic">Please select a user from the Monitor tab to begin tracking your progress.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div id="drill-view" className="p-6 flex flex-col gap-4 h-full max-w-3xl mx-auto">
      {/* Session Score Header */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-3xl mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
             <BookOpen size={16} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Active Drill</p>
            <p className="text-xs font-bold text-white uppercase">{currentUser}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-right">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Efficiency</p>
              <p className="text-sm font-black text-amber-500">
                {sessionScore.total > 0 ? Math.round((sessionScore.correct / sessionScore.total) * 100) : 0}%
              </p>
           </div>
           <div className="bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800 flex items-baseline gap-2">
              <span className="text-lg font-serif font-black text-emerald-500">{sessionScore.correct}</span>
              <span className="text-[10px] font-black text-slate-700 uppercase">/ {sessionScore.total}</span>
           </div>
        </div>
      </div>

      <header className="mb-2">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Practice Mode</h2>
        <div className="flex gap-2 mb-2 overflow-x-auto pb-4 scrollbar-hide">
          {(['all', 'fitb', 'mc', 'tf', 'short'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => { setDrillMode(mode); setCurrentIndex(0); setShowAnswer(false); setFeedback(null); setUserInput(''); }}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shrink-0 border ${
                drillMode === mode 
                  ? 'bento-highlight border-amber-400' 
                  : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300 hover:border-slate-700'
              }`}
            >
              {mode === 'all' ? 'All' : mode === 'fitb' ? 'Fill' : mode === 'mc' ? 'Options' : mode === 'tf' ? 'T/F' : 'Short'}
            </button>
          ))}
        </div>
      </header>

      <div className="relative h-[480px] perspective-1000">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-full"
        >
          <div 
            id="flashcard-container"
            className={`w-full h-full rounded-[40px] p-10 flex flex-col justify-center items-center text-center transition-all duration-700 preserve-3d shadow-2xl border ${
              showAnswer 
                ? 'bg-amber-500 text-slate-950 border-amber-400 [transform:rotateY(180deg)]' 
                : 'bg-slate-900 text-slate-100 border-slate-800'
            }`}
          >
            <div className={`backface-hidden w-full ${showAnswer ? 'hidden' : 'block'}`}>
              <div className="flex justify-between items-center w-full mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Exodus Round</span>
                <span className="px-3 py-1 bg-slate-950 rounded-full text-[10px] font-mono text-slate-400 border border-slate-800">
                  {currentIndex + 1} / {filteredQuestions.length}
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-10 text-balance">
                "{currentQuestion.question}"
              </p>
              
              {/* Interactive MC Options */}
              {currentQuestion.type === 'mc' && currentQuestion.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl mx-auto">
                  {currentQuestion.options.map((opt, i) => {
                    const char = String.fromCharCode(65 + i);
                    return (
                      <button 
                        key={i} 
                        onClick={() => handleScore(currentQuestion.answer.includes(char), char)}
                        className="px-5 py-4 bg-slate-950/80 rounded-2xl text-sm border border-slate-800 text-left hover:border-amber-500/50 transition-colors group"
                      >
                        <span className="text-amber-500 font-black mr-3 group-hover:text-white transition-colors">{char}</span> {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Interactive TF Options */}
              {currentQuestion.type === 'tf' && (
                <div className="flex gap-4 w-full max-w-sm mx-auto">
                  {['True', 'False'].map((choice) => (
                    <button
                      key={choice}
                      onClick={() => handleScore(currentQuestion.answer === choice, choice)}
                      className="flex-1 px-8 py-5 bg-slate-950 rounded-2xl border border-slate-800 font-bold uppercase tracking-widest text-xs hover:border-amber-500/50 hover:bg-slate-900 transition-all"
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}

              {/* Interactive Text Input */}
              {(currentQuestion.type === 'fitb' || currentQuestion.type === 'short') && (
                <form onSubmit={checkTextAnswer} className="w-full max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your answer..."
                    className="w-full bg-slate-950 border border-slate-800 p-4 rounded-2xl text-center outline-none focus:border-amber-500 transition-colors text-white font-serif"
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-white text-slate-950 font-black uppercase text-xs tracking-[.2em]"
                  >
                    Check Answer
                  </button>
                </form>
              )}

              {currentQuestion.hint && (
                <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-600 italic">
                  Hint: {currentQuestion.hint}
                </div>
              )}
            </div>

            <div className={`backface-hidden [transform:rotateY(180deg)] w-full p-8 ${showAnswer ? 'block' : 'hidden'}`}>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                {feedback?.status === 'correct' ? (
                  <>
                    <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6 border-4 border-emerald-500/30">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-2">Excellent!</h3>
                    <p className="text-sm font-bold opacity-70">"{currentQuestion.answer}"</p>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center text-red-600 mb-6 border-4 border-red-500/30">
                      <XCircle size={48} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Study Deeper</h3>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-black/10 text-amber-500 mb-4 w-full">
                       <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">Correct Answer</p>
                       <p className="text-xl font-black">"{currentQuestion.answer}"</p>
                       <p className="mt-2 text-slate-400 font-serif italic text-sm">Exodus {currentQuestion.reference}</p>
                    </div>
                    {!feedback && (
                      <p className="text-[10px] font-black uppercase text-slate-500 opacity-60">Flipped card to reveal</p>
                    )}
                  </>
                )}
                
                <button 
                  onClick={() => handleNext()}
                  className="mt-6 px-10 py-4 bg-slate-950 text-amber-500 font-black uppercase tracking-widest text-xs rounded-2xl border border-amber-500/20 hover:bg-amber-500/10 transition-all"
                >
                  Continue to Next
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-4 items-center mt-6">
        <button 
          id="prev-btn"
          onClick={handlePrev}
          className="p-5 rounded-2xl bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          id="reveal-btn"
          disabled={!!feedback}
          onClick={() => setShowAnswer(!showAnswer)}
          className={`flex-1 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] border border-transparent ${
            feedback ? 'bg-slate-800 text-slate-600 cursor-not-allowed opacity-50' : 'bg-white text-slate-950 hover:bg-slate-100'
          }`}
        >
          {showAnswer ? 'Hide Solution' : 'Reveal Solution'}
        </button>
        <button 
          id="next-btn"
          onClick={handleNext}
          className="p-5 rounded-2xl bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-600 transition-all active:scale-95"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// --- Tabernacle Tally Component ---
const TabernacleDashboard = () => {
  return (
    <div id="tally-view" className="p-6 space-y-6">
      <header className="mb-6">
        <h2 className="text-3xl font-serif font-black text-white italic">Construction Tally</h2>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-2 italic">Exodus Chapter 39 • OSB Data</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {TABERNACLE_DATA.map((tally) => (
          <div key={tally.metal} className="bento-card bg-slate-900/40 relative overflow-hidden group">
             {/* Background accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 blur-[80px] -mr-12 -mt-12 transition-opacity group-hover:opacity-100 opacity-40 ${
              tally.metal === 'gold' ? 'bg-amber-500' :
              tally.metal === 'silver' ? 'bg-slate-400' :
              'bg-orange-600'
            }`} />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-sm ${
                    tally.metal === 'gold' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' :
                    tally.metal === 'silver' ? 'bg-slate-400' :
                    'bg-orange-600'
                  }`} />
                  <h3 className="text-xl font-black uppercase tracking-widest text-white">
                    {tally.metal}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 max-w-sm italic leading-relaxed">{tally.description}</p>
              </div>
              <div className="flex gap-8 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-1">Talents</span>
                  <span className="text-3xl font-serif font-black text-white">{tally.talents}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-1">Shekels</span>
                  <span className="text-2xl font-serif font-black text-slate-400">{tally.shekels}</span>
                </div>
              </div>
            </div>
            {tally.manCount && (
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Survey Data (Numbered Men)</span>
                <span className="text-lg font-serif font-black text-amber-500 tracking-tight">{tally.manCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h4 className="text-[10px] font-black text-slate-600 uppercase mb-3 tracking-[0.3em]">Material Hierarchy</h4>
          <div className="flex gap-1.5">
            <div className="w-12 h-1.5 rounded-full bg-amber-500" />
            <div className="w-8 h-1.5 rounded-full bg-slate-400" />
            <div className="w-6 h-1.5 rounded-full bg-orange-700" />
          </div>
        </div>
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">OSB Specifics</div>
      </div>
    </div>
  );
};

// --- Genealogy Components ---
// Helper to highlight key figures
const isActiveNode = (node: GenealogyNode) => {
  const keys = ['Levi', 'Kohath', 'Amram', 'Moses', 'Aaron', 'Miriam'];
  return keys.includes(node.name);
};

interface GenealogyNodeItemProps {
  node: GenealogyNode;
  level?: number;
}

const GenealogyNodeItem = ({ node, level = 0 }: GenealogyNodeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(level < 1);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`flex flex-col ${level > 0 ? 'ml-4 md:ml-8 border-l border-slate-800 pl-4 md:pl-6 my-2' : 'mb-4'}`}>
      <div 
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
          isActiveNode(node) 
            ? 'bg-amber-500/10 border-amber-500/30' 
            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
        } ${hasChildren ? 'cursor-pointer' : ''}`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            node.name === 'Moses' || node.name === 'Aaron' || node.name === 'Miriam'
              ? 'bg-amber-500 text-slate-950'
              : 'bg-slate-800 text-slate-400'
          }`}>
             {node.spouse ? <UserCircle2 size={16} /> : <User size={16} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-white uppercase tracking-tight">{node.name}</p>
              {node.age && (
                <span className="text-[9px] font-black bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">
                  {node.age} yrs
                </span>
              )}
            </div>
            {node.spouse && (
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                Spouse: <span className="text-amber-500/80">{node.spouse}</span>
              </p>
            )}
            {node.notes && (
              <p className="text-[9px] text-slate-600 italic mt-0.5">{node.notes}</p>
            )}
          </div>
        </div>
        
        {hasChildren && (
          <ChevronDown 
            size={16} 
            className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {node.children!.map((child, idx) => (
            <div key={`${child.name}-${idx}`}>
              <GenealogyNodeItem node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const GenealogyView = () => {
  return (
    <div id="genealogy-view" className="p-6 max-w-3xl mx-auto space-y-6">
      <header className="mb-8">
        <h2 className="text-3xl font-serif font-black text-white italic">Exodus 6 Genealogy</h2>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-2 italic">Seed of Jacob • Levitical Priesthood Line</p>
      </header>

      <div className="space-y-4">
        {EXODUS_GENEALOGY.map((family, idx) => (
          <div key={family.name} className="bento-card bg-slate-900/40 p-4 md:p-6 mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              House of {family.name}
            </h3>
            <GenealogyNodeItem node={family} />
          </div>
        ))}
      </div>

      <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl mt-8">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Family Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-amber-500" />
              <span className="text-[9px] font-bold text-slate-400 uppercase">Key Deliverers</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-500/30" />
              <span className="text-[9px] font-bold text-slate-400 uppercase">Ages Recorded</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-slate-800" />
              <span className="text-[9px] font-bold text-slate-400 uppercase">Extended Kin</span>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Mnemonic Practice Component ---
const MnemonicView = () => {
  const [userInput, setUserInput] = useState<string[]>(Array(10).fill(''));
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
      setCompleted(true);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const startTimer = () => {
    setIsTimerRunning(true);
    setCompleted(false);
    setTimeLeft(600);
    setUserInput(Array(10).fill(''));
  };

  const resetGame = () => {
    setIsTimerRunning(false);
    setTimeLeft(600);
    setUserInput(Array(10).fill(''));
    setCompleted(false);
  };

  const checkPlagues = () => {
    setCompleted(true);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div id="mnemonics-view" className="p-6 flex flex-col h-full max-w-2xl mx-auto">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-serif font-black text-white italic">Mnemonic Challenge</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">10 Plagues in Sequence</p>
        </div>
        <div className={`px-5 py-3 rounded-2xl border font-mono text-xl font-black ${
          timeLeft < 60 ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] text-white border-red-400' : 'bg-slate-950 text-amber-500 border-slate-800'
        }`}>
          {formatTime(timeLeft)}
        </div>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto pr-3 mb-8 scrollbar-hide">
        {PLAGUES.map((plague, i) => {
          const isCorrect = completed && userInput[i].toLowerCase().trim() === plague.toLowerCase().replace(/\s*\(.*\)/, '').trim();
          return (
            <div key={i} className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-800 group-hover:text-amber-500/50 transition-colors pointer-events-none tracking-tighter">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <input
                disabled={completed || !isTimerRunning}
                autoComplete="off"
                placeholder={completed ? plague : isTimerRunning ? "Enter plague name..." : "Starts when timer begins"}
                value={userInput[i]}
                onChange={(e) => {
                  const newArr = [...userInput];
                  newArr[i] = e.target.value;
                  setUserInput(newArr);
                }}
                className={`w-full pl-12 pr-12 py-4 rounded-xl bg-slate-950 border transition-all text-sm focus:ring-1 focus:ring-amber-500 font-medium ${
                  completed 
                    ? isCorrect ? 'border-emerald-500/50 bg-emerald-500/10 text-white' : 'border-red-500/50 bg-red-500/10 text-white'
                    : 'border-slate-800 opacity-60 focus:opacity-100'
                }`}
              />
              {completed && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {isCorrect ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertCircle size={16} className="text-red-500" />}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        {!isTimerRunning && !completed ? (
          <button id="start-btn" onClick={startTimer} className="flex-1 bento-highlight py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-transform">
            Launch Time Trial
          </button>
        ) : (
          <>
            <button id="reset-btn" onClick={resetGame} className="p-5 rounded-2xl bg-slate-900 text-slate-500 border border-slate-800 hover:text-white transition-all">
              <RotateCcw size={20} />
            </button>
            {!completed && (
              <button 
                id="submit-btn"
                onClick={checkPlagues}
                className="flex-1 bg-white text-slate-950 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-transform"
              >
                End Session
              </button>
            )}
            {completed && (
              <button id="retry-btn" onClick={startTimer} className="flex-1 bento-highlight py-5 rounded-2xl font-black uppercase tracking-widest text-xs">
                Retry Challenge
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// --- Main App Entry ---
export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'drill' | 'tally' | 'mnemonic' | 'genealogy'>('dashboard');
  const [teamMembers, setTeamMembers] = useState<string[]>(() => {
    const saved = localStorage.getItem('exodus_team_members');
    return saved ? JSON.parse(saved) : ['Nathaniel', 'Noah', 'Admin'];
  });
  const [newMemberName, setNewMemberName] = useState('');
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return localStorage.getItem('exodus_current_user');
  });

  useEffect(() => {
    localStorage.setItem('exodus_team_members', JSON.stringify(teamMembers));
  }, [teamMembers]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    const saved = localStorage.getItem('exodus_leaderboard');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('exodus_current_user', currentUser);
    } else {
      localStorage.removeItem('exodus_current_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('exodus_leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const handleRecordScore = (isCorrect: boolean) => {
    if (!currentUser) return;

    setLeaderboard(prev => {
      const existing = prev.find(e => e.name === currentUser);
      if (existing) {
        return prev.map(e => e.name === currentUser ? {
          ...e,
          correct: e.correct + (isCorrect ? 1 : 0),
          total: e.total + 1,
          lastPlayed: Date.now()
        } : e);
      } else {
        return [...prev, {
          name: currentUser,
          correct: isCorrect ? 1 : 0,
          total: 1,
          lastPlayed: Date.now()
        }];
      }
    });
  };

  const handleAddMember = (e: FormEvent) => {
    e.preventDefault();
    const name = newMemberName.trim();
    if (name && !teamMembers.includes(name)) {
      setTeamMembers(prev => [...prev, name]);
      setCurrentUser(name);
      setNewMemberName('');
    } else if (teamMembers.includes(name)) {
      setCurrentUser(name);
      setNewMemberName('');
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Monitor', icon: LayoutDashboard },
    { id: 'drill', label: 'Drill', icon: BookOpen },
    { id: 'tally', label: 'Tally', icon: Coins },
    { id: 'mnemonic', label: 'Memory', icon: Timer },
    { id: 'genealogy', label: 'Seed', icon: Network },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* User Login Overlay (if no user) */}
      {!currentUser && activeTab !== 'dashboard' && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6">
           <div className="bento-card max-w-md w-full animate-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-serif font-black text-white italic mb-2 text-center">Identify Yourself</h2>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-8 text-center pb-6 border-b border-slate-800">Choose team member or add your name</p>
              
              {/* Add New Member Input */}
              <form onSubmit={handleAddMember} className="mb-8 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <p className="text-[9px] font-black uppercase text-slate-600 mb-3 tracking-widest">New Team Member?</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    placeholder="Enter your name..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:border-amber-500 outline-none"
                  />
                  <button 
                    type="submit"
                    className="bg-amber-500 text-slate-950 p-2 rounded-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </form>

              <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                {teamMembers.map((name) => (
                  <button
                    key={name}
                    onClick={() => { setCurrentUser(name); }}
                    className="w-full py-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500 hover:bg-amber-500/5 transition-all flex items-center justify-between px-6 group"
                  >
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white uppercase tracking-tight">{name}</span>
                    <UserCircle2 size={20} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                  </button>
                ))}
              </div>
              <p className="mt-8 text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] text-center italic">Welcome Holy Resurrection Bible Bowl Team 2026</p>
           </div>
        </div>
      )}

      {/* App Header (Bento Style) */}
      <div className="max-w-4xl mx-auto pt-6 px-4 hidden md:block">
        <div className="flex justify-between items-center bg-slate-900/50 border border-slate-800 p-4 rounded-3xl backdrop-blur-xl">
           <div className="text-[10px] font-black text-amber-500 tracking-[0.5em] uppercase">Exodus Bible Bowl 2026 Study Terminal</div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Team Online</span>
              </div>
              <div className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">Revision v1.4</div>
           </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <main className="pb-32 pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'dashboard' && (
              <Dashboard 
                currentUser={currentUser} 
                onLogout={() => setCurrentUser(null)}
                leaderboard={leaderboard}
              />
            )}
            {activeTab === 'drill' && (
              <DailyDrill 
                currentUser={currentUser} 
                onRecordScore={handleRecordScore}
              />
            )}
            {activeTab === 'tally' && <TabernacleDashboard />}
            {activeTab === 'mnemonic' && <MnemonicView />}
            {activeTab === 'genealogy' && <GenealogyView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bento Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-10 pt-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
        <div className="max-w-lg mx-auto bg-slate-900 border border-slate-800 rounded-[32px] p-2 flex justify-around shadow-2xl relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl transition-all relative flex-1 group ${
                  isActive ? 'text-amber-500' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-amber-500/10 rounded-2xl border border-amber-500/20" 
                  />
                )}
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]' : 'group-hover:scale-110 transition-transform'} />
                <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[-1]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </div>
  );
}
