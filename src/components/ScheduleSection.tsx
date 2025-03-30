
import React from 'react';
import { Clock } from 'lucide-react';

const ScheduleSection = () => {
  const scheduleItems = [
    { time: "09:00 - 09:30", title: "Registration & Coffee", speaker: "", type: "break" },
    { time: "09:30 - 10:00", title: "Opening Keynote: The AI Security Multiverse", speaker: "Dr. Sarah Chen", type: "keynote" },
    { time: "10:00 - 10:45", title: "Red Teaming LLMs: Practical Techniques", speaker: "Alex Mercer", type: "talk" },
    { time: "10:45 - 11:30", title: "Adversarial Examples in Computer Vision", speaker: "Maya Williams", type: "talk" },
    { time: "11:30 - 12:00", title: "Coffee Break", speaker: "", type: "break" },
    { time: "12:00 - 12:45", title: "The Art of Prompt Injection Attacks", speaker: "David Cohen", type: "talk" },
    { time: "12:45 - 13:45", title: "Lunch Break", speaker: "", type: "break" },
    { time: "13:45 - 14:30", title: "Data Poisoning: Undermining Model Integrity", speaker: "Olivia Parker", type: "talk" },
    { time: "14:30 - 15:15", title: "Securing AI Systems in Production", speaker: "James Wilson", type: "talk" },
    { time: "15:15 - 15:45", title: "Coffee Break", speaker: "", type: "break" },
    { time: "15:45 - 16:30", title: "Panel Discussion: Future of AI Security", speaker: "Various Speakers", type: "panel" },
    { time: "16:30 - 17:30", title: "Hands-on Workshop: Build Your Own Model Jailbreak", speaker: "Hacker Team", type: "workshop" },
    { time: "17:30 - 18:00", title: "Closing Remarks & Networking", speaker: "", type: "break" }
  ];

  return (
    <section id="schedule" className="py-20 px-4 relative bg-comic-blue/10">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 w-12 bg-comic-yellow"></div>
          <h2 className="font-bangers text-5xl px-4 text-white comic-text-stroke">EVENT SCHEDULE</h2>
          <div className="h-0.5 w-12 bg-comic-yellow"></div>
        </div>
        
        {/* Info box */}
        <div className="bg-comic-blue p-6 comic-border text-white mb-12 max-w-xl mx-auto">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 flex-shrink-0" />
            <p className="font-comic text-lg">
              Schedule is subject to change. All sessions will take place at Tel Aviv University on Thursday, June 26, 2025.
            </p>
          </div>
        </div>
        
        {/* Schedule table */}
        <div className="comic-panel-jagged bg-white overflow-hidden overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-comic-black text-white">
                <th className="py-4 px-6 font-bangers text-xl">TIME</th>
                <th className="py-4 px-6 font-bangers text-xl">SESSION</th>
                <th className="py-4 px-6 font-bangers text-xl">SPEAKER</th>
              </tr>
            </thead>
            <tbody>
              {scheduleItems.map((item, index) => (
                <tr 
                  key={index} 
                  className={`
                    border-b border-gray-200 
                    ${item.type === 'break' ? 'bg-gray-100' : ''}
                    ${item.type === 'keynote' ? 'bg-comic-yellow/20' : ''}
                    ${item.type === 'panel' ? 'bg-comic-blue/20' : ''}
                    ${item.type === 'workshop' ? 'bg-comic-red/20' : ''}
                  `}
                >
                  <td className="py-4 px-6 font-comic font-bold">{item.time}</td>
                  <td className="py-4 px-6 font-comic">
                    {item.title}
                    {item.type === 'keynote' && (
                      <span className="ml-2 inline-block px-2 py-1 bg-comic-yellow text-xs rounded-full text-black font-bold">KEYNOTE</span>
                    )}
                    {item.type === 'workshop' && (
                      <span className="ml-2 inline-block px-2 py-1 bg-comic-red text-xs rounded-full text-white font-bold">WORKSHOP</span>
                    )}
                    {item.type === 'panel' && (
                      <span className="ml-2 inline-block px-2 py-1 bg-comic-blue text-xs rounded-full text-white font-bold">PANEL</span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-comic">{item.speaker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
