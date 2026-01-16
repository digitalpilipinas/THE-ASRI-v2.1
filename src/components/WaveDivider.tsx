interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip = false, color = '#F5F1E8' }: WaveDividerProps) => {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
        <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
};

export default WaveDivider;