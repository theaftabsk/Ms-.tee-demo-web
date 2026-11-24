import React from "react";
import { Users, Trophy, Layers, Calendar } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      value: "500+",
      label: "Students Trained",
      icon: Users,
    },
    {
      value: "98%",
      label: "State Board Success",
      icon: Trophy,
    },
    {
      value: "10+",
      label: "Training Programs",
      icon: Layers,
    },
    {
      value: "15+",
      label: "Years of Industry Experience",
      icon: Calendar,
    },
  ];

  return (
    <div className="relative -mt-10 lg:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-full shadow-card border border-gray-100 p-4 sm:p-6 lg:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:divide-x divide-gray-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3.5 justify-center p-1.5 sm:p-0"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-gray-900 font-heading leading-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] sm:text-[13px] font-medium text-gray-600 leading-snug">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
