import {
  Info,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const typeStyles = {
  info: {
    className: "bg-blue-100 text-blue-800 ring-1 ring-blue-300",
    icon: <Info size={18} className="text-blue-600" />
  },
  success: {
    className: "bg-green-100 text-green-800 ring-1 ring-green-300",
    icon: <CheckCircle size={18} className="text-green-600" />
  },
  error: {
    className: "bg-red-100 text-red-800 ring-1 ring-red-300",
    icon: <XCircle size={18} className="text-red-600" />
  },
  warning: {
    className: "bg-yellow-100 text-yellow-900 ring-1 ring-yellow-300",
    icon: <AlertTriangle size={18} className="text-yellow-600" />
  },
};

export default function Container({ toast }) {
  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      {toast.map(({ id, message, type }) => {
        const { className, icon } = typeStyles[type] || typeStyles.info;

        return (
          <div
            key={id}
            className={`flex items-start gap-3 px-4 py-3 rounded-lg min-w-[180px] shadow-lg backdrop-blur-md animate-fade-in-out ${className}`}
          >
            <div className="pt-1">{icon}</div>
            <div className="text-sm font-medium">{message}</div>
          </div>
        );
      })}
    </div>
  );
}
