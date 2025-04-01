import React from 'react';
import { Clock, Coffee, Utensils, Mic, Calendar, Sun, Briefcase } from 'lucide-react';
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

// Define schedule item types
type ScheduleItemType = 'keynote' | 'talk' | 'break' | 'lunch' | 'closing';

type ScheduleItem = {
  time: string;
  title: string;
  speaker: string;
  type: ScheduleItemType;
  duration: string;
};

const ScheduleSection = () => {
  const isMobile = useIsMobile();
  
  // Morning sessions
  const morningSchedule: ScheduleItem[] = [
    { time: "09:00 – 09:45", title: "Opening Keynote – Main Event Kickoff", speaker: "—", type: "keynote", duration: "45 min" },
    { time: "09:45 – 10:10", title: "Talk", speaker: "Dor Amit", type: "talk", duration: "25 min" },
    { time: "10:10 – 10:20", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "10:20 – 11:00", title: "Talk", speaker: "Elli Shlomo", type: "talk", duration: "40 min" },
    { time: "11:00 – 11:15", title: "Break", speaker: "—", type: "break", duration: "15 min" },
    { time: "11:15 – 11:40", title: "Talk", speaker: "Alex Polyakov", type: "talk", duration: "25 min" },
    { time: "11:40 – 11:50", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "11:50 – 12:30", title: "Talk", speaker: "Vitaly Simonovich", type: "talk", duration: "40 min" },
  ];

  // Lunch break
  const lunchSchedule: ScheduleItem[] = [
    { time: "12:30 – 13:20", title: "Lunch Break", speaker: "—", type: "lunch", duration: "50 min" },
  ];

  // Afternoon sessions
  const afternoonSchedule: ScheduleItem[] = [
    { time: "13:20 – 13:45", title: "Talk", speaker: "Ran Dubin", type: "talk", duration: "25 min" },
    { time: "13:45 – 13:55", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "13:55 – 14:20", title: "Talk", speaker: "Tal Skverer", type: "talk", duration: "25 min" },
    { time: "14:20 – 14:30", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "14:30 – 15:10", title: "Talk", speaker: "Daniel Liezrowice", type: "talk", duration: "40 min" },
    { time: "15:10 – 15:25", title: "Break (after long talk)", speaker: "—", type: "break", duration: "15 min" },
    { time: "15:25 – 15:50", title: "Talk", speaker: "Ziv Karliner", type: "talk", duration: "25 min" },
    { time: "15:50 – 16:00", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "16:00 – 16:25", title: "Talk", speaker: "TBC Speaker", type: "talk", duration: "25 min" },
    { time: "16:25 – 16:35", title: "Break", speaker: "—", type: "break", duration: "10 min" },
    { time: "16:35 – 17:00", title: "Talk", speaker: "Itamar Golan", type: "talk", duration: "25 min" },
    { time: "17:00 – 17:15", title: "Break (before closing)", speaker: "—", type: "break", duration: "15 min" },
  ];

  // Closing session
  const closingSchedule: ScheduleItem[] = [
    { time: "17:15 – 18:00", title: "Closing Keynote – Wrap-Up & Reflections", speaker: "—", type: "closing", duration: "45 min" },
  ];

  // Helper function to render schedule items for mobile
  const renderMobileScheduleItems = (items: ScheduleItem[]) => {
    return items.map((item, index) => (
      <div 
        key={index} 
        className={`p-4 mb-3 rounded-lg border-2 border-comic-black
          ${item.type === 'break' ? 'bg-gray-100' : ''}
          ${item.type === 'keynote' ? 'bg-comic-yellow/20' : ''}
          ${item.type === 'lunch' ? 'bg-comic-red/10' : ''}
          ${item.type === 'closing' ? 'bg-comic-blue/20' : ''}
        `}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-comic font-bold text-comic-black">{item.time}</span>
          <span className="font-comic text-right text-comic-black">{item.duration}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          {item.type === 'break' && <Coffee size={16} className="text-gray-500" />}
          {item.type === 'lunch' && <Utensils size={16} className="text-comic-red" />}
          {(item.type === 'keynote' || item.type === 'closing') && <Mic size={16} className="text-comic-blue" />}
          <span className="font-comic text-comic-black font-bold">{item.title}</span>
          {item.type === 'keynote' && (
            <span className="ml-2 inline-block px-2 py-1 bg-comic-yellow text-xs rounded-full text-black font-bold">KEYNOTE</span>
          )}
          {item.type === 'closing' && (
            <span className="ml-2 inline-block px-2 py-1 bg-comic-blue text-xs rounded-full text-white font-bold">CLOSING</span>
          )}
        </div>
        
        {item.speaker !== "—" && (
          <div className="font-comic text-comic-black pl-6">Speaker: {item.speaker}</div>
        )}
      </div>
    ));
  };

  // Helper function to render schedule items for desktop
  const renderScheduleItems = (items: ScheduleItem[]) => {
    return items.map((item, index) => (
      <TableRow 
        key={index} 
        className={`
          ${item.type === 'break' ? 'bg-gray-100' : ''}
          ${item.type === 'keynote' ? 'bg-comic-yellow/20' : ''}
          ${item.type === 'lunch' ? 'bg-comic-red/10' : ''}
          ${item.type === 'closing' ? 'bg-comic-blue/20' : ''}
        `}
      >
        <TableCell className="py-4 px-4 font-comic font-bold whitespace-nowrap text-comic-black">{item.time}</TableCell>
        <TableCell className="py-4 px-4 font-comic text-comic-black">{item.speaker}</TableCell>
        <TableCell className="py-4 px-4 font-comic text-comic-black">
          <div className="flex items-center gap-2">
            {item.type === 'break' && <Coffee size={16} className="text-gray-500" />}
            {item.type === 'lunch' && <Utensils size={16} className="text-comic-red" />}
            {(item.type === 'keynote' || item.type === 'closing') && <Mic size={16} className="text-comic-blue" />}
            <span>{item.title}</span>
            {item.type === 'keynote' && (
              <span className="ml-2 inline-block px-2 py-1 bg-comic-yellow text-xs rounded-full text-black font-bold">KEYNOTE</span>
            )}
            {item.type === 'closing' && (
              <span className="ml-2 inline-block px-2 py-1 bg-comic-blue text-xs rounded-full text-white font-bold">CLOSING</span>
            )}
          </div>
        </TableCell>
        <TableCell className="py-4 px-4 font-comic text-right text-comic-black">{item.duration}</TableCell>
      </TableRow>
    ));
  };

  // Mobile render for lunch schedule
  const renderMobileLunchSchedule = (items: ScheduleItem[]) => {
    return items.map((item, index) => (
      <div 
        key={index} 
        className="p-4 mb-3 rounded-lg border-2 border-comic-black bg-comic-red/10"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-comic font-bold text-comic-black">{item.time}</span>
          <span className="font-comic text-right text-comic-black">{item.duration}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Utensils size={16} className="text-comic-red" />
          <span className="font-comic text-comic-black font-bold">{item.title}</span>
        </div>
      </div>
    ));
  };

  // Mobile render for closing schedule
  const renderMobileClosingSchedule = (items: ScheduleItem[]) => {
    return items.map((item, index) => (
      <div 
        key={index} 
        className="p-4 mb-3 rounded-lg border-2 border-comic-black bg-comic-blue/20"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-comic font-bold text-comic-black">{item.time}</span>
          <span className="font-comic text-right text-comic-black">{item.duration}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Mic size={16} className="text-comic-blue" />
          <span className="font-comic text-comic-black font-bold">{item.title}</span>
          <span className="ml-2 inline-block px-2 py-1 bg-comic-blue text-xs rounded-full text-white font-bold">CLOSING</span>
        </div>
      </div>
    ));
  };

  return (
    <section id="schedule" className="py-16 md:py-20 px-4 relative bg-comic-blue/10">
      <div className="max-w-6xl mx-auto">
        {/* Section title - Modified to improve contrast */}
        <div className="flex items-center justify-center mb-10 md:mb-16">
          <div className="h-0.5 w-6 md:w-12 bg-comic-yellow"></div>
          <h2 className="font-bangers text-3xl md:text-5xl px-4 text-comic-black bg-comic-white/80 py-2 rounded-lg comic-border">EVENT SCHEDULE</h2>
          <div className="h-0.5 w-6 md:w-12 bg-comic-yellow"></div>
        </div>
        
        {/* Info box */}
        <div className="bg-comic-blue p-4 md:p-6 comic-border text-white mb-8 md:mb-12 max-w-xl mx-auto">
          <div className="flex items-center gap-4">
            <Clock className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0" />
            <p className="font-comic text-base md:text-lg">
              Schedule is subject to change.
            </p>
          </div>
        </div>
        
        {/* Morning Sessions */}
        <div className="mb-8 md:mb-12">
          <div className="bg-comic-black text-white p-3 md:p-4 font-bangers text-xl md:text-2xl mb-2 comic-border inline-flex items-center gap-2">
            <Clock size={isMobile ? 20 : 24} />
            <span>Morning Sessions</span>
            <Sun size={isMobile ? 20 : 24} />
          </div>
          
          {isMobile ? (
            <div className="p-4 md:p-6 comic-panel-jagged bg-white">
              {renderMobileScheduleItems(morningSchedule)}
            </div>
          ) : (
            <div className="comic-panel-jagged bg-white overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-comic-black text-white">
                    <TableHead className="py-4 px-4 font-bangers text-xl">TIME</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SPEAKER</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SESSION</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl text-right">DURATION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {renderScheduleItems(morningSchedule)}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        
        {/* Lunch Break */}
        <div className="mb-8 md:mb-12">
          <div className="bg-comic-red text-white p-3 md:p-4 font-bangers text-xl md:text-2xl mb-2 comic-border inline-flex items-center gap-2">
            <Utensils size={isMobile ? 20 : 24} />
            <span>Lunch Break</span>
            <Calendar size={isMobile ? 20 : 24} />
          </div>
          
          {isMobile ? (
            <div className="p-4 md:p-6 comic-panel-jagged bg-white">
              {renderMobileLunchSchedule(lunchSchedule)}
            </div>
          ) : (
            <div className="comic-panel-jagged bg-white overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-comic-black text-white">
                    <TableHead className="py-4 px-4 font-bangers text-xl">TIME</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SESSION</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl text-right">DURATION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lunchSchedule.map((item, index) => (
                    <TableRow key={index} className="bg-comic-red/10">
                      <TableCell className="py-4 px-4 font-comic font-bold text-comic-black">{item.time}</TableCell>
                      <TableCell className="py-4 px-4 font-comic text-comic-black">
                        <div className="flex items-center gap-2">
                          <Utensils size={16} className="text-comic-red" />
                          <span>{item.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-4 font-comic text-right text-comic-black">{item.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        
        {/* Afternoon Sessions */}
        <div className="mb-8 md:mb-12">
          <div className="bg-comic-black text-white p-3 md:p-4 font-bangers text-xl md:text-2xl mb-2 comic-border inline-flex items-center gap-2">
            <Clock size={isMobile ? 20 : 24} />
            <span>Afternoon Sessions</span>
            <Briefcase size={isMobile ? 20 : 24} />
          </div>
          
          {isMobile ? (
            <div className="p-4 md:p-6 comic-panel-jagged bg-white">
              {renderMobileScheduleItems(afternoonSchedule)}
            </div>
          ) : (
            <div className="comic-panel-jagged bg-white overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-comic-black text-white">
                    <TableHead className="py-4 px-4 font-bangers text-xl">TIME</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SPEAKER</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SESSION</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl text-right">DURATION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {renderScheduleItems(afternoonSchedule)}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        
        {/* Closing Session */}
        <div>
          <div className="bg-comic-blue text-white p-3 md:p-4 font-bangers text-xl md:text-2xl mb-2 comic-border inline-flex items-center gap-2">
            <Mic size={isMobile ? 20 : 24} />
            <span>Closing Session</span>
            <Clock size={isMobile ? 20 : 24} />
          </div>
          
          {isMobile ? (
            <div className="p-4 md:p-6 comic-panel-jagged bg-white">
              {renderMobileClosingSchedule(closingSchedule)}
            </div>
          ) : (
            <div className="comic-panel-jagged bg-white overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-comic-black text-white">
                    <TableHead className="py-4 px-4 font-bangers text-xl">TIME</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl">SESSION</TableHead>
                    <TableHead className="py-4 px-4 font-bangers text-xl text-right">DURATION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {closingSchedule.map((item, index) => (
                    <TableRow key={index} className="bg-comic-blue/20">
                      <TableCell className="py-4 px-4 font-comic font-bold text-comic-black">{item.time}</TableCell>
                      <TableCell className="py-4 px-4 font-comic text-comic-black">
                        <div className="flex items-center gap-2">
                          <Mic size={16} className="text-comic-blue" />
                          <span>{item.title}</span>
                          <span className="ml-2 inline-block px-2 py-1 bg-comic-blue text-xs rounded-full text-white font-bold">CLOSING</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-4 font-comic text-right text-comic-black">{item.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
