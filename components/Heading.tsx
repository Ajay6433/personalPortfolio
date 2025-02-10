// components/Heading.tsx

type HeadingProps = {
    title: string;
    paragraph: string;
  };
  
  const Heading = ({ title, paragraph }: HeadingProps) => {
    return (
      <div className="mt-24">
        <h1 className="font-bold text-[28px] md:text-[36px] text-center text-[#42446E]">{title}</h1>
        <p className="text-[16px] p-2 md:text-[32px] text-[#666666] text-center mb-8">{paragraph}</p>
      </div>
    );
  };
  
  export default Heading;
  