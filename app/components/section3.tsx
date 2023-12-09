interface SectionProps {
    title: string;
    id: string;
  }
  
  const Section: React.FC<SectionProps> = ({ title, id }) => {
    return (
      <div id={"contactMe"} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1> Reach out to me at inzhagey@gmail.com </h1>
      </div>
    );
  };
  
  export default Section;