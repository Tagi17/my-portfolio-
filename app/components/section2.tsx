interface SectionProps {
    title: string;
    id: string;
  }
  
  const Section: React.FC<SectionProps> = ({ title, id }) => {
    return (
      <div id={"Experience"} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Look at all these articles</h1>
      </div>
    );
  };
  
  export default Section;