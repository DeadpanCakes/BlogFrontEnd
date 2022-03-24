const Content = (props) => {
  const { content } = props;
  const sectionStyle="min-h-[60vh]"
  return (
    <section className={sectionStyle}>
      <p>{content}</p>
    </section>
  );
};

export default Content;
