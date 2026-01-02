import { useState } from 'react';
import './PeriodsPanel.css';

type Period = 'daily' | 'weekly' | 'monthly';

type PeriodsPanelProps = {
   daily: boolean;
   setDaily: (set: boolean) => void;
   weekly: boolean;
   setWeekly: (set: boolean) => void;
   monthly: boolean;
   setMonthly: (set: boolean) => void;
};

function PeriodsPanel({
   daily,
   setDaily,
   weekly,
   setWeekly,
   monthly,
   setMonthly,
}: PeriodsPanelProps) {
   const handlePeriodSwitch = (period: Period) => {
      if (period === 'daily') {
         setWeekly(false);
         setMonthly(false);
         setDaily(true);
      }

      if (period === 'weekly') {
         setWeekly(true);
         setDaily(false);
         setMonthly(false);
      }

      if (period === 'monthly') {
         setMonthly(true);
         setWeekly(false);
         setDaily(false);
      }
   };

   return (
      <div className="controls">
         <div
            className={`period ${daily ? 'period-selected' : ''}`}
            onClick={() => handlePeriodSwitch('daily')}
         >
            Daily
         </div>
         <div
            className={`period ${weekly ? 'period-selected' : ''}`}
            onClick={() => handlePeriodSwitch('weekly')}
         >
            Weekly
         </div>
         <div
            className={`period ${monthly ? 'period-selected' : ''}`}
            onClick={() => handlePeriodSwitch('monthly')}
         >
            Monthly
         </div>
      </div>
   );
}

export default PeriodsPanel;
