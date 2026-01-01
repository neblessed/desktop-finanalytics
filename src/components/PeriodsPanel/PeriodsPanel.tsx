import { useState } from 'react';
import './PeriodsPanel.css';

function PeriodsPanel() {
   const [daily, setDaily] = useState(true);
   const [weekly, setWeekly] = useState(false);
   const [monthly, setMonthly] = useState(false);

   const handlePeriodSwitch = (period: 'daily' | 'weekly' | 'monthly') => {
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
