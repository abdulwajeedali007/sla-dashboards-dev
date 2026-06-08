const Index = ({ progress = 0 }: { progress?: number }) => {
  const getColor = () => {
    // if (progress === 100) return 'bg-green-500';
    if (progress > 0) return 'bg-green-500';
    return 'bg-gray-400';
  };

  return (
    <div className="flex gap-4 justify-center items-center">
      <p className="p-0 m-0 text-sm">{progress}%</p>
      <div className="w-20 bg-gray-200  h-3 rounded-xl overflow-hidden">
        <div
          className={`h-3 ${getColor()} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Index;
