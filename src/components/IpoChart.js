import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const IpoChart = ({ data, type = 'bar', title, subtitle }) => {
  const chartData = data || [
    { label: 'Technology', value: 35, color: 'bg-blue-500' },
    { label: 'Finance', value: 25, color: 'bg-green-500' },
    { label: 'Healthcare', value: 20, color: 'bg-purple-500' },
    { label: 'Energy', value: 15, color: 'bg-orange-500' },
    { label: 'Education', value: 5, color: 'bg-red-500' }
  ];

  const maxValue = Math.max(...chartData.map(item => item.value));

  const renderBarChart = () => (
    <div className="space-y-3">
      {chartData.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-20 text-sm font-medium text-gray-700">{item.label}</div>
          <div className="flex-1 bg-gray-200 rounded-full h-3">
            <div
              className={`${item.color} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            ></div>
          </div>
          <div className="w-12 text-sm font-semibold text-gray-900">{item.value}%</div>
        </div>
      ))}
    </div>
  );

  const renderPieChart = () => (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
          {chartData.map((item, index) => {
            const percentage = (item.value / chartData.reduce((sum, d) => sum + d.value, 0)) * 100;
            const circumference = 2 * Math.PI * 14;
            const strokeDasharray = (percentage / 100) * circumference;
            const strokeDashoffset = circumference - strokeDasharray;
            const rotation = chartData
              .slice(0, index)
              .reduce((sum, d) => sum + (d.value / chartData.reduce((s, item) => s + item.value, 0)) * 360, 0);

            return (
              <circle
                key={index}
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke={item.color.replace('bg-', '').replace('-500', '')}
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform={`rotate(${rotation} 16 16)`}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {chartData.reduce((sum, item) => sum + item.value, 0)}
            </div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLineChart = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Growth Trend</span>
        </div>
        <div className="text-sm text-gray-500">Last 6 months</div>
      </div>
      <div className="h-32 bg-gray-50 rounded-lg p-4">
        <div className="flex items-end justify-between h-full space-x-1">
          {[65, 72, 68, 85, 78, 92].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-500"
                style={{ height: `${value}%` }}
              ></div>
              <div className="text-xs text-gray-500 mt-1">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChart = () => {
    switch (type) {
      case 'pie':
        return renderPieChart();
      case 'line':
        return renderLineChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        <div className="flex items-center space-x-2">
          {type === 'bar' && <BarChart3 className="w-5 h-5 text-gray-400" />}
          {type === 'pie' && <PieChart className="w-5 h-5 text-gray-400" />}
          {type === 'line' && <Activity className="w-5 h-5 text-gray-400" />}
        </div>
      </div>
      
      <div className="mb-4">
        {renderChart()}
      </div>

      {type === 'pie' && (
        <div className="grid grid-cols-2 gap-2">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-xs text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IpoChart; 