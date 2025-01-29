const TechBadge = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md'>
      {icon}
      <span className='text-sm font-medium'>{label}</span>
    </div>
  );
};
export default TechBadge;
